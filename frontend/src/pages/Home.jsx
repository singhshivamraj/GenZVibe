// import React, { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";

// const Home = () => {
//   const [product, setProduct] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();

//         setProduct(data.slice(0, 4)); // Featured products
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">

//       {/* Hero Section */}
//       <div className="mx-auto mb-12 max-w-7xl rounded-3xl bg-black px-6 py-16 text-center text-white shadow-lg sm:px-10 lg:py-20">
//         <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
//           Welcome to ShopNest
//         </h1>

//         <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300 sm:text-base lg:text-lg">
//           Discover the best products at unbeatable prices.
//         </p>
//       </div>

//       {/* Featured Products */}
//       <div className="mx-auto max-w-7xl">

//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
//             Featured Products
//           </h2>

//           <p className="mt-2 text-gray-500">
//             Explore our latest and most popular products.
//           </p>
//         </div>

//         {loading ? (
//           <div className="flex min-h-40 items-center justify-center">
//             <p className="text-gray-500">Loading products...</p>
//           </div>
//         ) : product.length === 0 ? (
//           <div className="rounded-xl bg-white p-10 text-center shadow-sm">
//             <p className="text-gray-500">No products available.</p>
//           </div>
//         ) : (
//          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {product.map((product) => (
//               <ProductCard
//                 key={product._id}
//                 product={product}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;















// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import ProductCard from "../components/ProductCard";

// const Home = () => {
//   const [product, setProduct] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const cameraProduct = product.find((item) =>
//     item.name?.toLowerCase().includes("camera"),
//   );

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();

//        setProduct(data.slice(0, 8));
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, []);

//   return (
//     <div className="min-h-screen overflow-hidden bg-[#f7f7f5] text-[#171717]">
//       {/* =====================================================
//           HERO SECTION
//       ====================================================== */}
//       <section className="px-4 pt-5 sm:px-6 lg:px-8">
//         <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#dfe8ff]">
//           {/* Background decoration */}
//           <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ffcfdf] blur-2xl" />

//           <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[#c9d8ff] blur-3xl" />

//           <div className="relative grid min-h-[620px] grid-cols-1 lg:grid-cols-2">
//             {/* Hero Content */}
//             <div className="flex flex-col justify-center px-7 py-16 sm:px-12 lg:px-16 lg:py-20">
//               <div className="mb-7 flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-[#171717]" />

//                 <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#555]">
//                   The new ShopNest
//                 </p>
//               </div>

//               <h1 className="max-w-xl text-5xl font-black leading-[0.92] tracking-[-0.055em] text-[#111] sm:text-6xl lg:text-7xl">
//                 FIND
//                 <span className="block text-[#5664d8]">SOMETHING</span>
//                 WORTH KEEPING.
//               </h1>

//               <p className="mt-7 max-w-md text-base leading-7 text-[#555] sm:text-lg">
//                 Thoughtfully selected products for everyday life, work, weekends
//                 and everything in between.
//               </p>

//               <div className="mt-9 flex flex-wrap items-center gap-4">
//                 <Link
//                   to="/shop"
//                   className="group inline-flex items-center gap-3 rounded-full bg-[#111] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#292929]"
//                 >
//                   Explore Shop
//                   <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-1">
//                     →
//                   </span>
//                 </Link>

//                 <Link
//                   to="/about"
//                   className="rounded-full border border-[#b8bfd4] bg-white/60 px-7 py-4 text-sm font-semibold text-[#333] backdrop-blur transition hover:bg-white"
//                 >
//                   Our Story
//                 </Link>
//               </div>

//               {/* Small stats */}
//               <div className="mt-12 flex items-center gap-5 text-sm text-[#666] sm:gap-7">
//                 <div>
//                   <p className="font-bold text-[#171717]">Curated</p>
//                   <p>Products</p>
//                 </div>

//                 <div className="h-8 w-px bg-[#b8bfd4]" />

//                 <div>
//                   <p className="font-bold text-[#171717]">Simple</p>
//                   <p>Shopping</p>
//                 </div>

//                 <div className="h-8 w-px bg-[#b8bfd4]" />

//                 <div>
//                   <p className="font-bold text-[#171717]">Easy</p>
//                   <p>Returns</p>
//                 </div>
//               </div>
//             </div>

