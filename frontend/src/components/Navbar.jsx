// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/Authcontext";
// import { useSelector } from "react-redux";
// import Register from "../pages/Register";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const { user, logout } = useContext(AuthContext);

//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const navigate = useNavigate();

//   const handlerLogout = () => {
//     logout();
//     navigate("/login");
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="bg-white border-b border-gray-200 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Main Navbar */}
//         <div className="flex items-center justify-between h-16">

//           {/* Logo */}
//           <div>
//             <Link
//               to="/"
//               className="text-2xl font-bold text-gray-900"
//             >
//               Shivam
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-7">

//             <Link
//               to="/"
//               className="text-gray-700 hover:text-black transition"
//             >
//               Home
//             </Link>

//             <Link
//               to="/shop"
//               className="text-gray-700 hover:text-black transition"
//             >
//               Shop
//             </Link>

//              <Link
//               to="/profile"
//               className="text-gray-700 hover:text-black transition"
//             >
//               {/* Cart ({cartItems.length}) */} profile
//             </Link>

//             {user ? (
//               <>
//                 <Link
//                   to="/profile"
//                   className="text-gray-700 hover:text-black transition"
//                 >
//                   Hi, {user.name}
//                 </Link>

//                 {user.role === "admin" && (
//                   <Link
//                     to="/Admin"
//                     className="text-gray-700 hover:text-black transition"
//                   >
//                     Admin
//                   </Link>
//                 )}

//                 <button
//                   onClick={handlerLogout}
//                   className="text-gray-700 hover:text-black transition"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="text-gray-700 hover:text-black transition"
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   to="/register"
//                   className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
//                 >
//                   Signup
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Right Side */}
//           <div className="flex items-center gap-3">

//             {/* Search */}
//             <button
//               className="p-2 rounded-full hover:bg-gray-100 transition"
//               aria-label="Search"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="w-5 h-5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.04 6.04a7.5 7.5 0 0 0 10.61 10.61Z"
//                 />
//               </svg>
//             </button>

//             {/* Cart */}
//             <Link
//               to="/cart"
//               className="p-2 rounded-full hover:bg-gray-100 transition"
//               aria-label="Cart"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="w-5 h-5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.5 6.75m0 0h14.386c.66 0 1.14.62.976 1.26l-1.5 6A1.5 1.5 0 0 1 17.905 15H8.095a1.5 1.5 0 0 1-1.457-1.14L5.5 6.75Zm0 0L4.5 3.75m4.5 15a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm9 0a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1-2.25 0Z"
//                 />
//               </svg>
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
//               aria-label="Menu"
//             >
//               {isMenuOpen ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18 18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-gray-200 py-4">
//             <div className="flex flex-col gap-2">

//               <Link
//                 to="/shop"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
//               >
//                 Home
//               </Link>

//               <Link
//                 to="/shop"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
//               >
//                 Shop
//               </Link>

//               <Link
//                 to="/cart"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
//               >
//                 Cart ({cartItems.length})
//               </Link>

//               {user ? (
//                 <>
//                   <Link
//                     to="/profile"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
//                   >
//                     Hi, {user.name}
//                   </Link>

//                   {user.role === "admin" && (
//                     <Link
//                       to="/Admin"
//                       onClick={() => setIsMenuOpen(false)}
//                       className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
//                     >
//                       Admin
//                     </Link>
//                   )}

//                   <button
//                     onClick={handlerLogout}
//                     className="text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     to="/login"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
//                   >
//                     Login
//                   </Link>

//                   <Link
//                     to="/register"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
//                   >
//                     Signup
//                   </Link>
//                 </>
//               )}

//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useContext, useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { Menu, X, Search, ShoppingBag, User, Package, LogOut, ShieldCheck } from "lucide-react";

// import { AuthContext } from "../context/Authcontext";
// import { useSelector } from "react-redux";

