import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import {
  Package,
  UserRound,
  IndianRupee,
  CalendarDays,
  RefreshCw,
  Truck,
} from "lucide-react";

const AdminOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch("/api/orders", {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    };

    fetchOrders();
  }, [user]);

  const updateStatus = async (id, status) => {
    const res = await fetch(`/api/orders/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ status }),
    });

    if (res.ok) {
      setOrders(
        orders.map((order) =>
          order._id === id ? { ...order, status } : order
        )
      );
    }
  };

  const getStatusStyle = (status) => {
    if (status === "Delivered") {
      return "bg-green-100 text-green-700 border-green-200";
    }

    if (status === "Shipped") {
      return "bg-blue-100 text-blue-700 border-blue-200";
    }

    return "bg-orange-100 text-orange-700 border-orange-200";
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#F8F7FC] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5F2FF]">
                <Package className="h-5 w-5 text-[#6C47FF]" />
              </div>

              <span className="text-sm font-semibold text-[#6C47FF]">
                Order Management
              </span>
            </div>

            <h1 className="text-2xl font-extrabold tracking-tight text-[#0F0B24] sm:text-3xl">
              Manage Orders
            </h1>

            <p className="mt-1 text-sm text-[#0F0B24]/55">
              View and manage customer orders from one place.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-xl border border-[#0F0B24]/8 bg-white px-4 py-2.5 shadow-[0_8px_30px_-18px_rgba(15,11,36,0.35)]">
            <Truck className="h-4 w-4 text-[#6C47FF]" />
            <span className="text-sm font-semibold text-[#0F0B24]">
              {orders.length} Orders
            </span>
          </div>
        </div>

        {/* Orders Card */}
        <div className="overflow-hidden rounded-3xl border border-[#0F0B24]/8 bg-white shadow-[0_10px_35px_-20px_rgba(15,11,36,0.35)]">

          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-[#0F0B24]/8 px-5 py-4 sm:px-6">
            <div>
              <h2 className="text-base font-bold text-[#0F0B24]">
                All Orders
              </h2>
              <p className="mt-0.5 text-xs text-[#0F0B24]/50">
                Track order status and customer details
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5F2FF]">
              <Package className="h-4 w-4 text-[#6C47FF]" />
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#0F0B24]/8 bg-[#FAF9FF]">
                  <th className="px-6 py-4 text-left text-xs font-bold tracking-wide text-[#0F0B24]/50">
                    ORDER ID
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-bold tracking-wide text-[#0F0B24]/50">
                    USER
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-bold tracking-wide text-[#0F0B24]/50">
                    TOTAL
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-bold tracking-wide text-[#0F0B24]/50">
                    DATE
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-bold tracking-wide text-[#0F0B24]/50">
                    STATUS
                  </th>
                </tr>
              </thead>

              <tbody>
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <tr
                      key={order._id}
                      className="border-b border-[#0F0B24]/6 transition hover:bg-[#FAF9FF]"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5F2FF]">
                            <Package className="h-4 w-4 text-[#6C47FF]" />
                          </div>

                          <span className="font-mono text-sm font-semibold text-[#0F0B24]">
                            {order._id.substring(0, 8)}...
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                            <UserRound className="h-4 w-4 text-blue-600" />
                          </div>

                          <span className="text-sm font-semibold text-[#0F0B24]">
                            {order.user?.name || "Deleted User"}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 font-bold text-[#0F0B24]">
                          <IndianRupee className="h-4 w-4" />
                          {order.totalAmount.toFixed(2)}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-[#0F0B24]/60">
                          <CalendarDays className="h-4 w-4" />
                          {new Date(order.createdAt).toLocaleDateString()}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <select
                          value={order.status}
                          onChange={(e) =>
                            updateStatus(order._id, e.target.value)
                          }
                          className={`cursor-pointer rounded-xl border px-3 py-2 text-sm font-semibold outline-none transition ${getStatusStyle(
                            order.status
                          )}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-14 text-center">
                      <Package className="mx-auto h-10 w-10 text-[#0F0B24]/20" />

                      <p className="mt-3 text-sm font-semibold text-[#0F0B24]">
                        No orders found
                      </p>

                      <p className="mt-1 text-xs text-[#0F0B24]/50">
                        Customer orders will appear here.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-3 p-4 md:hidden">
            {orders.length > 0 ? (
              orders.map((order) => (
                <div
                  key={order._id}
                  className="rounded-2xl border border-[#0F0B24]/8 bg-[#FAF9FF] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F2FF]">
                        <Package className="h-4 w-4 text-[#6C47FF]" />
                      </div>

                      <div>
                        <p className="font-mono text-xs font-bold text-[#0F0B24]">
                          #{order._id.substring(0, 8)}...
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#0F0B24]">
                          {order.user?.name || "Deleted User"}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`rounded-full border px-2.5 py-1 text-[11px] font-bold ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white p-3">
                      <div className="flex items-center gap-1 text-xs text-[#0F0B24]/45">
                        <IndianRupee className="h-3.5 w-3.5" />
                        Total
                      </div>

                      <p className="mt-1 text-sm font-bold text-[#0F0B24]">
                        ₹{order.totalAmount.toFixed(2)}
                      </p>
                    </div>

                    <div className="rounded-xl bg-white p-3">
                      <div className="flex items-center gap-1 text-xs text-[#0F0B24]/45">
                        <CalendarDays className="h-3.5 w-3.5" />
                        Date
                      </div>

                      <p className="mt-1 text-sm font-bold text-[#0F0B24]">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <label className="mb-1.5 block text-xs font-bold text-[#0F0B24]/55">
                      Update Status
                    </label>

                    <select
                      value={order.status}
                      onChange={(e) =>
                        updateStatus(order._id, e.target.value)
                      }
                      className={`w-full cursor-pointer rounded-xl border px-3 py-2.5 text-sm font-semibold outline-none ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center">
                <Package className="mx-auto h-10 w-10 text-[#0F0B24]/20" />

                <p className="mt-3 text-sm font-semibold text-[#0F0B24]">
                  No orders found
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-[#0F0B24]/8 bg-[#FAF9FF] px-5 py-3.5 sm:px-6">
            <p className="text-xs font-semibold text-[#0F0B24]/50">
              Total Orders:{" "}
              <span className="text-[#0F0B24]">{orders.length}</span>
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-green-600">
              <RefreshCw className="h-3.5 w-3.5" />
              Live Order Management
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;