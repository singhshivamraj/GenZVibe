// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";

// import { removeFromCart, addToCart } from "../redux/cardSlice";
// import { LockKeyhole, Truck } from "lucide-react";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleUpdateQty = (item, qty) => {
//     if (qty > 0) {
//       dispatch(addToCart({ ...item, qty }));
//     }
//   };

//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.qty,
//     0
//   );

//   const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

//   return (
//     <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-6xl">
//         {cartItems.length === 0 ? (
//           /* ================= EMPTY CART ================= */
//           <div className="flex min-h-[75vh] items-center justify-center">
//             <div className="grid w-full max-w-5xl items-center gap-8 overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 md:grid-cols-2 md:p-10">

//               {/* IMAGE */}
//     <div className="w-full">
//   <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-md">
//     <img
//       src="/images/empty-cart.png"
//       alt="Empty shopping cart"
//       className="block w-full h-auto max-h-[420px] object-contain"
//     />
//   </div>
// </div>

//               {/* CONTENT */}
//               <div className="text-center md:text-left">
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
//                   Your shopping bag
//                 </p>

//                 <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-gray-900 sm:text-5xl">
//                   Your cart is empty.
//                 </h1>

//                 <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
//                    Looks like you haven't added anything yet.
//                 Discover something that matches your vibe.
//                 </p>

//                 <Link
//                   to="/shop"
//                   className="mt-8 inline-flex items-center rounded-xl bg-black px-8 py-4 text-sm font-bold text-white transition hover:bg-gray-800"
//                 >
//                   Start Shopping
//                   <span className="ml-2">→</span>
//                 </Link>

//                 <p className="mt-5 text-xs text-gray-400">
//                   Explore the latest GenZVibe collection
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           /* ================= CART ================= */
//           <>
//             {/* HEADER */}
//             <div className="mb-8">
//               <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
//                     GenZVibe Shopping Bag
//                   </p>

//                   <h1 className="mt-2 text-4xl font-black tracking-[-0.04em] text-gray-900 sm:text-5xl">
//                     Your Cart
//                   </h1>

//                   <p className="mt-2 text-sm text-gray-500">
//                     {totalItems} {totalItems === 1 ? "item" : "items"} in your
//                     cart
//                   </p>
//                 </div>

//                 <Link
//                   to="/shop"
//                   className="text-sm font-bold text-gray-700 underline underline-offset-4 transition hover:text-purple-600"
//                 >
//                   ← Continue Shopping
//                 </Link>
//               </div>
//             </div>

//             {/* CART LAYOUT */}
//             <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

//               {/* CART ITEMS */}
//               <div className="space-y-4">
//                 {cartItems.map((item) => (
//                   <div
//                     key={item.productId}
//                     className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-300 hover:shadow-md sm:p-5"
//                   >
//                     <div className="flex gap-4 sm:gap-6">

//                       {/* IMAGE */}
//                       <Link
//                         to={`/product/${item.productId}`}
//                         className="h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-36 sm:w-28"
//                       >
//                         <img
//                           src={item.imageUrl}
//                           alt={item.name}
//                           className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                         />
//                       </Link>

//                       {/* DETAILS */}
//                       <div className="flex min-w-0 flex-1 flex-col">
//                         <div className="flex items-start justify-between gap-3">

//                           <div className="min-w-0">
//                             <Link
//                               to={`/product/${item.productId}`}
//                               className="line-clamp-2 text-base font-bold text-gray-900 transition hover:text-purple-600 sm:text-lg"
//                             >
//                               {item.name}
//                             </Link>

//                             <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-400">
//                               GenZVibe Collection
//                             </p>
//                           </div>

//                           {/* REMOVE */}
//                           <button
//                             onClick={() => handleRemove(item.productId)}
//                             className="shrink-0 text-xs font-semibold text-gray-400 transition hover:text-red-500"
//                           >
//                             Remove
//                           </button>
//                         </div>

//                         {/* PRICE + QUANTITY */}
//                         <div className="mt-auto flex flex-col gap-4 pt-5 sm:flex-row sm:items-end sm:justify-between">

//                           {/* QUANTITY */}
//                           <div>
//                             <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
//                               Quantity
//                             </p>