// /* Palette (same as the rest of the site): night #0F0B24, coral #FF5C39, violet #6C47FF, lilac #CDB9FF, mist #F5F2FF
//    Tailwind classes only. No <style>, no inline styles. */

// const gradientBtn =
//   "bg-gradient-to-r from-[#FF4D2E] via-[#E0307A] to-[#6C47FF] bg-[length:200%_100%] font-bold text-white shadow-[0_8px_22px_-8px_rgba(224,48,122,0.7)] transition-all duration-500 hover:bg-[position:100%_0] hover:-translate-y-0.5 active:scale-[0.97]";

// const iconBtn =
//   "relative flex h-11 w-11 items-center justify-center rounded-full text-[#0F0B24] transition hover:bg-[#F5F2FF] hover:text-[#6C47FF]";

// /* Desktop link with a coral underline bar on the active page */
// const desktopLink = ({ isActive }) =>
//   `relative flex h-16 items-center text-[15px] font-semibold transition after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:rounded-t-full after:transition ${
//     isActive
//       ? "text-[#0F0B24] after:bg-[#FF5C39]"
//       : "text-[#0F0B24]/60 after:bg-transparent hover:text-[#0F0B24] hover:after:bg-[#CDB9FF]"
//   }`;

// const mobileLink = ({ isActive }) =>
//   `flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-semibold transition ${
//     isActive ? "bg-[#0F0B24] text-white" : "text-[#0F0B24]/80 hover:bg-[#F5F2FF]"
//   }`;

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const { user, logout } = useContext(AuthContext);
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const navigate = useNavigate();

//   const handlerLogout = () => {
//     logout();
//     navigate("/login");
//     setIsMenuOpen(false);
//   };

//   const closeMenu = () => setIsMenuOpen(false);
//   const firstLetter = user?.name ? user.name.charAt(0).toUpperCase() : null;
//   const count = cartItems.length;

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const q = query.trim();
//     navigate(q ? `/shop?q=${encodeURIComponent(q)}` : "/shop");
//     setQuery("");
//     closeMenu();
//   };

//   const searchBox = (extra = "") => (
//     <form onSubmit={handleSearch} role="search" className={`relative ${extra}`}>
//       <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F0B24]/40" strokeWidth={2} />
//       <input
//         type="search"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search products"
//         aria-label="Search products"
//         className="h-11 w-full rounded-full border border-transparent bg-[#F5F2FF] pl-10 pr-4 text-base outline-none transition placeholder:text-[#0F0B24]/40 hover:border-[#0F0B24]/15 focus:border-[#6C47FF] focus:bg-white focus:ring-4 focus:ring-[#6C47FF]/15"
//       />
//     </form>
//   );

//   return (
//     <>
//       {/* ================= ANNOUNCEMENT STRIP ================= */}
//       <div className="hidden bg-[#0F0B24] px-4 py-2.5 text-center text-sm font-semibold text-white sm:block">
//         Free shipping on every order
//         <span className="mx-2 text-[#CDB9FF]">|</span>
//         <Link to="/shop" className="text-[#FF5C39] underline underline-offset-4 hover:text-white">
//           Shop new arrivals
//         </Link>
//       </div>

//       {/* ================= MAIN BAR ================= */}
//       <header className="sticky top-0 z-50 border-b border-[#0F0B24]/10 bg-white/95 backdrop-blur-md">
//         <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
//           {/* LOGO */}
//           <Link to="/" onClick={closeMenu} className="shrink-0 text-[26px] font-extrabold tracking-[-0.05em] text-[#0F0B24]">
//             GenZ<span className="text-[#6C47FF]">Vibe</span>
//             <span className="text-[#FF5C39]">.</span>
//           </Link>

//           {/* DESKTOP LINKS */}
//           <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
//             <NavLink to="/" end className={desktopLink}>Home</NavLink>
//             <NavLink to="/shop" className={desktopLink}>Shop</NavLink>
//             {user && <NavLink to="/my-orders" className={desktopLink}>My Orders</NavLink>}
//             {user?.role === "admin" && (
//               <NavLink to="/Admin" className={desktopLink}>
//                 <span className="flex items-center gap-1.5">
//                   <ShieldCheck className="h-4 w-4" /> Admin
//                 </span>
//               </NavLink>
//             )}
//           </nav>

