import { FiPackage, FiShoppingCart, FiStar, FiUsers } from "react-icons/fi";
import StatCard from "../components/Dashboard/StatCard";
import Order from "../components/Dashboard/Order";
import useFetchOrder from "../hooks/useFetchOrder";
import useFetchCategories from "../hooks/useFetchCategories";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useFetchUsers from "../hooks/useFetchUsers";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Dashboard() {
  const { orders, loading: ordersLoading } = useFetchOrder();
  const categories = useFetchCategories();
  const users = useFetchUsers();
  const [products, setProducts] = useState({ count: 0 });
  const [loadingProducts, setLoadingProducts] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await apiClient.get("/products/");
      setProducts(res.data);
    } catch (error) {
      console.log("error fetching products", error);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Products */}
        {loadingProducts ? (
          <Skeleton height={100} />
        ) : (
          <StatCard
            icon={FiPackage}
            title="Total Products"
            value={products.count || 0}
          />
        )}

        {/* Categories */}
        {categories.length === 0 ? (
          <Skeleton height={100} />
        ) : (
          <StatCard
            icon={FiPackage}
            title="Total Categories"
            value={categories.length}
          />
        )}

        {/* Orders */}
        {ordersLoading ? (
          <Skeleton height={100} />
        ) : (
          <StatCard
            icon={FiShoppingCart}
            title="Total Orders"
            value={orders.length}
          />
        )}

        {/* Users */}
        {users.length === 0 ? (
          <Skeleton height={100} />
        ) : (
          <StatCard icon={FiUsers} title="Total Users" value={users.length} />
        )}
      </div>

      <Order />
    </div>
  );
}