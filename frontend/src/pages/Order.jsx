
// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowLeft,
//   CheckCircle2,
//   Clock3,
//   MapPin,
//   Package,
//   ShoppingBag,
// } from "lucide-react";

// import { AuthContext } from "../context/Authcontext";

// const Orders = () => {
//   const { user } = useContext(AuthContext);

//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchOrders = async () => {
//     if (!user?.token) {
//       setOrders([]);
//       setLoading(false);
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch("/api/orders/myOrder", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Failed to fetch orders");
//       }

//       setOrders(data || []);
//     } catch (error) {
//       console.error("Fetch Orders Error:", error);
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, [user]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center">
//           <p className="text-sm font-semibold text-gray-500">
//             Loading your orders...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-6xl">

//         {/* HEADER */}
//         <div className="mb-8">
//           <Link
//             to="/"
//             className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-gray-900"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Continue Shopping
//           </Link>

//           <div className="flex items-center gap-4">
//             <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black">
//               <ShoppingBag className="h-6 w-6 text-white" />
//             </div>

//             <div>
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
//                 GenZVibe
//               </p>

//               <h1 className="mt-1 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
//                 My Orders
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Track and view your previous orders.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* EMPTY ORDERS */}
//         {orders.length === 0 ? (
//           <div className="flex min-h-[55vh] items-center justify-center">
//             <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">

//               <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">
//                 <Package className="h-7 w-7 text-gray-500" />
//               </div>

//               <h2 className="mt-5 text-2xl font-black text-gray-900">
//                 No orders yet
//               </h2>

//               <p className="mt-2 text-sm leading-6 text-gray-500">
//                 You haven't placed any orders yet. Start shopping and your
//                 orders will appear here.
//               </p>

//               <Link
//                 to="/"
//                 className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition hover:bg-gray-800"
//               >
//                 Start Shopping
//                 <ShoppingBag className="h-4 w-4" />
//               </Link>
//             </div>
//           </div>
//         ) : (
//           /* ORDERS */
//           <div className="space-y-6">
//             {orders.map((order) => (
//               <div
//                 key={order._id}
//                 className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
//               >

//                 {/* ORDER HEADER */}
//                 <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

//                   <div>
//                     <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
//                       Order ID
//                     </p>

//                     <p className="mt-1 break-all text-sm font-bold text-gray-900">
//                       #{order._id}
//                     </p>

//                     <p className="mt-1 text-xs text-gray-400">
//                       {order.createdAt
//                         ? new Date(order.createdAt).toLocaleDateString(
//                             "en-IN",
//                             {
//                               day: "2-digit",
//                               month: "short",
//                               year: "numeric",
//                             }
//                           )
//                         : "Date unavailable"}
//                     </p>
//                   </div>

//                   <div className="flex items-center gap-2 self-start rounded-full bg-emerald-50 px-4 py-2 sm:self-auto">
//                     <CheckCircle2 className="h-4 w-4 text-emerald-600" />

//                     <span className="text-xs font-bold capitalize text-emerald-700">
//                       {order.status || "Processing"}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_280px]">

//                   {/* PRODUCTS */}
//                   <div>
//                     <div className="mb-4 flex items-center gap-2">
//                       <Package className="h-4 w-4 text-gray-500" />

//                       <h2 className="text-sm font-black text-gray-900">
//                         Order Items
//                       </h2>
//                     </div>

//                     <div className="space-y-3">
//                       {order.items?.map((item, index) => (
//                         <div
//                           key={item._id || index}
//                           className="flex items-center justify-between gap-4 rounded-2xl bg-gray-50 p-4"
//                         >
//                           <div className="min-w-0">
//                             <p className="truncate text-sm font-bold text-gray-900">
//                               {item.productId?.name || "Product"}
//                             </p>

//                             <p className="mt-1 text-xs text-gray-400">
//                               Qty: {item.qty}
//                             </p>
//                           </div>

//                           <div className="shrink-0 text-right">
//                             <p className="text-sm font-black text-gray-900">
//                               ₹
//                               {(
//                                 Number(item.price || 0) *
//                                 Number(item.qty || 0)
//                               ).toFixed(2)}
//                             </p>

//                             <p className="mt-1 text-[11px] text-gray-400">
//                               ₹{Number(item.price || 0).toFixed(2)} each
//                             </p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* ORDER INFO */}
//                   <div className="space-y-4">

//                     {/* TOTAL */}
//                     <div className="rounded-2xl bg-gray-50 p-5">
//                       <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
//                         Total Amount
//                       </p>

//                       <p className="mt-2 text-2xl font-black text-gray-900">
//                         ₹{Number(order.totalAmount || 0).toFixed(2)}
//                       </p>
//                     </div>

