import useFetchOrder from "../../hooks/useFetchOrder";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Order = () => {
  const { orders, loading } = useFetchOrder();

  return (
    <div className="mt-6 card bg-base-100 shadow-sm">
      <div className="card-body">
        <h3 className="card-title text-lg">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                // Skeleton rows
                Array(5)
                  .fill()
                  .map((_, index) => (
                    <tr key={index}>
                      <td><Skeleton width={60} /></td>
                      <td><Skeleton width={100} /></td>
                      <td><Skeleton width={80} height={25} /></td>
                      <td><Skeleton width={120} /></td>
                      <td><Skeleton width={80} /></td>
                    </tr>
                  ))
              ) : (
                orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.user}</td>
                    <td>
                      <div className="badge badge-success">{order.status}</div>
                    </td>
                    <td>{order.created_at}</td>
                    <td>{order.total_price}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;