//             {/* Hero Product Visual */}
//             <div className="relative flex min-h-[420px] items-center justify-center px-8 pb-12 lg:min-h-0 lg:px-10 lg:pb-0">
//               {/* Main product image */}
//               <div className="relative h-[340px] w-[280px] rotate-[-5deg] rounded-[2rem] bg-white p-3 shadow-2xl shadow-indigo-900/10 transition duration-500 hover:rotate-0 sm:h-[410px] sm:w-[340px]">
//                 <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#ececec] to-[#d7d7d7]">
//                 {product[0] ? ( <img src={product[0].imageUrl || product[0].image} alt={product[0].name} className="h-full w-full object-cover" />
//                   ) : (
//                     <div className="flex h-full items-center justify-center text-7xl">
//                       ✦
//                     </div>
//                   )}

//                   {/* Product overlay */}
//                   <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
//                     <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
//                       Featured
//                     </p>

//                     <p className="mt-1 truncate font-semibold text-gray-900"> {product[0]?.name || "Your next favorite"} </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating discovery card */}
//               <div className="absolute bottom-14 left-4 w-48 rotate-[6deg] rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur transition duration-300 hover:rotate-0 sm:left-10 lg:left-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
//                     Discover
//                   </span>

//                   <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111] text-xs text-white">
//                     ↗
//                   </span>
//                 </div>

//                 <p className="mt-4 text-sm font-semibold">
//                   Products you'll actually want.
//                 </p>
//               </div>

//               {/* New badge */}
//               <div className="absolute right-3 top-12 flex h-24 w-24 rotate-[8deg] items-center justify-center rounded-full bg-[#ffcadb] text-center text-xs font-bold uppercase leading-4 tracking-wider text-[#6e2742] shadow-lg sm:right-10 lg:right-2">
//                 New
//                 <br />
//                 season
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           BRAND MARQUEE
//       ====================================================== */}
//       <section className="mt-5 border-b border-t border-gray-200 bg-[#171717] py-5">
//         <div className="overflow-hidden whitespace-nowrap">
//           <div className="flex min-w-max items-center justify-center gap-8 px-4 text-sm font-medium text-white">
//             <span>SHOP BETTER</span>
//             <span className="text-[#8f9cff]">✦</span>

//             <span>DISCOVER MORE</span>
//             <span className="text-[#ff9fc1]">✦</span>

//             <span>KEEP WHAT MATTERS</span>
//             <span className="text-[#8f9cff]">✦</span>

//             <span>SHOP BETTER</span>
//             <span className="text-[#ff9fc1]">✦</span>

//             <span>DISCOVER MORE</span>
//             <span className="text-[#8f9cff]">✦</span>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FEATURED PRODUCTS
//       ====================================================== */}
//       <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
//         <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6671d8]">
//               Curated for you
//             </p>

//             <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#171717] sm:text-5xl">
//               Trending now.
//             </h2>

//             <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
//               A few things people are discovering right now.
//             </p>
//           </div>

//           <Link
//             to="/shop"
//             className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
//           >
//             View everything
//             <span className="transition-transform group-hover:translate-x-1">
//               →
//             </span>
//           </Link>
//         </div>

//         {loading ? (
//           <div className="mt-12 flex h-72 items-center justify-center rounded-3xl border border-gray-200 bg-white">
//             <div className="text-center">
//               <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-gray-900" />

//               <p className="mt-4 text-sm text-gray-500">
//                 Finding something good...
//               </p>
//             </div>
//           </div>
//         ) : product.length === 0 ? (
//           <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-12 text-center">
//             <p className="text-gray-500">No products available right now.</p>
//           </div>
//         ) : (
//           <div className="mt-10">
//             {/* Existing ProductCard component */}
//             <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
//               {product.map((product) => (
//                 <ProductCard key={product._id} product={product} />
//               ))}
//             </div>
//           </div>
//         )}
//       </section>

//       {/* =====================================================
//           SHOP BY MOOD
//       ====================================================== */}
//       <section className="border-y border-gray-200 bg-white">
//         <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
//           <div className="text-center">
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6671d8]">
//               Start somewhere
//             </p>

//             <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
//               Shop by mood.
//             </h2>

//             <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500">
//               Don't know exactly what you're looking for? Start with the kind of
//               day you're having.
//             </p>
//           </div>