//                     {/* ADDRESS */}
//                     <div className="rounded-2xl border border-gray-100 p-5">
//                       <div className="flex items-center gap-2">
//                         <MapPin className="h-4 w-4 text-gray-500" />

//                         <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
//                           Delivery Address
//                         </p>
//                       </div>

//                       <p className="mt-3 text-sm font-semibold text-gray-800">
//                         {order.address?.fullName}
//                       </p>

//                       <p className="mt-1 text-xs leading-5 text-gray-500">
//                         {order.address?.street}
//                         <br />
//                         {order.address?.city} -{" "}
//                         {order.address?.postalCode}
//                         <br />
//                         {order.address?.country}
//                       </p>
//                     </div>

//                     {/* PAYMENT */}
//                     <div className="rounded-2xl border border-gray-100 p-5">
//                       <div className="flex items-center gap-2">
//                         <CheckCircle2 className="h-4 w-4 text-emerald-500" />

//                         <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
//                           Payment
//                         </p>
//                       </div>

//                       <p className="mt-2 text-sm font-bold text-emerald-600">
//                         Paid
//                       </p>

//                       {order.paymentId && (
//                         <p className="mt-1 break-all text-[10px] text-gray-400">
//                           ID: {order.paymentId}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Orders;





import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Package,
  ShoppingBag,
} from "lucide-react";

import { AuthContext } from "../context/Authcontext";

