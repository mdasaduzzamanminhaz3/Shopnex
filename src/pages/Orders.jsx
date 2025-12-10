import { useEffect, useState } from "react";
import OrderCard from "../components/Orders/OrderCart";
import authApiClient from "../services/auth-api-client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    authApiClient
      .get("/orders/")
      .then((res) => setOrders(res.data))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await authApiClient.post(`/orders/${orderId}/cancel/`);
      if (response.status === 200) {
        setOrders((prevOrder) =>
          prevOrder.map((order) =>
            order.id === orderId ? { ...order, status: "Canceled" } : order
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Order Details</h1>

      {loading ? (
        <div className="space-y-4">
          {Array(3)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-md border border-base-200 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <Skeleton width="40%" height={20} />
                  <Skeleton width="20%" height={20} />
                </div>
                <Skeleton count={2} />
                <div className="flex gap-2 mt-4">
                  <Skeleton width={100} height={35} />
                  <Skeleton width={100} height={35} />
                </div>
              </div>
            ))}
        </div>
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">No Orders Found</p>
      ) : (
        orders.map((order) => (
          <OrderCard key={order.id} order={order} onCancel={handleCancelOrder} />
        ))
      )}
    </div>
  );
};

export default Orders;