//           <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
//             {[
//               {
//                 title: "Everyday",
//                 emoji: "☀️",
//                 bg: "bg-[#fff1d8]",
//               },
//               {
//                 title: "Work",
//                 emoji: "💻",
//                 bg: "bg-[#e4eaff]",
//               },
//               {
//                 title: "Weekend",
//                 emoji: "🌴",
//                 bg: "bg-[#dff5eb]",
//               },
//               {
//                 title: "Tech",
//                 emoji: "⚡",
//                 bg: "bg-[#eee4ff]",
//               },
//               {
//                 title: "Essentials",
//                 emoji: "✦",
//                 bg: "bg-[#ffe3eb]",
//               },
//             ].map((item) => (
//               <Link
//                 key={item.title}
//                 to="/shop"
//                 className={`group ${item.bg} relative flex min-h-40 flex-col justify-between overflow-hidden rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
//               >
//                 <span className="text-3xl transition-transform duration-300 group-hover:scale-125">
//                   {item.emoji}
//                 </span>

//                 <div>
//                   <h3 className="font-bold text-gray-900">{item.title}</h3>

//                   <span className="mt-1 inline-block text-xs font-medium text-gray-500">
//                     Explore →
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SHOPNEST EDIT
//       ====================================================== */}
//       <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
//         <div className="grid overflow-hidden rounded-[2rem] bg-[#202020] lg:grid-cols-2">
//           {/* Image */}
//           <div className="relative min-h-[400px] overflow-hidden bg-[#dedede]">
//             {product[1] ? (
//             <img src={product[1].imageUrl || product[1].image} alt={product[1].name} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
//             ) : (
//               <div className="flex h-full items-center justify-center text-8xl">
//                 ✦
//               </div>
//             )}

//             <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-900 backdrop-blur">
//               ShopNest Edit
//             </div>
//           </div>

//           {/* Content */}
//           <div className="flex flex-col justify-center px-7 py-14 text-white sm:px-12 lg:px-14">
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#aeb7ff]">
//               The edit
//             </p>

//             <h2 className="mt-4 max-w-md text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
//               Less scrolling.
//               <span className="block text-[#aeb7ff]">Better finding.</span>
//             </h2>

//             <p className="mt-6 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
//               We believe shopping should feel more like discovering something
//               you didn't know you needed — not searching through endless pages.
//             </p>

//             <Link
//               to="/shop"
//               className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-[#dfe4ff]"
//             >
//               Explore the edit
//               <span>→</span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           WHY SHOPNEST
//       ====================================================== */}
//       <section className="border-t border-gray-200 bg-white">
//         <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
//           <div className="text-center">
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6671d8]">
//               Why ShopNest
//             </p>

//             <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
//               Shopping without the noise.
//             </h2>
//           </div>

//           <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             <div className="rounded-3xl bg-[#fff5e6] p-7">
//               <div className="text-3xl">⚡</div>

//               <h3 className="mt-6 font-bold text-gray-900">Fast delivery</h3>

//               <p className="mt-2 text-sm leading-6 text-gray-500">
//                 Get your products delivered without unnecessary waiting.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-[#e9ecff] p-7">
//               <div className="text-3xl">🔒</div>

//               <h3 className="mt-6 font-bold text-gray-900">Secure checkout</h3>

//               <p className="mt-2 text-sm leading-6 text-gray-500">
//                 Your account and payment information stay protected.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-[#e5f7ee] p-7">
//               <div className="text-3xl">↩</div>

//               <h3 className="mt-6 font-bold text-gray-900">Easy returns</h3>

//               <p className="mt-2 text-sm leading-6 text-gray-500">
//                 Simple return experience when something isn't right.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-[#ffe8f0] p-7">
//               <div className="text-3xl">♡</div>

//               <h3 className="mt-6 font-bold text-gray-900">Curated for you</h3>

//               <p className="mt-2 text-sm leading-6 text-gray-500">
//                 Discover products selected with simplicity in mind.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CTA
//       ====================================================== */}
//       <section className="px-4 py-5 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#e9e4ff]">
//           <div className="px-6 py-16 text-center sm:px-10 sm:py-20">
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6860a9]">
//               Your next find is waiting
//             </p>

//             <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-black tracking-[-0.045em] text-[#171717] sm:text-5xl lg:text-6xl">
//               Go on.
//               <span className="block text-[#625bc4]">Take a look around.</span>
//             </h2>

//             <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-600">
//               Explore our collection and find something that fits your everyday.
//             </p>

//             <Link
//               to="/shop"
//               className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#171717] px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-black"
//             >
//               Start shopping
//               <span>→</span>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;










import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

/* Palette
   night  #0F0B24  deep violet-black (hero, dark sections)
   coral  #FF5C39  action colour (buttons, final CTA)
   lilac  #CDB9FF  soft secondary
   mist   #F5F2FF  light section background
*/

const img = (p) => p?.imageUrl || p?.image;
const fallbackTints = ["#2A2150", "#3B2D7A", "#4A2A5C", "#1E2A5E", "#5A2E4F", "#2B3F6B"];