//                             <div className="flex h-10 w-fit items-center overflow-hidden rounded-lg border border-gray-200">
//                               <button
//                                 onClick={() =>
//                                   handleUpdateQty(item, item.qty - 1)
//                                 }
//                                 className="flex h-full w-10 items-center justify-center text-lg font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black"
//                               >
//                                 −
//                               </button>

//                               <span className="flex h-full min-w-10 items-center justify-center border-x border-gray-200 text-sm font-bold text-gray-900">
//                                 {item.qty}
//                               </span>

//                               <button
//                                 onClick={() =>
//                                   handleUpdateQty(item, item.qty + 1)
//                                 }
//                                 className="flex h-full w-10 items-center justify-center text-lg font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black"
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </div>

//                           {/* PRICE */}
//                           <div className="text-left sm:text-right">
//                             <p className="text-xs text-gray-400">
//                               ${item.price.toFixed(2)} each
//                             </p>

//                             <p className="mt-1 text-xl font-black text-gray-900">
//                               ${(item.price * item.qty).toFixed(2)}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* SUMMARY */}
//               <div className="lg:sticky lg:top-6 lg:h-fit">
//                 <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

//                   <div className="flex items-center justify-between">
//                     <h2 className="text-lg font-black text-gray-900">
//                       Order Summary
//                     </h2>

//                     <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500">
//                       {totalItems} items
//                     </span>
//                   </div>

//                   {/* PRICE DETAILS */}
//                   <div className="mt-6 space-y-4 text-sm">

//                     <div className="flex justify-between text-gray-500">
//                       <span>Subtotal</span>

//                       <span className="font-semibold text-gray-900">
//                         ${totalPrice.toFixed(2)}
//                       </span>
//                     </div>

//                     <div className="flex justify-between text-gray-500">
//                       <span>Shipping</span>

//                       <span className="font-semibold text-emerald-600">
//                         FREE
//                       </span>
//                     </div>

//                     <div className="flex justify-between text-gray-500">
//                       <span>Taxes</span>

//                       <span className="text-gray-400">
//                         Calculated at checkout
//                       </span>
//                     </div>
//                   </div>

//                   <div className="my-6 h-px bg-gray-200" />

//                   {/* TOTAL */}
//                   <div className="flex items-end justify-between">
//                     <div>
//                       <p className="text-xs font-medium text-gray-400">
//                         Total
//                       </p>

//                       <p className="mt-1 text-3xl font-black tracking-tight text-gray-900">
//                         ${totalPrice.toFixed(2)}
//                       </p>
//                     </div>
//                   </div>

//                   {/* CHECKOUT */}
//                   <button
//                     onClick={() => navigate("/checkout")}
//                     className="mt-6 flex w-full items-center justify-center rounded-xl bg-black px-6 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-gray-800 active:scale-[0.99]"
//                   >
//                     Proceed to Checkout
//                     <span className="ml-2">→</span>
//                   </button>

//                   {/* TRUST INFO */}
//                   <div className="mt-5 space-y-3 border-t border-gray-100 pt-5">

//                     <div className="flex items-center gap-3">
//                       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm">
//                          <LockKeyhole className="h-4 w-4 text-gray-600" />
//                       </span>

//                       <div>
//                         <p className="text-xs font-bold text-gray-900">
//                           Secure Checkout
//                         </p>

//                         <p className="text-[11px] text-gray-400">
//                           Your payment is protected
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm">
//                          <Truck className="h-4 w-4 text-gray-600" />
//                       </span>

//                       <div>
//                         <p className="text-xs font-bold text-gray-900">
//                           Free Shipping
//                         </p>

//                         <p className="text-[11px] text-gray-400">
//                           On your GenZVibe order
//                         </p>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>

//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;










// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import { AuthContext } from "../context/Authcontext";
// import { LockKeyhole, Truck } from "lucide-react";

// const Cart = () => {
//   const { user } = useContext(AuthContext);

//   const navigate = useNavigate();