//           {/* DESKTOP SEARCH */}
//           {searchBox("ml-auto hidden w-full max-w-xs md:block lg:max-w-sm")}

//           {/* RIGHT ACTIONS */}
//           <div className="ml-auto flex items-center gap-1 md:ml-0">
//             <Link to="/cart" aria-label={`Cart, ${count} items`} onClick={closeMenu} className={iconBtn}>
//               <ShoppingBag className="h-6 w-6" strokeWidth={1.8} />
//               {count > 0 && (
//                 <span className="absolute right-0 top-0 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#FF5C39] px-1 text-[10px] font-extrabold text-[#0F0B24]">
//                   {count > 99 ? "99+" : count}
//                 </span>
//               )}
//             </Link>

//             {user ? (
//               <div className="hidden items-center gap-1 sm:flex">
//                 <Link to="/profile" aria-label="Profile" className="flex h-10 items-center gap-2 rounded-full pl-1 pr-3 transition hover:bg-[#F5F2FF]">
//                   <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F0B24] text-xs font-extrabold text-white">
//                     {firstLetter}
//                   </span>
//                   <span className="hidden max-w-[90px] truncate text-sm font-semibold lg:block">{user.name}</span>
//                 </Link>
//                 <button type="button" aria-label="Logout" onClick={handlerLogout} className={`${iconBtn} hover:!bg-[#FF5C39]/10 hover:!text-[#FF5C39]`}>
//                   <LogOut className="h-[19px] w-[19px]" strokeWidth={1.8} />
//                 </button>
//               </div>
//             ) : (
//               <div className="hidden items-center gap-1 sm:flex">
//                 <Link to="/login" className="rounded-full px-4 py-2 text-sm font-semibold text-[#0F0B24]/80 transition hover:bg-[#F5F2FF] hover:text-[#0F0B24]">
//                   Login
//                 </Link>
//                 <Link to="/register" className={`rounded-full px-5 py-2.5 text-sm ${gradientBtn}`}>
//                   Sign up
//                 </Link>
//               </div>
//             )}

//             <button
//               type="button"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle menu"
//               aria-expanded={isMenuOpen}
//               className={`${iconBtn} md:hidden`}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* ================= MOBILE MENU (full width, attached to the bar) ================= */}
//         {isMenuOpen && (
//           <div className="border-t border-[#0F0B24]/10 bg-white px-4 pb-4 pt-3 md:hidden">
//             {searchBox("mb-3")}

//             {user && (
//               <Link to="/profile" onClick={closeMenu} className="mb-2 flex items-center gap-3 rounded-xl bg-[#F5F2FF] p-3">
//                 <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F0B24] text-sm font-extrabold text-white">
//                   {firstLetter}
//                 </span>
//                 <span className="min-w-0">
//                   <span className="block truncate text-base font-bold">{user.name}</span>
//                   <span className="block truncate text-xs text-[#0F0B24]/55">{user.email}</span>
//                 </span>
//               </Link>
//             )}