/* Counts up once when scrolled into view */
const Counter = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t) => {
        const k = Math.min((t - start) / 1400, 1);
        setVal(Math.round(to * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
};

/* One vertical, endlessly moving column of products */
const Column = ({ items, reverse, className = "" }) => (
  <div className={`overflow-hidden ${className}`}>
    <div className={`col-track flex flex-col gap-4 ${reverse ? "col-reverse" : ""}`}>
      {[...items, ...items].map((it, i) => (
        <div key={i} className="aspect-[3/4] shrink-0 overflow-hidden rounded-2xl" style={{ background: it.tint }}>
          {it.src && <img src={it.src} alt={it.name || ""} loading="lazy" className="h-full w-full object-cover" />}
        </div>
      ))}
    </div>
  </div>
);

const steps = [
  { n: "1", t: "We test it first", d: "Nothing reaches the shop until someone on the team has actually used it.", bg: "#CDB9FF", fg: "#0F0B24" },
  { n: "2", t: "We keep only the best", d: "If a better one exists, the weaker product goes. That's why the range stays small.", bg: "#FF5C39", fg: "#0F0B24" },
  { n: "3", t: "We get it to you fast", d: "Packed quickly, tracked all the way, and easy to send back if it isn't right.", bg: "#FFFFFF", fg: "#0F0B24" },
];

const aisles = [
  { name: "Everyday", note: "Used daily", bg: "#FFD9C9" },
  { name: "Work", note: "Desk and focus", bg: "#CDB9FF" },
  { name: "Weekend", note: "No plan needed", bg: "#BDEBDD" },
  { name: "Tech", note: "Worth the space", bg: "#FFC2D4" },
  { name: "Essentials", note: "Basics done right", bg: "#FFE9A8" },
];

// Replace these with your real store numbers before launch.
const stats = [
  { to: 7, suffix: " days", label: "to return anything" },
  { to: 24, suffix: " hrs", label: "to dispatch an order" },
  { to: 100, suffix: "%", label: "secure checkout" },
];

const Home = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProduct(Array.isArray(data) ? data.slice(0, 8) : []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  // 6 tiles for the hero columns (real images first, tinted blocks as backup)
  const tiles = Array.from({ length: 6 }, (_, i) => {
    const p = product[i % Math.max(product.length, 1)];
    return { src: img(p), name: p?.name, tint: fallbackTints[i] };
  });

  const mask = "linear-gradient(transparent, #000 18%, #000 82%, transparent)";

  return (
    <div className="home min-h-screen overflow-x-hidden bg-[#0F0B24] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&display=swap');
        .home { font-family: 'Sora', ui-sans-serif, system-ui, sans-serif; }
        @keyframes rise { to { transform: translateY(calc(-50% - 0.5rem)); } }
        @keyframes slide { to { transform: translateX(-50%); } }
        @keyframes enter { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
        .col-track { animation: rise 38s linear infinite; }
        .col-reverse { animation-direction: reverse; }
        .band-track { animation: slide 30s linear infinite; }
        .outline-text { -webkit-text-stroke: 1.5px #CDB9FF; color: transparent; }
        .hero-in > * { animation: enter .8s cubic-bezier(.2,.7,.2,1) both; }
        .hero-in > *:nth-child(2) { animation-delay: .12s; }
        .hero-in > *:nth-child(3) { animation-delay: .24s; }
        .no-bar { scrollbar-width: none; } .no-bar::-webkit-scrollbar { display: none; }
        @media (prefers-reduced-motion: reduce) {
          .col-track, .band-track, .hero-in > * { animation: none; }
        }
      `}</style>

      {/* ============ HERO ============ */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:pb-0 lg:pt-0">
          <div className="hero-in py-6 lg:py-24">
            <h1 className="text-[clamp(2.8rem,7.2vw,6.2rem)] font-extrabold leading-[0.95] tracking-[-0.045em]">
              Things you'll end up showing your friends.
            </h1>
            <p className="mt-7 max-w-md text-lg leading-8 text-white/70">
              A small, carefully tested range of products for home, work and
              weekends. Pick one, and you're done.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="rounded-full bg-[#FF5C39] px-8 py-4 font-semibold text-[#0F0B24] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Shop best-sellers
              </Link>
              <Link
                to="/shop"
                className="rounded-full border border-white/30 px-8 py-4 font-semibold transition hover:border-[#CDB9FF] hover:text-[#CDB9FF]"
              >
                See new arrivals
              </Link>
            </div>
          </div>

          {/* Moving product wall: the memorable moment */}
          <div
            className="grid h-[480px] grid-cols-3 gap-4 lg:h-[100svh] lg:max-h-[860px]"
            style={{ maskImage: mask, WebkitMaskImage: mask }}
            aria-hidden="true"
          >
            <Column items={tiles.slice(0, 3)} />
            <Column items={tiles.slice(3, 6)} reverse className="pt-16" />
            <Column items={[tiles[2], tiles[0], tiles[4]]} className="hidden sm:block" />
          </div>
        </div>
      </section>

      {/* ============ MOVING BAND ============ */}
      <div className="overflow-hidden border-y border-white/10 py-6">
        <div className="band-track flex w-max gap-10 whitespace-nowrap text-5xl font-extrabold tracking-[-0.04em] sm:text-7xl">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10">
              <span>Tested</span><span className="outline-text">picked</span>
              <span>delivered</span><span className="outline-text">loved</span>
              <span>Tested</span><span className="outline-text">picked</span>
              <span>delivered</span><span className="outline-text">loved</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============ HOW WE PICK (sticky stacking cards) ============ */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-4xl font-extrabold leading-[1] tracking-[-0.04em] sm:text-6xl">
            Why the shop is small on purpose.
          </h2>
          <p className="mt-6 max-w-sm leading-7 text-white/70">
            Endless catalogues make choosing harder. Here is how a product earns
            its place on GenZVibe.
          </p>
        </div>
        <div>
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="sticky mb-6 flex min-h-[300px] flex-col justify-between rounded-3xl p-8 sm:p-10"
              style={{ background: s.bg, color: s.fg, top: `${96 + i * 20}px` }}
            >
              <span className="text-7xl font-extrabold tracking-[-0.06em] sm:text-8xl">{s.n}</span>
              <div>
                <h3 className="text-2xl font-bold sm:text-3xl">{s.t}</h3>
                <p className="mt-2 max-w-sm opacity-80">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ BEST-SELLERS ============ */}
      <section className="bg-[#F5F2FF] text-[#0F0B24]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">Best-sellers this week</h2>
            <Link to="/shop" className="font-semibold underline decoration-[#FF5C39] decoration-4 underline-offset-8">
              View all products
            </Link>
          </div>

          {loading ? (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-80 animate-pulse rounded-2xl bg-[#e4dff5]" />
              ))}
            </div>
          ) : product.length === 0 ? (
            <p className="mt-12 text-lg text-[#0F0B24]/60">Nothing in stock right now. Check back soon.</p>
          ) : (
            <div className="mt-12 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {product.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============ CATEGORIES (swipe sideways) ============ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="max-w-lg text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">
            Start with how you live.
          </h2>
        </div>
        <div className="no-bar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {aisles.map((a, i) => (
            <Link
              key={a.name}
              to="/shop"
              className="group relative flex h-[420px] w-[270px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[2rem] p-6 text-[#0F0B24] transition-transform duration-300 hover:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-[320px]"
              style={{ background: a.bg }}
            >
              <span className="text-sm font-semibold">{a.note}</span>
              {img(product[i]) && (
                <img
                  src={img(product[i])}
                  alt=""
                  loading="lazy"
                  className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-[60%] rounded-3xl object-cover shadow-2xl transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110"
                />
              )}
              <span className="text-4xl font-extrabold tracking-[-0.04em]">{a.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ PROMISES WITH COUNT-UP ============ */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:grid-cols-3 lg:px-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-6xl font-extrabold tracking-[-0.05em] text-[#CDB9FF] sm:text-7xl">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FINAL CTA + EMAIL ============ */}
      <section className="bg-[#FF5C39] text-[#0F0B24]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h2 className="text-[clamp(2.8rem,9vw,8rem)] font-extrabold leading-[0.9] tracking-[-0.05em]">
            Not buying today? Get the next drop first.
          </h2>
          <div className="mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
            {joined ? (
              <p className="text-xl font-semibold">You're in. We'll email you when something new lands.</p>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="flex-1 rounded-full bg-white px-6 py-4 outline-none placeholder:text-[#0F0B24]/50 focus-visible:ring-4 focus-visible:ring-[#0F0B24]/30"
                />
                <button
                  type="button"
                  onClick={() => email.includes("@") && setJoined(true)}
                  className="rounded-full bg-[#0F0B24] px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  Notify me
                </button>
              </>
            )}
          </div>
          <Link to="/shop" className="mt-8 inline-block font-semibold underline decoration-4 underline-offset-8">
            Or just have a look around
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;