
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cardSlice";
// import ProductCard from "../components/ProductCard";

// /* Palette (same as Home): night #0F0B24, coral #FF5C39, lilac #CDB9FF, mist #F5F2FF */

// const money = (n) => `₹${Number(n || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// // Replace with your real policies before launch.
// const info = [
//   ["Delivery", "Orders are packed quickly and tracked until they reach your door."],
//   ["Returns", "Not right? Send it back. Returns are simple and hassle free."],
//   ["Secure checkout", "Your account and payment details stay protected."],
// ];

// const ProductDetail = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const [product, setProduct] = useState(null);
//   const [related, setRelated] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [qty, setQty] = useState(1);
//   const [added, setAdded] = useState(false);
//   const [zoom, setZoom] = useState(null);

//   useEffect(() => {
//     let alive = true;
//     setLoading(true);
//     setQty(1);
//     window.scrollTo({ top: 0 });
//     (async () => {
//       try {
//         const res = await fetch(`/api/products/${id}`);
//         if (!res.ok) throw new Error("Not found");
//         const data = await res.json();
//         if (alive) setProduct(data);
//         const all = await (await fetch("/api/products")).json();
//         if (alive && Array.isArray(all)) {
//           const others = all.filter((p) => p._id !== id);
//           const same = others.filter((p) => p.category && p.category === data.category);
//           setRelated([...same, ...others.filter((p) => !same.includes(p))].slice(0, 4));
//         }
//       } catch (error) {
//         console.error(error);
//         if (alive) setProduct(null);
//       } finally {
//         if (alive) setLoading(false);
//       }
//     })();
//     return () => { alive = false; };
//   }, [id]);

//   const handleAddToCart = () => {
//     if (!product) return;
//     dispatch(
//       addToCart({
//         productId: product._id,
//         name: product.name,
//         price: product.price,
//         imageUrl: product.imageUrl,
//         qty,
//       })
//     );
//     setAdded(true);
//     setTimeout(() => setAdded(false), 2200);
//   };

//   const wrap = "min-h-screen bg-[#F5F2FF] text-[#0F0B24]";
//   const font = { fontFamily: "'Sora', ui-sans-serif, system-ui, sans-serif" };
//   const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&display=swap');`;

//   if (loading) {
//     return (
//       <div className={wrap} style={font}>
//         <style>{fontImport}</style>
//         <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[420px_1fr] lg:px-8">
//           <div className="aspect-[4/5] w-full max-w-[420px] animate-pulse rounded-3xl bg-[#e4dff5]" />
//           <div className="space-y-4">
//             <div className="h-6 w-32 animate-pulse rounded bg-[#e4dff5]" />
//             <div className="h-16 w-3/4 animate-pulse rounded bg-[#e4dff5]" />
//             <div className="h-10 w-40 animate-pulse rounded bg-[#e4dff5]" />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className={`${wrap} flex items-center justify-center px-6`} style={font}>
//         <style>{fontImport}</style>
//         <div className="py-32 text-center">
//           <h1 className="text-5xl font-extrabold tracking-[-0.04em] sm:text-7xl">Product not found.</h1>
//           <p className="mt-4 text-[#0F0B24]/60">It may have been removed or the link is wrong.</p>
//           <Link to="/shop" className="mt-8 inline-block rounded-full bg-[#FF5C39] px-8 py-4 font-semibold">
//             Back to shop
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const inStock = product.stock > 0;
//   const low = inStock && product.stock <= 5;

//   return (
//     <div className={`${wrap} pb-28 lg:pb-0`} style={font}>
//       <style>{fontImport}</style>

//       <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
//         <div className="grid gap-10 lg:grid-cols-[420px_1fr] lg:gap-16">
//           {/* Image with hover zoom (smaller container) */}
//           <div
//             className="relative mx-auto aspect-[4/5] w-full max-w-[420px] cursor-zoom-in overflow-hidden rounded-3xl bg-[#e4dff5] lg:sticky lg:top-6 lg:self-start"
//             onMouseMove={(e) => {
//               const r = e.currentTarget.getBoundingClientRect();
//               setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
//             }}
//             onMouseLeave={() => setZoom(null)}
//           >
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="h-full w-full object-cover transition-transform duration-300 ease-out"
//               style={zoom ? { transform: "scale(1.7)", transformOrigin: `${zoom.x}% ${zoom.y}%` } : undefined}
//             />
//             {product.category && (
//               <span className="absolute left-5 top-5 rounded-full bg-[#0F0B24] px-4 py-2 text-xs font-semibold text-white">
//                 {product.category}
//               </span>
//             )}
//           </div>