//             <div className="space-y-1">
//               <NavLink to="/" end onClick={closeMenu} className={mobileLink}>Home</NavLink>
//               <NavLink to="/shop" onClick={closeMenu} className={mobileLink}>Shop</NavLink>
//               {user && (
//                 <>
//                   <NavLink to="/my-orders" onClick={closeMenu} className={mobileLink}>
//                     <Package className="h-4 w-4" /> My Orders
//                   </NavLink>
//                   <NavLink to="/profile" onClick={closeMenu} className={mobileLink}>
//                     <User className="h-4 w-4" /> Profile
//                   </NavLink>
//                 </>
//               )}
//               <NavLink to="/cart" onClick={closeMenu} className={mobileLink}>
//                 <ShoppingBag className="h-4 w-4" /> Cart
//                 {count > 0 && (
//                   <span className="ml-auto rounded-full bg-[#FF5C39] px-2.5 py-0.5 text-[11px] font-extrabold text-[#0F0B24]">
//                     {count} {count === 1 ? "item" : "items"}
//                   </span>
//                 )}
//               </NavLink>
//               {user?.role === "admin" && (
//                 <NavLink to="/Admin" onClick={closeMenu} className={mobileLink}>
//                   <ShieldCheck className="h-4 w-4" /> Admin
//                 </NavLink>
//               )}
//             </div>

//             <div className="mt-3 border-t border-[#0F0B24]/10 pt-3">
//               {user ? (
//                 <button
//                   type="button"
//                   onClick={handlerLogout}
//                   className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF5C39]/10 px-4 py-3 text-sm font-bold text-[#FF5C39] transition hover:bg-[#FF5C39]/20"
//                 >
//                   <LogOut className="h-4 w-4" /> Logout
//                 </button>
//               ) : (
//                 <div className="grid grid-cols-2 gap-2">
//                   <Link to="/login" onClick={closeMenu} className="flex items-center justify-center rounded-full border border-[#0F0B24]/20 px-4 py-3 text-sm font-bold transition hover:bg-[#F5F2FF]">
//                     Login
//                   </Link>
//                   <Link to="/register" onClick={closeMenu} className={`flex items-center justify-center rounded-full px-4 py-3 text-sm ${gradientBtn}`}>
//                     Sign up
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// };

// export default Navbar;

import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  User,
  Package,
  LogOut,
  ShieldCheck,
} from "lucide-react";

import { AuthContext } from "../context/Authcontext";

/* Palette:
   night #0F0B24
   coral #FF5C39
   violet #6C47FF
   lilac #CDB9FF
   mist #F5F2FF
*/

const gradientBtn =
  "bg-gradient-to-r from-[#FF4D2E] via-[#E0307A] to-[#6C47FF] bg-[length:200%_100%] font-bold text-white shadow-[0_8px_22px_-8px_rgba(224,48,122,0.7)] transition-all duration-500 hover:bg-[position:100%_0] hover:-translate-y-0.5 active:scale-[0.97]";

const iconBtn =
  "relative flex h-11 w-11 items-center justify-center rounded-full text-[#0F0B24] transition hover:bg-[#F5F2FF] hover:text-[#6C47FF]";

/* Desktop link with a coral underline bar on the active page */
const desktopLink = ({ isActive }) =>
  `relative flex h-16 items-center text-[15px] font-semibold transition after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:rounded-t-full after:transition ${
    isActive
      ? "text-[#0F0B24] after:bg-[#FF5C39]"
      : "text-[#0F0B24]/60 after:bg-transparent hover:text-[#0F0B24] hover:after:bg-[#CDB9FF]"
  }`;