//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ================= GET CART =================
//   const fetchCart = async () => {
//     if (!user?.token) {
//       setCartItems([]);
//       setLoading(false);
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch("/api/cart", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Failed to fetch cart");
//       }

//       setCartItems(data.items || []);
//     } catch (error) {
//       console.error("Fetch Cart Error:", error);
//       setCartItems([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, [user]);

//   // ================= REMOVE PRODUCT =================
//   const handleRemove = async (productId) => {
//     try {
//       const res = await fetch(`/api/cart/${productId}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Failed to remove product");
//       }

//       setCartItems(data.cart?.items || []);
//     } catch (error) {
//       console.error("Remove Cart Error:", error);
//       alert(error.message);
//     }
//   };

//   // ================= UPDATE QUANTITY =================
//   const handleUpdateQty = async (item, qty) => {
//     if (qty < 1) {
//       return;
//     }

//     const productId = item.productId._id;

//     try {
//       const res = await fetch(`/api/cart/${productId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${user.token}`,
//         },
//         body: JSON.stringify({
//           qty,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Failed to update quantity");
//       }

//       setCartItems(data.cart?.items || []);
//     } catch (error) {
//       console.error("Update Cart Error:", error);
//       alert(error.message);
//     }
//   };

//   // ================= CLEAR CART =================
//   const handleClearCart = async () => {
//     try {
//       const res = await fetch("/api/cart", {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Failed to clear cart");
//       }

//       setCartItems(data.cart?.items || []);
//     } catch (error) {
//       console.error("Clear Cart Error:", error);
//       alert(error.message);
//     }
//   };

//   // ================= TOTAL PRICE =================
//   const totalPrice = cartItems.reduce(
//     (acc, item) =>
//       acc + Number(item.productId?.price || 0) * Number(item.qty || 0),
//     0
//   );

//   // ================= TOTAL ITEMS =================
//   const totalItems = cartItems.reduce(
//     (acc, item) => acc + Number(item.qty || 0),
//     0
//   );

//   // ================= LOADING =================
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center">
//           <p className="text-sm font-semibold text-gray-500">
//             Loading your cart...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-6xl">
//         {cartItems.length === 0 ? (
//           /* ================= EMPTY CART ================= */
//           <div className="flex min-h-[75vh] items-center justify-center">
//             <div className="grid w-full max-w-5xl items-center gap-8 overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 md:grid-cols-2 md:p-10">

//               {/* IMAGE */}
//               <div className="w-full">
//                 <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-md">
//                   <img
//                     src="/images/empty-cart.png"
//                     alt="Empty shopping cart"
//                     className="block h-auto max-h-[420px] w-full object-contain"
//                   />
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="text-center md:text-left">
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
//                   Your shopping bag
//                 </p>

//                 <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-gray-900 sm:text-5xl">
//                   Your cart is empty.
//                 </h1>

//                 <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
//                   Looks like you haven't added anything yet.
//                   Discover something that matches your vibe.
//                 </p>

//                 <Link
//                   to="/shop"
//                   className="mt-8 inline-flex items-center rounded-xl bg-black px-8 py-4 text-sm font-bold text-white transition hover:bg-gray-800"
//                 >
//                   Start Shopping
//                   <span className="ml-2">→</span>
//                 </Link>

//                 <p className="mt-5 text-xs text-gray-400">
//                   Explore the latest GenZVibe collection
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           /* ================= CART ================= */
//           <>
//             {/* HEADER */}
//             <div className="mb-8">
//               <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
//                     GenZVibe Shopping Bag
//                   </p>

//                   <h1 className="mt-2 text-4xl font-black tracking-[-0.04em] text-gray-900 sm:text-5xl">
//                     Your Cart
//                   </h1>

//                   <p className="mt-2 text-sm text-gray-500">
//                     {totalItems}{" "}
//                     {totalItems === 1 ? "item" : "items"} in your cart
//                   </p>
//                 </div>

//                 <Link
//                   to="/shop"
//                   className="text-sm font-bold text-gray-700 underline underline-offset-4 transition hover:text-purple-600"
//                 >
//                   ← Continue Shopping
//                 </Link>
//               </div>
//             </div>

//             {/* CART LAYOUT */}
//             <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

//               {/* CART ITEMS */}
//               <div className="space-y-4">
//                 {cartItems.map((item) => {
//                   const product = item.productId;

//                   return (
//                     <div
//                       key={product._id}
//                       className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-300 hover:shadow-md sm:p-5"
//                     >
//                       <div className="flex gap-4 sm:gap-6">

//                         {/* IMAGE */}
//                         <Link
//                           to={`/product/${product._id}`}
//                           className="h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-36 sm:w-28"
//                         >
//                           <img
//                             src={product.imageUrl}
//                             alt={product.name}
//                             className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                           />
//                         </Link>

//                         {/* DETAILS */}
//                         <div className="flex min-w-0 flex-1 flex-col">
//                           <div className="flex items-start justify-between gap-3">

//                             <div className="min-w-0">
//                               <Link
//                                 to={`/product/${product._id}`}
//                                 className="line-clamp-2 text-base font-bold text-gray-900 transition hover:text-purple-600 sm:text-lg"
//                               >
//                                 {product.name}
//                               </Link>

//                               <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-400">
//                                 GenZVibe Collection
//                               </p>
//                             </div>

//                             {/* REMOVE */}
//                             <button
//                               onClick={() =>
//                                 handleRemove(product._id)
//                               }
//                               className="shrink-0 text-xs font-semibold text-gray-400 transition hover:text-red-500"
//                             >
//                               Remove
//                             </button>
//                           </div>

//                           {/* PRICE + QUANTITY */}
//                           <div className="mt-auto flex flex-col gap-4 pt-5 sm:flex-row sm:items-end sm:justify-between">

//                             {/* QUANTITY */}
//                             <div>
//                               <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
//                                 Quantity
//                               </p>

//                               <div className="flex h-10 w-fit items-center overflow-hidden rounded-lg border border-gray-200">

//                                 {/* MINUS */}
//                                 <button
//                                   onClick={() =>
//                                     handleUpdateQty(
//                                       item,
//                                       item.qty - 1
//                                     )
//                                   }
//                                   disabled={item.qty <= 1}
//                                   className="flex h-full w-10 items-center justify-center text-lg font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
//                                 >
//                                   −
//                                 </button>

//                                 <span className="flex h-full min-w-10 items-center justify-center border-x border-gray-200 text-sm font-bold text-gray-900">
//                                   {item.qty}
//                                 </span>

//                                 {/* PLUS */}
//                                 <button
//                                   onClick={() =>
//                                     handleUpdateQty(
//                                       item,
//                                       item.qty + 1
//                                     )
//                                   }
//                                   disabled={
//                                     item.qty >= product.stock
//                                   }
//                                   className="flex h-full w-10 items-center justify-center text-lg font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
//                                 >
//                                   +
//                                 </button>
//                               </div>

//                               {/* STOCK */}
//                               <p className="mt-2 text-[10px] text-gray-400">
//                                 {product.stock} available
//                               </p>
//                             </div>

//                             {/* PRICE */}
//                             <div className="text-left sm:text-right">
//                               <p className="text-xs text-gray-400">
//                                 ${Number(product.price).toFixed(2)} each
//                               </p>

//                               <p className="mt-1 text-xl font-black text-gray-900">
//                                 $
//                                 {(
//                                   Number(product.price) *
//                                   Number(item.qty)
//                                 ).toFixed(2)}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* SUMMARY */}
//               <div className="lg:sticky lg:top-6 lg:h-fit">
//                 <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

//                   <div className="flex items-center justify-between">
//                     <h2 className="text-lg font-black text-gray-900">
//                       Order Summary
//                     </h2>

//                     <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500">
//                       {totalItems} items
//                     </span>
//                   </div>

//                   {/* PRICE DETAILS */}
//                   <div className="mt-6 space-y-4 text-sm">

//                     <div className="flex justify-between text-gray-500">
//                       <span>Subtotal</span>

//                       <span className="font-semibold text-gray-900">
//                         ${totalPrice.toFixed(2)}
//                       </span>
//                     </div>

//                     <div className="flex justify-between text-gray-500">
//                       <span>Shipping</span>

//                       <span className="font-semibold text-emerald-600">
//                         FREE
//                       </span>
//                     </div>

//                     <div className="flex justify-between text-gray-500">
//                       <span>Taxes</span>

//                       <span className="text-gray-400">
//                         Calculated at checkout
//                       </span>
//                     </div>
//                   </div>

//                   <div className="my-6 h-px bg-gray-200" />

//                   {/* TOTAL */}
//                   <div className="flex items-end justify-between">
//                     <div>
//                       <p className="text-xs font-medium text-gray-400">
//                         Total
//                       </p>

//                       <p className="mt-1 text-3xl font-black tracking-tight text-gray-900">
//                         ${totalPrice.toFixed(2)}
//                       </p>
//                     </div>
//                   </div>

//                   {/* CHECKOUT */}
//                   <button
//                     onClick={() => navigate("/checkout")}
//                     className="mt-6 flex w-full items-center justify-center rounded-xl bg-black px-6 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-gray-800 active:scale-[0.99]"
//                   >
//                     Proceed to Checkout
//                     <span className="ml-2">→</span>
//                   </button>

//                   {/* CLEAR CART */}
//                   <button
//                     onClick={handleClearCart}
//                     className="mt-3 w-full text-xs font-semibold text-gray-400 transition hover:text-red-500"
//                   >
//                     Clear Cart
//                   </button>

//                   {/* TRUST INFO */}
//                   <div className="mt-5 space-y-3 border-t border-gray-100 pt-5">

//                     <div className="flex items-center gap-3">
//                       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm">
//                         <LockKeyhole className="h-4 w-4 text-gray-600" />
//                       </span>

//                       <div>
//                         <p className="text-xs font-bold text-gray-900">
//                           Secure Checkout
//                         </p>

//                         <p className="text-[11px] text-gray-400">
//                           Your payment is protected
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm">
//                         <Truck className="h-4 w-4 text-gray-600" />
//                       </span>

//                       <div>
//                         <p className="text-xs font-bold text-gray-900">
//                           Free Shipping
//                         </p>

//                         <p className="text-[11px] text-gray-400">
//                           On your GenZVibe order
//                         </p>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>

//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;




















import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/Authcontext";
import { LockKeyhole, Truck } from "lucide-react";

const Cart = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= GET CART =================
  const fetchCart = async () => {
    if (!user?.token) {
      setCartItems([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/cart", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch cart");
      }

      setCartItems(data.items || []);
    } catch (error) {
      console.error("Fetch Cart Error:", error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  // ================= REMOVE PRODUCT =================
  const handleRemove = async (productId) => {
    try {
      const res = await fetch(`/api/cart/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to remove product");
      }

      setCartItems(data.cart?.items || []);
    } catch (error) {
      console.error("Remove Cart Error:", error);
      alert(error.message);
    }
  };

  // ================= UPDATE QUANTITY =================
  const handleUpdateQty = async (item, qty) => {
    if (qty < 1) {
      return;
    }

    const productId = item.productId._id;

    try {
      const res = await fetch(`/api/cart/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          qty,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update quantity");
      }

      setCartItems(data.cart?.items || []);
    } catch (error) {
      console.error("Update Cart Error:", error);
      alert(error.message);
    }
  };

  // ================= CLEAR CART =================
  const handleClearCart = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to clear cart");
      }

      setCartItems(data.cart?.items || []);
    } catch (error) {
      console.error("Clear Cart Error:", error);
      alert(error.message);
    }
  };

  // ================= TOTAL PRICE =================
  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + Number(item.productId?.price || 0) * Number(item.qty || 0),
    0
  );

  // ================= TOTAL ITEMS =================
  const totalItems = cartItems.reduce(
    (acc, item) => acc + Number(item.qty || 0),
    0
  );

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          {/* HEADER SKELETON */}
          <div className="mb-8">
            <div className="h-3 w-40 animate-pulse rounded bg-[#e4dff5]" />

            <div className="mt-3 h-12 w-52 animate-pulse rounded-lg bg-[#e4dff5]" />

            <div className="mt-3 h-4 w-36 animate-pulse rounded bg-[#e4dff5]" />
          </div>

          {/* CART SKELETON */}
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

            {/* ITEMS */}
            <div className="space-y-4">

              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
                >
                  <div className="flex gap-4 sm:gap-6">

                    {/* IMAGE */}
                    <div className="h-28 w-24 shrink-0 animate-pulse rounded-xl bg-gray-200 sm:h-36 sm:w-28" />

                    {/* CONTENT */}
                    <div className="flex min-w-0 flex-1 flex-col">

                      <div className="flex items-start justify-between gap-3">
                        <div className="w-full">
                          <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />

                          <div className="mt-2 h-3 w-32 animate-pulse rounded bg-gray-200" />
                        </div>

                        <div className="h-3 w-14 animate-pulse rounded bg-gray-200" />
                      </div>

                      <div className="mt-auto flex flex-col gap-4 pt-5 sm:flex-row sm:items-end sm:justify-between">

                        {/* QUANTITY */}
                        <div>
                          <div className="mb-2 h-3 w-16 animate-pulse rounded bg-gray-200" />

                          <div className="h-10 w-28 animate-pulse rounded-lg bg-gray-200" />

                          <div className="mt-2 h-3 w-20 animate-pulse rounded bg-gray-200" />
                        </div>

                        {/* PRICE */}
                        <div className="space-y-2">
                          <div className="ml-auto h-3 w-20 animate-pulse rounded bg-gray-200" />

                          <div className="ml-auto h-7 w-24 animate-pulse rounded bg-gray-200" />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SUMMARY SKELETON */}
            <div className="lg:sticky lg:top-6 lg:h-fit">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                <div className="flex items-center justify-between">
                  <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />

                  <div className="h-6 w-16 animate-pulse rounded-full bg-gray-200" />
                </div>

                <div className="mt-6 space-y-5">

                  <div className="flex justify-between">
                    <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                    <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                  </div>

                  <div className="flex justify-between">
                    <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                    <div className="h-4 w-14 animate-pulse rounded bg-gray-200" />
                  </div>

                  <div className="flex justify-between">
                    <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                    <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
                  </div>

                </div>

                <div className="my-6 h-px bg-gray-200" />

                <div>
                  <div className="h-3 w-12 animate-pulse rounded bg-gray-200" />

                  <div className="mt-2 h-9 w-32 animate-pulse rounded bg-gray-200" />
                </div>

                <div className="mt-6 h-12 w-full animate-pulse rounded-xl bg-gray-200" />

                <div className="mt-3 h-4 w-20 animate-pulse rounded bg-gray-200 mx-auto" />

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f5] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {cartItems.length === 0 ? (
          /* ================= EMPTY CART ================= */
          <div className="flex min-h-[75vh] items-center justify-center">
            <div className="grid w-full max-w-5xl items-center gap-8 overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 md:grid-cols-2 md:p-10">

              {/* IMAGE */}
              <div className="w-full">
                <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                  <img
                    src="/images/empty-cart.png"
                    alt="Empty shopping cart"
                    className="block h-auto max-h-[420px] w-full object-contain"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="text-center md:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
                  Your shopping bag
                </p>

                <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-gray-900 sm:text-5xl">
                  Your cart is empty.
                </h1>

                <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
                  Looks like you haven't added anything yet.
                  Discover something that matches your vibe.
                </p>

                <Link
                  to="/shop"
                  className="mt-8 inline-flex items-center rounded-xl bg-black px-8 py-4 text-sm font-bold text-white transition hover:bg-gray-800"
                >
                  Start Shopping
                  <span className="ml-2">→</span>
                </Link>

                <p className="mt-5 text-xs text-gray-400">
                  Explore the latest GenZVibe collection
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* ================= CART ================= */
          <>
            {/* HEADER */}
            <div className="mb-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
                    GenZVibe Shopping Bag
                  </p>

                  <h1 className="mt-2 text-4xl font-black tracking-[-0.04em] text-gray-900 sm:text-5xl">
                    Your Cart
                  </h1>

                  <p className="mt-2 text-sm text-gray-500">
                    {totalItems}{" "}
                    {totalItems === 1 ? "item" : "items"} in your cart
                  </p>
                </div>

                <Link
                  to="/shop"
                  className="text-sm font-bold text-gray-700 underline underline-offset-4 transition hover:text-purple-600"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* CART LAYOUT */}
            <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

              {/* CART ITEMS */}
              <div className="space-y-4">
                {cartItems.map((item) => {
                  const product = item.productId;

                  return (
                    <div
                      key={product._id}
                      className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-300 hover:shadow-md sm:p-5"
                    >
                      <div className="flex gap-4 sm:gap-6">

                        {/* IMAGE */}
                        <Link
                          to={`/product/${product._id}`}
                          className="h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-36 sm:w-28"
                        >
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        </Link>

                        {/* DETAILS */}
                        <div className="flex min-w-0 flex-1 flex-col">
                          <div className="flex items-start justify-between gap-3">

                            <div className="min-w-0">
                              <Link
                                to={`/product/${product._id}`}
                                className="line-clamp-2 text-base font-bold text-gray-900 transition hover:text-purple-600 sm:text-lg"
                              >
                                {product.name}
                              </Link>

                              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-400">
                                GenZVibe Collection
                              </p>
                            </div>

                            {/* REMOVE */}
                            <button
                              onClick={() =>
                                handleRemove(product._id)
                              }
                              className="shrink-0 text-xs font-semibold text-gray-400 transition hover:text-red-500"
                            >
                              Remove
                            </button>
                          </div>

                          {/* PRICE + QUANTITY */}
                          <div className="mt-auto flex flex-col gap-4 pt-5 sm:flex-row sm:items-end sm:justify-between">

                            {/* QUANTITY */}
                            <div>
                              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                                Quantity
                              </p>

                              <div className="flex h-10 w-fit items-center overflow-hidden rounded-lg border border-gray-200">

                                {/* MINUS */}
                                <button
                                  onClick={() =>
                                    handleUpdateQty(
                                      item,
                                      item.qty - 1
                                    )
                                  }
                                  disabled={item.qty <= 1}
                                  className="flex h-full w-10 items-center justify-center text-lg font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                  −
                                </button>

                                <span className="flex h-full min-w-10 items-center justify-center border-x border-gray-200 text-sm font-bold text-gray-900">
                                  {item.qty}
                                </span>

                                {/* PLUS */}
                                <button
                                  onClick={() =>
                                    handleUpdateQty(
                                      item,
                                      item.qty + 1
                                    )
                                  }
                                  disabled={
                                    item.qty >= product.stock
                                  }
                                  className="flex h-full w-10 items-center justify-center text-lg font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                  +
                                </button>
                              </div>

                              {/* STOCK */}
                              <p className="mt-2 text-[10px] text-gray-400">
                                {product.stock} available
                              </p>
                            </div>

                            {/* PRICE */}
                            <div className="text-left sm:text-right">
                              <p className="text-xs text-gray-400">
                                ₹{Number(product.price).toFixed(2)} each
                              </p>

                              <p className="mt-1 text-xl font-black text-gray-900">
                                ₹
                                {(
                                  Number(product.price) *
                                  Number(item.qty)
                                ).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* SUMMARY */}
              <div className="lg:sticky lg:top-6 lg:h-fit">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-black text-gray-900">
                      Order Summary
                    </h2>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500">
                      {totalItems} items
                    </span>
                  </div>

                  {/* PRICE DETAILS */}
                  <div className="mt-6 space-y-4 text-sm">

                    <div className="flex justify-between text-gray-500">
                      <span>Subtotal</span>

                      <span className="font-semibold text-gray-900">
                        ₹{totalPrice.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between text-gray-500">
                      <span>Shipping</span>

                      <span className="font-semibold text-emerald-600">
                        FREE
                      </span>
                    </div>

                    <div className="flex justify-between text-gray-500">
                      <span>Taxes</span>

                      <span className="text-gray-400">
                        Calculated at checkout
                      </span>
                    </div>
                  </div>

                  <div className="my-6 h-px bg-gray-200" />

                  {/* TOTAL */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs font-medium text-gray-400">
                        Total
                      </p>

                      <p className="mt-1 text-3xl font-black tracking-tight text-gray-900">
                        ₹{totalPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* CHECKOUT */}
                  <button
                    onClick={() => navigate("/checkout")}
                    className="mt-6 flex w-full items-center justify-center rounded-xl bg-black px-6 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-gray-800 active:scale-[0.99]"
                  >
                    Proceed to Checkout
                    <span className="ml-2">→</span>
                  </button>

                  {/* CLEAR CART */}
                  <button
                    onClick={handleClearCart}
                    className="mt-3 w-full text-xs font-semibold text-gray-400 transition hover:text-red-500"
                  >
                    Clear Cart
                  </button>

                  {/* TRUST INFO */}
                  <div className="mt-5 space-y-3 border-t border-gray-100 pt-5">

                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm">
                        <LockKeyhole className="h-4 w-4 text-gray-600" />
                      </span>

                      <div>
                        <p className="text-xs font-bold text-gray-900">
                          Secure Checkout
                        </p>

                        <p className="text-[11px] text-gray-400">
                          Your payment is protected
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm">
                        <Truck className="h-4 w-4 text-gray-600" />
                      </span>

                      <div>
                        <p className="text-xs font-bold text-gray-900">
                          Free Shipping
                        </p>

                        <p className="text-[11px] text-gray-400">
                          On your GenZVibe order
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