//           {/* Info */}
//           <div className="lg:py-6">
//             <h1 className="text-4xl font-extrabold leading-[1] tracking-[-0.045em] sm:text-6xl">
//               {product.name}
//             </h1>

//             <div className="mt-6 flex flex-wrap items-baseline gap-4">
//               <p className="text-4xl font-extrabold tracking-[-0.03em]">{money(product.price)}</p>
//               <p className="text-sm text-[#0F0B24]/60">Inclusive of all applicable taxes</p>
//             </div>

//             <p className="mt-8 max-w-lg leading-8 text-[#0F0B24]/75">{product.description}</p>

//             {/* Stock */}
//             <p className={`mt-8 flex items-center gap-2 text-sm font-semibold ${inStock ? "" : "text-red-600"}`}>
//               <span className={`h-2.5 w-2.5 rounded-full ${inStock ? (low ? "bg-[#FF5C39]" : "bg-emerald-500") : "bg-red-500"}`} />
//               {!inStock ? "Temporarily out of stock" : low ? `Only ${product.stock} left` : "In stock and ready to ship"}
//             </p>

//             {/* Quantity + add to cart */}
//             <div className="mt-6 flex flex-wrap gap-4">
//               <div className="flex items-center rounded-full border border-[#0F0B24]/20 bg-white">
//                 <button
//                   type="button"
//                   aria-label="Decrease quantity"
//                   onClick={() => setQty((q) => Math.max(1, q - 1))}
//                   className="h-14 w-14 text-xl hover:text-[#FF5C39] disabled:opacity-30"
//                   disabled={!inStock}
//                 >
//                   −
//                 </button>
//                 <span className="w-8 text-center font-semibold" aria-live="polite">{qty}</span>
//                 <button
//                   type="button"
//                   aria-label="Increase quantity"
//                   onClick={() => setQty((q) => Math.min(product.stock || 1, q + 1))}
//                   className="h-14 w-14 text-xl hover:text-[#FF5C39] disabled:opacity-30"
//                   disabled={!inStock}
//                 >
//                   +
//                 </button>
//               </div>

//               <button
//                 type="button"
//                 onClick={handleAddToCart}
//                 disabled={!inStock}
//                 className={`h-14 min-w-[220px] flex-1 rounded-full px-8 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F0B24] disabled:cursor-not-allowed disabled:bg-[#0F0B24]/15 disabled:text-[#0F0B24]/40 ${
//                   added ? "bg-[#0F0B24] text-white" : "bg-[#FF5C39] text-[#0F0B24] hover:scale-[1.02]"
//                 }`}
//               >
//                 {!inStock ? "Out of stock" : added ? "Added to your cart" : `Add to cart · ${money(product.price * qty)}`}
//               </button>
//             </div>

//             {added && (
//               <Link to="/cart" className="mt-4 inline-block font-semibold underline decoration-[#FF5C39] decoration-4 underline-offset-8">
//                 View cart
//               </Link>
//             )}

//             {/* Details, collapsible */}
//             <div className="mt-12 border-t border-[#0F0B24]">
//               {info.map(([t, d]) => (
//                 <details key={t} className="group border-b border-[#0F0B24]/20 py-5">
//                   <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
//                     {t}
//                     <span className="text-2xl transition-transform group-open:rotate-45">+</span>
//                   </summary>
//                   <p className="mt-3 max-w-md text-[#0F0B24]/65">{d}</p>
//                 </details>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related products */}
//       {related.length > 0 && (
//         <section className="mx-auto mt-24 max-w-7xl px-6 pb-24 lg:px-8">
//           <div className="flex flex-wrap items-end justify-between gap-4">
//             <h2 className="text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">You might also like</h2>
//             <Link to="/shop" className="font-semibold underline decoration-[#FF5C39] decoration-4 underline-offset-8">
//               Continue shopping
//             </Link>
//           </div>
//           <div className="mt-10 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {related.map((p) => (
//               <ProductCard key={p._id} product={p} />
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Mobile sticky buy bar */}
//       <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-4 border-t border-[#0F0B24]/10 bg-white/95 px-5 pt-3 backdrop-blur lg:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
//         <p className="text-xl font-extrabold tracking-[-0.03em]">{money(product.price)}</p>
//         <button
//           type="button"
//           onClick={handleAddToCart}
//           disabled={!inStock}
//           className={`h-12 flex-1 rounded-full font-semibold disabled:bg-[#0F0B24]/15 disabled:text-[#0F0B24]/40 ${added ? "bg-[#0F0B24] text-white" : "bg-[#FF5C39] text-[#0F0B24]"}`}
//         >
//           {!inStock ? "Out of stock" : added ? "Added" : "Add to cart"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;