const mobileLink = ({ isActive }) =>
  `flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-semibold transition ${
    isActive
      ? "bg-[#0F0B24] text-white"
      : "text-[#0F0B24]/80 hover:bg-[#F5F2FF]"
  }`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Backend cart count
  const [cartCount, setCartCount] = useState(0);

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  /* ================= GET CART COUNT FROM BACKEND ================= */

  useEffect(() => {
    const fetchCartCount = async () => {
      if (!user?.token) {
        setCartCount(0);
        return;
      }

      try {
        const res = await fetch("/api/cart", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          setCartCount(0);
          return;
        }

        const totalQty = (data.items || []).reduce(
          (sum, item) => sum + Number(item.qty || 0),
          0,
        );

        setCartCount(totalQty);
      } catch (error) {
        console.error("Navbar Cart Count Error:", error);
        setCartCount(0);
      }
    };

    fetchCartCount();
  }, [user]);

  /* ================= LOGOUT ================= */

  const handlerLogout = () => {
    logout();
    navigate("/login");
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const firstLetter = user?.name ? user.name.charAt(0).toUpperCase() : null;

  /* ================= SEARCH ================= */

  const handleSearch = (e) => {
    e.preventDefault();

    const q = query.trim();

    navigate(q ? `/shop?q=${encodeURIComponent(q)}` : "/shop");

    setQuery("");
    closeMenu();
  };

  const searchBox = (extra = "") => (
    <form onSubmit={handleSearch} role="search" className={`relative ${extra}`}>
      {" "}
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F0B24]/40"
        strokeWidth={2}
      />{" "}
      <input
        type="search"
        value={query}
        onChange={(e) => {
          const value = e.target.value;
          setQuery(value);
          const trimmedValue = value.trim();
          if (trimmedValue) {
            navigate(`/shop?q=${encodeURIComponent(trimmedValue)}`);
          } else {
            navigate("/shop");
          }
        }}
        placeholder="Search products"
        aria-label="Search products"
        className="h-11 w-full rounded-full border border-transparent bg-[#F5F2FF] pl-10 pr-4 text-base outline-none transition placeholder:text-[#0F0B24]/40 hover:border-[#0F0B24]/15 focus:border-[#6C47FF] focus:bg-white focus:ring-4 focus:ring-[#6C47FF]/15"
      />{" "}
    </form>
  );
  return (
    <>
      {/* ================= ANNOUNCEMENT STRIP ================= */}

      <div className="hidden bg-[#0F0B24] px-4 py-2.5 text-center text-sm font-semibold text-white sm:block">
        Free shipping on every order
        <span className="mx-2 text-[#CDB9FF]">|</span>
        <Link
          to="/shop"
          className="text-[#FF5C39] underline underline-offset-4 hover:text-white"
        >
          Shop new arrivals
        </Link>
      </div>

      {/* ================= MAIN BAR ================= */}

      <header className="sticky top-0 z-50 border-b border-[#0F0B24]/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 items-center gap-6 px-4 pt-1 sm:px-6 sm:pt-0 lg:px-8">
          {/* ================= LOGO ================= */}

          <Link
            to="/"
            onClick={closeMenu}
            className="shrink-0 text-[26px] font-extrabold tracking-[-0.05em] text-[#0F0B24]"
          >
            GenZ
            <span className="text-[#6C47FF]">Vibe</span>
            <span className="text-[#FF5C39]">.</span>
          </Link>

          {/* ================= DESKTOP LINKS ================= */}

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            <NavLink to="/" end className={desktopLink}>
              Home
            </NavLink>

            <NavLink to="/shop" className={desktopLink}>
              Shop
            </NavLink>

            {user && (
              <NavLink to="/my-orders" className={desktopLink}>
                My Orders
              </NavLink>
            )}

            {user?.role === "admin" && (
              <NavLink to="/Admin" className={desktopLink}>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" />
                  Admin
                </span>
              </NavLink>
            )}
          </nav>

          {/* ================= DESKTOP SEARCH ================= */}

          {searchBox("ml-auto hidden w-full max-w-xs md:block lg:max-w-sm")}

          {/* ================= RIGHT ACTIONS ================= */}

          <div className="ml-auto flex items-center gap-1 md:ml-0">
            {/* ================= CART ================= */}

            <Link
              to="/cart"
              aria-label={`Cart, ${cartCount} items`}
              onClick={closeMenu}
              className={iconBtn}
            >
              <ShoppingBag className="h-6 w-6" strokeWidth={1.8} />

              {cartCount > 0 && (
                <span className="absolute right-0 top-0 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#FF5C39] px-1 text-[10px] font-extrabold text-[#0F0B24]">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* ================= USER ================= */}

            {user ? (
              <div className="hidden items-center gap-1 sm:flex">
                <Link
                  to="/profile"
                  aria-label="Profile"
                  className="flex h-10 items-center gap-2 rounded-full pl-1 pr-3 transition hover:bg-[#F5F2FF]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F0B24] text-xs font-extrabold text-white">
                    {firstLetter}
                  </span>

                  <span className="hidden max-w-[90px] truncate text-sm font-semibold lg:block">
                    {user.name}
                  </span>
                </Link>

                <button
                  type="button"
                  aria-label="Logout"
                  onClick={handlerLogout}
                  className={`${iconBtn} hover:!bg-[#FF5C39]/10 hover:!text-[#FF5C39]`}
                >
                  <LogOut className="h-[19px] w-[19px]" strokeWidth={1.8} />
                </button>
              </div>
            ) : (
              <div className="hidden items-center gap-1 sm:flex">
                <Link
                  to="/login"
                  className="rounded-full px-4 py-2 text-sm font-semibold text-[#0F0B24]/80 transition hover:bg-[#F5F2FF] hover:text-[#0F0B24]"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className={`rounded-full px-5 py-2.5 text-sm ${gradientBtn}`}
                >
                  Sign up
                </Link>
              </div>
            )}

            {/* ================= MOBILE MENU BUTTON ================= */}

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className={`${iconBtn} md:hidden`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}

        {isMenuOpen && (
          <div className="border-t border-[#0F0B24]/10 bg-white px-4 pb-4 pt-3 md:hidden">
            {searchBox("mb-3")}

            {/* Mobile User */}

            {user && (
              <Link
                to="/profile"
                onClick={closeMenu}
                className="mb-2 flex items-center gap-3 rounded-xl bg-[#F5F2FF] p-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F0B24] text-sm font-extrabold text-white">
                  {firstLetter}
                </span>

                <span className="min-w-0">
                  <span className="block truncate text-base font-bold">
                    {user.name}
                  </span>

                  <span className="block truncate text-xs text-[#0F0B24]/55">
                    {user.email}
                  </span>
                </span>
              </Link>
            )}

            {/* Mobile Links */}

            <div className="space-y-1">
              <NavLink to="/" end onClick={closeMenu} className={mobileLink}>
                Home
              </NavLink>

              <NavLink to="/shop" onClick={closeMenu} className={mobileLink}>
                Shop
              </NavLink>

              {user && (
                <>
                  <NavLink
                    to="/my-orders"
                    onClick={closeMenu}
                    className={mobileLink}
                  >
                    <Package className="h-4 w-4" />
                    My Orders
                  </NavLink>

                  <NavLink
                    to="/profile"
                    onClick={closeMenu}
                    className={mobileLink}
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </NavLink>
                </>
              )}

              {/* Mobile Cart */}

              <NavLink to="/cart" onClick={closeMenu} className={mobileLink}>
                <ShoppingBag className="h-4 w-4" />
                Cart
                {cartCount > 0 && (
                  <span className="ml-auto rounded-full bg-[#FF5C39] px-2.5 py-0.5 text-[11px] font-extrabold text-[#0F0B24]">
                    {cartCount} {cartCount === 1 ? "item" : "items"}
                  </span>
                )}
              </NavLink>

              {/* Admin */}

              {user?.role === "admin" && (
                <NavLink to="/Admin" onClick={closeMenu} className={mobileLink}>
                  <ShieldCheck className="h-4 w-4" />
                  Admin
                </NavLink>
              )}
            </div>

            {/* ================= MOBILE BOTTOM ACTION ================= */}

            <div className="mt-3 border-t border-[#0F0B24]/10 pt-3">
              {user ? (
                <button
                  type="button"
                  onClick={handlerLogout}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF5C39]/10 px-4 py-3 text-sm font-bold text-[#FF5C39] transition hover:bg-[#FF5C39]/20"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="flex items-center justify-center rounded-full border border-[#0F0B24]/20 px-4 py-3 text-sm font-bold transition hover:bg-[#F5F2FF]"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className={`flex items-center justify-center rounded-full px-4 py-3 text-sm ${gradientBtn}`}
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
