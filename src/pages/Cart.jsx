import { Suspense, useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../components/Cart/CartItemList";
import CartSummary from "../components/Cart/CartSummary";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Cart = () => {
  const {
    cart,
    cartId,
    getCart,
    loading,
    
    updateCartItemQuantity,
    deleteCartItems,
  } = useCartContext();

  const [localCart, setLocalCart] = useState(cart);

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  if (loading)
return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {Array(3)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="card bg-base-100 shadow-md border border-base-200 rounded-xl p-4"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <Skeleton circle width={60} height={60} />
                    <div className="flex-1">
                      <Skeleton width="60%" height={20} />
                      <Skeleton width="40%" height={15} />
                    </div>
                  </div>
                  <Skeleton width="30%" height={20} />
                  <Skeleton width="50%" height={20} />
                </div>
              ))}
          </div>
          <div className="card bg-base-100 shadow-md border border-base-200 rounded-xl p-6">
            <Skeleton width="50%" height={30} className="mb-4" />
            <Skeleton width="70%" height={20} className="mb-2" />
            <Skeleton width="40%" height={20} className="mb-2" />
            <Skeleton height={40} className="mt-4 rounded" />
          </div>
        </div>
      </div>
    );

  
  if (!localCart) return <p>No Cart Found</p>;

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const prevLocalCartCopy = localCart; // store a copy of localCart

    setLocalCart((prevLocalCart) => {
     
      const updatedItmes = prevLocalCart.items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: newQuantity,
              total_price: item.product.price * newQuantity,
            }
          : item
      );

      return {
        ...prevLocalCart,
        items: updatedItmes,
        total_price: updatedItmes.reduce(
          (sum, item) => sum + item.total_price,
          0
        ),
      };
    });

    try {
      await updateCartItemQuantity(itemId, newQuantity);
    } catch (error) {
      console.log(error);
      setLocalCart(prevLocalCartCopy); // Rollback to previous state if API fails
    }
  };

  const handleRemoveItem = async (itemId) => {
    setLocalCart((prevLocalCart) => {
      const updatedItems = prevLocalCart.items.filter(
        (item) => item.id != itemId
      );

      return {
        ...prevLocalCart,
        items: updatedItems,
        total_price: updatedItems.reduce(
          (sum, item) => sum + item.total_price,
          0
        ),
      };
    });

    try {
      await deleteCartItems(itemId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Suspense fallback={<span className="loading loading-spinner loading-xs mr-2"></span>}>
            <CartItemList
              items={localCart.items}
              handleUpdateQuantity={handleUpdateQuantity}
              handleRemoveItem={handleRemoveItem}
            />
          </Suspense>
        </div>
        <div>
          <CartSummary
            totalPrice={localCart.total_price}
            itemCount={localCart.items.length}
            cartId={cartId}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;