const Orders = () => {
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    if (!user?.token) {
      setOrders([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/orders/myOrder", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch orders");
      }

      setOrders(data || []);
    } catch (error) {
      console.error("Fetch Orders Error:", error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [user]);

  /* =========================
     LOADING SCREEN
  ========================= */
  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          {/* LOADING HEADER */}
          <div className="mb-8">

            {/* Continue Shopping Skeleton */}
            <div className="h-5 w-36 animate-pulse rounded bg-gray-200" />

            <div className="mt-6 flex items-center gap-4">

              {/* Logo Skeleton */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black shadow-sm">
                <ShoppingBag className="h-6 w-6 animate-pulse text-white" />
              </div>

              {/* Heading Skeleton */}
              <div className="space-y-2">
                <div className="h-3 w-24 animate-pulse rounded bg-purple-200" />

                <div className="h-8 w-40 animate-pulse rounded-lg bg-gray-200" />

                <div className="h-4 w-64 animate-pulse rounded bg-gray-200" />
              </div>

            </div>
          </div>


          {/* LOADING ORDERS */}
          <div className="space-y-6">

            {[1, 2].map((card) => (
              <div
                key={card}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
              >

                {/* ORDER HEADER SKELETON */}
                <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

                  <div className="space-y-3">

                    <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />

                    <div className="h-5 w-64 animate-pulse rounded bg-gray-200" />

                    <div className="h-3 w-28 animate-pulse rounded bg-gray-100" />

                  </div>

                  <div className="h-9 w-28 animate-pulse rounded-full bg-emerald-50" />

                </div>


                {/* ORDER BODY */}
                <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_280px]">

                  {/* PRODUCTS SKELETON */}
                  <div>

                    <div className="mb-4 flex items-center gap-2">

                      <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />

                      <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

                    </div>


                    <div className="space-y-3">

                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between gap-4 rounded-2xl bg-gray-50 p-4"
                        >

                          {/* Product Info */}
                          <div className="space-y-2">

                            <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />

                            <div className="h-3 w-16 animate-pulse rounded bg-gray-100" />

                          </div>


                          {/* Product Price */}
                          <div className="space-y-2 text-right">

                            <div className="ml-auto h-4 w-20 animate-pulse rounded bg-gray-200" />

                            <div className="ml-auto h-3 w-24 animate-pulse rounded bg-gray-100" />

                          </div>

                        </div>
                      ))}

                    </div>

                  </div>


                  {/* ORDER INFO SKELETON */}
                  <div className="space-y-4">

                    {/* TOTAL */}
                    <div className="rounded-2xl bg-gray-50 p-5">

                      <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />

                      <div className="mt-3 h-7 w-32 animate-pulse rounded bg-gray-200" />

                    </div>


                    {/* ADDRESS */}
                    <div className="rounded-2xl border border-gray-100 p-5">

                      <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />

                      <div className="mt-4 space-y-2">

                        <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />

                        <div className="h-3 w-full animate-pulse rounded bg-gray-100" />

                        <div className="h-3 w-32 animate-pulse rounded bg-gray-100" />

                      </div>

                    </div>


                    {/* PAYMENT */}
                    <div className="rounded-2xl border border-gray-100 p-5">

                      <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />

                      <div className="mt-3 h-4 w-12 animate-pulse rounded bg-emerald-100" />

                      <div className="mt-2 h-3 w-40 animate-pulse rounded bg-gray-100" />

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>


          {/* MAIN LOADING INDICATOR */}
          <div className="mt-8 flex flex-col items-center justify-center">

            <div className="relative flex h-12 w-12 items-center justify-center">

              {/* Spinner */}
              <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600" />

              {/* Icon */}
              <ShoppingBag className="h-5 w-5 text-gray-900" />

            </div>


            <p className="mt-4 text-sm font-bold text-gray-700">
              Loading your orders
            </p>


            {/* Animated Dots */}
            <div className="mt-1 flex items-center gap-1">

              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-600 [animation-delay:-0.3s]" />

              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-600 [animation-delay:-0.15s]" />

              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-600" />

            </div>

          </div>

        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-8">

          <Link
            to="/"
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>


          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>


            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
                GenZVibe
              </p>

              <h1 className="mt-1 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                My Orders
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Track and view your previous orders.
              </p>

            </div>

          </div>

        </div>


        {/* EMPTY ORDERS */}
        {orders.length === 0 ? (

          <div className="flex min-h-[55vh] items-center justify-center">

            <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">
                <Package className="h-7 w-7 text-gray-500" />
              </div>


              <h2 className="mt-5 text-2xl font-black text-gray-900">
                No orders yet
              </h2>


              <p className="mt-2 text-sm leading-6 text-gray-500">
                You haven't placed any orders yet. Start shopping and your
                orders will appear here.
              </p>


              <Link
                to="/"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition hover:bg-gray-800"
              >
                Start Shopping
                <ShoppingBag className="h-4 w-4" />
              </Link>

            </div>

          </div>

        ) : (

          /* ORDERS */
          <div className="space-y-6">

            {orders.map((order) => (

              <div
                key={order._id}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
              >

                {/* ORDER HEADER */}
                <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Order ID
                    </p>

                    <p className="mt-1 break-all text-sm font-bold text-gray-900">
                      #{order._id}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">

                      {order.createdAt
                        ? new Date(order.createdAt).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )
                        : "Date unavailable"}

                    </p>

                  </div>


                  <div className="flex items-center gap-2 self-start rounded-full bg-emerald-50 px-4 py-2 sm:self-auto">

                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />

                    <span className="text-xs font-bold capitalize text-emerald-700">
                      {order.status || "Processing"}
                    </span>

                  </div>

                </div>


                <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_280px]">

                  {/* PRODUCTS */}
                  <div>

                    <div className="mb-4 flex items-center gap-2">

                      <Package className="h-4 w-4 text-gray-500" />

                      <h2 className="text-sm font-black text-gray-900">
                        Order Items
                      </h2>

                    </div>


                    <div className="space-y-3">

                      {order.items?.map((item, index) => (

                        <div
                          key={item._id || index}
                          className="flex items-center justify-between gap-4 rounded-2xl bg-gray-50 p-4"
                        >

                          <div className="min-w-0">

                            <p className="truncate text-sm font-bold text-gray-900">
                              {item.productId?.name || "Product"}
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                              Qty: {item.qty}
                            </p>

                          </div>


                          <div className="shrink-0 text-right">

                            <p className="text-sm font-black text-gray-900">
                              ₹
                              {(
                                Number(item.price || 0) *
                                Number(item.qty || 0)
                              ).toFixed(2)}
                            </p>

                            <p className="mt-1 text-[11px] text-gray-400">
                              ₹{Number(item.price || 0).toFixed(2)} each
                            </p>

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>


                  {/* ORDER INFO */}
                  <div className="space-y-4">

                    {/* TOTAL */}
                    <div className="rounded-2xl bg-gray-50 p-5">

                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Total Amount
                      </p>

                      <p className="mt-2 text-2xl font-black text-gray-900">
                        ₹{Number(order.totalAmount || 0).toFixed(2)}
                      </p>

                    </div>


                    {/* ADDRESS */}
                    <div className="rounded-2xl border border-gray-100 p-5">

                      <div className="flex items-center gap-2">

                        <MapPin className="h-4 w-4 text-gray-500" />

                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          Delivery Address
                        </p>

                      </div>


                      <p className="mt-3 text-sm font-semibold text-gray-800">
                        {order.address?.fullName}
                      </p>


                      <p className="mt-1 text-xs leading-5 text-gray-500">

                        {order.address?.street}

                        <br />

                        {order.address?.city} -{" "}
                        {order.address?.postalCode}

                        <br />

                        {order.address?.country}

                      </p>

                    </div>


                    {/* PAYMENT */}
                    <div className="rounded-2xl border border-gray-100 p-5">

                      <div className="flex items-center gap-2">

                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />

                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          Payment
                        </p>

                      </div>


                      <p className="mt-2 text-sm font-bold text-emerald-600">
                        Paid
                      </p>


                      {order.paymentId && (
                        <p className="mt-1 break-all text-[10px] text-gray-400">
                          ID: {order.paymentId}
                        </p>
                      )}

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Orders;