import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";
import ProductCard from "../components/ProductCard";

/* Palette (same as Home): night #0F0B24, coral #FF5C39, lilac #CDB9FF, mist #F5F2FF */

const money = (n) =>
  `₹${Number(n || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

// Replace with your real policies before launch.
const info = [
  [
    "Delivery",
    "Orders are packed quickly and tracked until they reach your door.",
  ],
  [
    "Returns",
    "Not right? Send it back. Returns are simple and hassle free.",
  ],
  [
    "Secure checkout",
    "Your account and payment details stay protected.",
  ],
];

const ProductDetail = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    let alive = true;

    setLoading(true);
    setQty(1);
    window.scrollTo({ top: 0 });

    (async () => {
      try {
        const res = await fetch(`/api/products/${id}`);

        if (!res.ok) {
          throw new Error("Not found");
        }

        const data = await res.json();

        if (alive) {
          setProduct(data);
        }

        const all = await (await fetch("/api/products")).json();

        if (alive && Array.isArray(all)) {
          const others = all.filter((p) => p._id !== id);

          const same = others.filter(
            (p) => p.category && p.category === data.category
          );

          setRelated(
            [
              ...same,
              ...others.filter((p) => !same.includes(p)),
            ].slice(0, 4)
          );
        }
      } catch (error) {
        console.error(error);

        if (alive) {
          setProduct(null);
        }
      } finally {
        if (alive) {
          setLoading(false);
        }
      }
    })();

    return () => {
      alive = false;
    };
  }, [id]);

  // Add product to backend cart
  const handleAddToCart = async () => {
    if (!product) return;

    // User must be logged in
    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          productId: product._id,
          qty: qty,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Failed to add product to cart"
        );
      }

      console.log("Cart updated:", data);

      setAdded(true);

      setTimeout(() => {
        setAdded(false);
      }, 2200);
    } catch (error) {
      console.error("Add to Cart Error:", error);
      alert(error.message);
    }
  };

  const wrap = "min-h-screen bg-[#F5F2FF] text-[#0F0B24]";

  const font = {
    fontFamily: "'Sora', ui-sans-serif, system-ui, sans-serif",
  };

  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&display=swap');`;

  if (loading) {
    return (
      <div className={wrap} style={font}>
        <style>{fontImport}</style>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[420px_1fr] lg:px-8">
          <div className="aspect-[4/5] w-full max-w-[420px] animate-pulse rounded-3xl bg-[#e4dff5]" />

          <div className="space-y-4">
            <div className="h-6 w-32 animate-pulse rounded bg-[#e4dff5]" />

            <div className="h-16 w-3/4 animate-pulse rounded bg-[#e4dff5]" />

            <div className="h-10 w-40 animate-pulse rounded bg-[#e4dff5]" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div
        className={`${wrap} flex items-center justify-center px-6`}
        style={font}
      >
        <style>{fontImport}</style>

        <div className="py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-[-0.04em] sm:text-7xl">
            Product not found.
          </h1>

          <p className="mt-4 text-[#0F0B24]/60">
            It may have been removed or the link is wrong.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block rounded-full bg-[#FF5C39] px-8 py-4 font-semibold"
          >
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const inStock = product.stock > 0;
  const low = inStock && product.stock <= 5;

  return (
    <div
      className={`${wrap} pb-28 lg:pb-0`}
      style={font}
    >
      <style>{fontImport}</style>

      <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[420px_1fr] lg:gap-16">

          {/* Image with hover zoom */}
          <div
            className="relative mx-auto aspect-[4/5] w-full max-w-[420px] cursor-zoom-in overflow-hidden rounded-3xl bg-[#e4dff5] lg:sticky lg:top-6 lg:self-start"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();

              setZoom({
                x: ((e.clientX - r.left) / r.width) * 100,
                y: ((e.clientY - r.top) / r.height) * 100,
              });
            }}
            onMouseLeave={() => setZoom(null)}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-300 ease-out"
              style={
                zoom
                  ? {
                      transform: "scale(1.7)",
                      transformOrigin: `${zoom.x}% ${zoom.y}%`,
                    }
                  : undefined
              }
            />

            {product.category && (
              <span className="absolute left-5 top-5 rounded-full bg-[#0F0B24] px-4 py-2 text-xs font-semibold text-white">
                {product.category}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="lg:py-6">
            <h1 className="text-4xl font-extrabold leading-[1] tracking-[-0.045em] sm:text-6xl">
              {product.name}
            </h1>

            <div className="mt-6 flex flex-wrap items-baseline gap-4">
              <p className="text-4xl font-extrabold tracking-[-0.03em]">
                {money(product.price)}
              </p>

              <p className="text-sm text-[#0F0B24]/60">
                Inclusive of all applicable taxes
              </p>
            </div>

            <p className="mt-8 max-w-lg leading-8 text-[#0F0B24]/75">
              {product.description}
            </p>

            {/* Stock */}
            <p
              className={`mt-8 flex items-center gap-2 text-sm font-semibold ${
                inStock ? "" : "text-red-600"
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  inStock
                    ? low
                      ? "bg-[#FF5C39]"
                      : "bg-emerald-500"
                    : "bg-red-500"
                }`}
              />

              {!inStock
                ? "Temporarily out of stock"
                : low
                ? `Only ${product.stock} left`
                : "In stock and ready to ship"}
            </p>

            {/* Quantity + add to cart */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center rounded-full border border-[#0F0B24]/20 bg-white">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() =>
                    setQty((q) => Math.max(1, q - 1))
                  }
                  className="h-14 w-14 text-xl hover:text-[#FF5C39] disabled:opacity-30"
                  disabled={!inStock}
                >
                  −
                </button>

                <span
                  className="w-8 text-center font-semibold"
                  aria-live="polite"
                >
                  {qty}
                </span>

                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() =>
                    setQty((q) =>
                      Math.min(product.stock || 1, q + 1)
                    )
                  }
                  className="h-14 w-14 text-xl hover:text-[#FF5C39] disabled:opacity-30"
                  disabled={!inStock}
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!inStock}
                className={`h-14 min-w-[220px] flex-1 rounded-full px-8 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F0B24] disabled:cursor-not-allowed disabled:bg-[#0F0B24]/15 disabled:text-[#0F0B24]/40 ${
                  added
                    ? "bg-[#0F0B24] text-white"
                    : "bg-[#FF5C39] text-[#0F0B24] hover:scale-[1.02]"
                }`}
              >
                {!inStock
                  ? "Out of stock"
                  : added
                  ? "Added to your cart"
                  : `Add to cart · ${money(product.price * qty)}`}
              </button>
            </div>

            {added && (
              <Link
                to="/cart"
                className="mt-4 inline-block font-semibold underline decoration-[#FF5C39] decoration-4 underline-offset-8"
              >
                View cart
              </Link>
            )}

            {/* Details, collapsible */}
            <div className="mt-12 border-t border-[#0F0B24]">
              {info.map(([t, d]) => (
                <details
                  key={t}
                  className="group border-b border-[#0F0B24]/20 py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
                    {t}

                    <span className="text-2xl transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-3 max-w-md text-[#0F0B24]/65">
                    {d}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mx-auto mt-24 max-w-7xl px-6 pb-24 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">
              You might also like
            </h2>

            <Link
              to="/shop"
              className="font-semibold underline decoration-[#FF5C39] decoration-4 underline-offset-8"
            >
              Continue shopping
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Mobile sticky buy bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-4 border-t border-[#0F0B24]/10 bg-white/95 px-5 pt-3 backdrop-blur lg:hidden"
        style={{
          paddingBottom:
            "max(0.75rem, env(safe-area-inset-bottom))",
        }}
      >
        <p className="text-xl font-extrabold tracking-[-0.03em]">
          {money(product.price)}
        </p>

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!inStock}
          className={`h-12 flex-1 rounded-full font-semibold disabled:bg-[#0F0B24]/15 disabled:text-[#0F0B24]/40 ${
            added
              ? "bg-[#0F0B24] text-white"
              : "bg-[#FF5C39] text-[#0F0B24]"
          }`}
        >
          {!inStock
            ? "Out of stock"
            : added
            ? "Added"
            : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
