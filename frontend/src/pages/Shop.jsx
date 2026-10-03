// import React, { useEffect, useMemo, useState } from "react";
// import ProductCard from "../components/ProductCard";

// /* Palette (same as the rest of the site): night #0F0B24, coral #FF5C39, violet #6C47FF, lilac #CDB9FF, mist #F5F2FF
//    Tailwind classes only. No <style>, no inline styles. */

// const gradientBtn =
//   "rounded-full bg-gradient-to-r from-[#FF4D2E] via-[#E0307A] to-[#6C47FF] bg-[length:200%_100%] px-7 py-3 text-sm font-bold text-white shadow-[0_10px_26px_-10px_rgba(224,48,122,0.7)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0] active:scale-[0.98]";

// const sorts = [
//   ["featured", "Featured"],
//   ["low", "Price: low to high"],
//   ["high", "Price: high to low"],
//   ["az", "Name: A to Z"],
// ];

// const Shop = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("featured");
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/products");
//         if (!res.ok) throw new Error("Failed to load products");
//         const data = await res.json();
//         setProducts(Array.isArray(data) ? data : []);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const categories = useMemo(
//     () => ["All", ...new Set(products.map((p) => p.category).filter(Boolean))],
//     [products]
//   );

//   const visible = useMemo(() => {
//     const q = search.trim().toLowerCase();
//     const list = products.filter(
//       (p) =>
//         (category === "All" || p.category === category) &&
//         (!q || `${p.name ?? ""} ${p.category ?? ""}`.toLowerCase().includes(q))
//     );
//     if (sort === "low") list.sort((a, b) => a.price - b.price);
//     if (sort === "high") list.sort((a, b) => b.price - a.price);
//     if (sort === "az") list.sort((a, b) => (a.name ?? "").localeCompare(b.name ?? ""));
//     return list;
//   }, [products, search, category, sort]);

//   const filtered = search !== "" || category !== "All" || sort !== "featured";
//   const reset = () => {
//     setSearch("");
//     setCategory("All");
//     setSort("featured");
//   };
//   const sortLabel = sorts.find(([v]) => v === sort)[1];

//   return (
//     <div className="min-h-screen bg-[#F5F2FF] font-sans text-[#0F0B24]">
//       {/* ================= COMPACT HEADER ================= */}
//       <section className="mx-auto flex max-w-7xl flex-col gap-4 px-6 pb-5 pt-8 sm:flex-row sm:items-end sm:justify-between lg:px-8">
//         <div>
//           <h1 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
//             Find your <span className="text-[#6C47FF]">vibe.</span>
//           </h1>
//           <p className="mt-1 text-sm text-[#0F0B24]/60">
//             {loading ? "Loading the collection..." : `${products.length} products, picked for everyday life.`}
//           </p>
//         </div>

//         <div className="relative w-full sm:max-w-sm">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F0B24]/40"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//             aria-hidden="true"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
//           </svg>
//           <input
//             type="text"
//             aria-label="Search products"
//             placeholder="Search products"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="h-11 w-full rounded-full border border-[#0F0B24]/15 bg-white pl-11 pr-10 text-sm outline-none transition placeholder:text-[#0F0B24]/40 hover:border-[#0F0B24]/30 focus:border-[#6C47FF] focus:ring-4 focus:ring-[#6C47FF]/15"
//           />
//           {search && (
//             <button
//               type="button"
//               aria-label="Clear search"
//               onClick={() => setSearch("")}
//               className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-xs text-[#0F0B24]/50 transition hover:bg-[#0F0B24]/10 hover:text-[#0F0B24]"
//             >
//               ✕
//             </button>
//           )}
//         </div>
//       </section>

//       {/* ================= STICKY TOOLBAR: chips + sort =================
//           If your navbar is sticky, change top-0 to its height (for example top-16). */}
//       <div className="sticky top-0 z-30 border-y border-[#0F0B24]/10 bg-[#F5F2FF]/90 backdrop-blur">
//         <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-2.5 lg:px-8">
//           <div className="flex flex-1 gap-2 overflow-x-auto py-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             {categories.map((c) => (
//               <button
//                 key={c}
//                 type="button"
//                 onClick={() => setCategory(c)}
//                 aria-pressed={category === c}
//                 className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
//                   category === c
//                     ? "bg-[#0F0B24] text-white"
//                     : "border border-[#0F0B24]/15 bg-white text-[#0F0B24]/75 hover:border-[#0F0B24]/40 hover:text-[#0F0B24]"
//                 }`}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>

//           {/* Custom sort dropdown */}
//           <div className="relative shrink-0">
//             <button
//               type="button"
//               onClick={() => setOpen((o) => !o)}
//               aria-haspopup="listbox"
//               aria-expanded={open}
//               className="flex items-center gap-2 rounded-full border border-[#0F0B24]/15 bg-white px-4 py-2 text-sm font-semibold transition hover:border-[#6C47FF]"
//             >
//               <span className="hidden text-[#0F0B24]/50 sm:inline">Sort:</span>
//               {sortLabel}
//               <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                 <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
//               </svg>
//             </button>

//             {open && (
//               <>
//                 <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden="true" />
//                 <ul role="listbox" className="absolute right-0 top-full z-50 mt-2 w-56 rounded-2xl border border-[#0F0B24]/10 bg-white p-1.5 shadow-[0_20px_40px_-12px_rgba(15,11,36,0.25)]">
//                   {sorts.map(([v, l]) => (
//                     <li key={v} role="option" aria-selected={sort === v}>
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSort(v);
//                           setOpen(false);
//                         }}
//                         className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm font-semibold transition ${
//                           sort === v ? "bg-[#6C47FF]/10 text-[#6C47FF]" : "hover:bg-[#F5F2FF]"
//                         }`}
//                       >
//                         {l}
//                         {sort === v && <span aria-hidden="true">✓</span>}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ================= PRODUCTS ================= */}
//       <main className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
//         {!loading && (
//           <div className="mb-5 flex items-center justify-between gap-3 text-sm">
//             <p className="font-semibold">
//               {visible.length} {visible.length === 1 ? "product" : "products"}
//               {category !== "All" && <span className="font-normal text-[#0F0B24]/55"> in {category}</span>}
//             </p>
//             {filtered && (
//               <button
//                 type="button"
//                 onClick={reset}
//                 className="font-semibold text-[#6C47FF] underline underline-offset-4 hover:text-[#0F0B24]"
//               >
//                 Clear filters
//               </button>
//             )}
//           </div>
//         )}

//         {loading ? (
//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {[1, 2, 3, 4].map((i) => (
//               <div key={i} className="w-full max-w-sm">
//                 <div className="aspect-[4/5] animate-pulse rounded-[1.75rem] bg-[#e4dff5]" />
//                 <div className="mt-3 h-4 w-2/3 animate-pulse rounded bg-[#e4dff5]" />
//               </div>
//             ))}
//           </div>
//         ) : visible.length > 0 ? (
//           <div className="grid grid-cols-1 justify-items-center gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {visible.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         ) : (
//           <div className="py-16 text-center">
//             <h2 className="text-2xl font-extrabold tracking-[-0.03em]">Nothing matches that.</h2>
//             <p className="mt-2 text-sm text-[#0F0B24]/60">Try a different word or another category.</p>
//             <button type="button" onClick={reset} className={`mt-5 ${gradientBtn}`}>
//               Show everything
//             </button>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Shop;









import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

/* Palette (same as the rest of the site): night #0F0B24, coral #FF5C39, violet #6C47FF, lilac #CDB9FF, mist #F5F2FF
   Tailwind classes only. No <style>, no inline styles. */

const gradientBtn =
  "rounded-full bg-gradient-to-r from-[#FF4D2E] via-[#E0307A] to-[#6C47FF] bg-[length:200%_100%] px-7 py-3 text-sm font-bold text-white shadow-[0_10px_26px_-10px_rgba(224,48,122,0.7)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0] active:scale-[0.98]";

const sorts = [
  ["featured", "Featured"],
  ["low", "Price: low to high"],
  ["high", "Price: high to low"],
  ["az", "Name: A to Z"],
];

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // URL search query
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") || ""
  );

  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [open, setOpen] = useState(false);

  /* ================= FETCH PRODUCTS ================= */

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");

        if (!res.ok) {
          throw new Error("Failed to load products");
        }

        const data = await res.json();

        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* ================= READ SEARCH FROM URL ================= */

  useEffect(() => {
    const queryFromUrl = searchParams.get("q") || "";

    setSearch(queryFromUrl);
  }, [searchParams]);

  /* ================= UPDATE URL WHEN SEARCH CHANGES ================= */

  useEffect(() => {
    const trimmedSearch = search.trim();

    const currentQuery = searchParams.get("q") || "";

    // Agar URL already same hai to unnecessary update mat karo
    if (trimmedSearch === currentQuery) {
      return;
    }

    if (trimmedSearch) {
      setSearchParams(
        { q: trimmedSearch },
        { replace: true }
      );
    } else {
      setSearchParams({}, { replace: true });
    }
  }, [search]);

  /* ================= CATEGORIES ================= */

  const categories = useMemo(
    () => [
      "All",
      ...new Set(
        products
          .map((p) => p.category)
          .filter(Boolean)
      ),
    ],
    [products]
  );

  /* ================= FILTER + SEARCH + SORT ================= */

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();

    const list = products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!q ||
          `${p.name ?? ""} ${p.category ?? ""}`
            .toLowerCase()
            .includes(q))
    );

    if (sort === "low") {
      list.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      list.sort((a, b) => b.price - a.price);
    }

    if (sort === "az") {
      list.sort((a, b) =>
        (a.name ?? "").localeCompare(b.name ?? "")
      );
    }

    return list;
  }, [products, search, category, sort]);

  /* ================= FILTER STATUS ================= */

  const filtered =
    search !== "" ||
    category !== "All" ||
    sort !== "featured";

  /* ================= RESET ================= */

  const reset = () => {
    setSearch("");
    setCategory("All");
    setSort("featured");

    setSearchParams({}, { replace: true });
  };

  const sortLabel =
    sorts.find(([v]) => v === sort)?.[1] || "Featured";

  return (
    <div className="min-h-screen bg-[#F5F2FF] font-sans text-[#0F0B24]">

      {/* ================= COMPACT HEADER ================= */}

      <section className="mx-auto flex max-w-7xl flex-col gap-4 px-6 pb-5 pt-8 sm:flex-row sm:items-end sm:justify-between lg:px-8">

        <div>
          <h1 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
            Find your{" "}
            <span className="text-[#6C47FF]">
              vibe.
            </span>
          </h1>

          <p className="mt-1 text-sm text-[#0F0B24]/60">
            {loading
              ? "Loading the collection..."
              : `${products.length} products, picked for everyday life.`}
          </p>
        </div>

        {/* ================= SHOP SEARCH ================= */}

        <div className="relative w-full sm:max-w-sm">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F0B24]/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
            />
          </svg>

          <input
            type="text"
            aria-label="Search products"
            placeholder="Search products"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="h-11 w-full rounded-full border border-[#0F0B24]/15 bg-white pl-11 pr-10 text-sm outline-none transition placeholder:text-[#0F0B24]/40 hover:border-[#0F0B24]/30 focus:border-[#6C47FF] focus:ring-4 focus:ring-[#6C47FF]/15"
          />

          {search && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-xs text-[#0F0B24]/50 transition hover:bg-[#0F0B24]/10 hover:text-[#0F0B24]"
            >
              ✕
            </button>
          )}

        </div>
      </section>

      {/* ================= STICKY TOOLBAR ================= */}

      <div className="sticky top-0 z-30 border-y border-[#0F0B24]/10 bg-[#F5F2FF]/90 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-2.5 lg:px-8">

          <div className="flex flex-1 gap-2 overflow-x-auto py-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === c
                    ? "bg-[#0F0B24] text-white"
                    : "border border-[#0F0B24]/15 bg-white text-[#0F0B24]/75 hover:border-[#0F0B24]/40 hover:text-[#0F0B24]"
                }`}
              >
                {c}
              </button>
            ))}

          </div>

          {/* ================= SORT ================= */}

          <div className="relative shrink-0">

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-haspopup="listbox"
              aria-expanded={open}
              className="flex items-center gap-2 rounded-full border border-[#0F0B24]/15 bg-white px-4 py-2 text-sm font-semibold transition hover:border-[#6C47FF]"
            >
              <span className="hidden text-[#0F0B24]/50 sm:inline">
                Sort:
              </span>

              {sortLabel}

              <svg
                className={`h-4 w-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 0 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {open && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setOpen(false)}
                  aria-hidden="true"
                />

                <ul
                  role="listbox"
                  className="absolute right-0 top-full z-50 mt-2 w-56 rounded-2xl border border-[#0F0B24]/10 bg-white p-1.5 shadow-[0_20px_40px_-12px_rgba(15,11,36,0.25)]"
                >
                  {sorts.map(([v, l]) => (
                    <li
                      key={v}
                      role="option"
                      aria-selected={sort === v}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setSort(v);
                          setOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm font-semibold transition ${
                          sort === v
                            ? "bg-[#6C47FF]/10 text-[#6C47FF]"
                            : "hover:bg-[#F5F2FF]"
                        }`}
                      >
                        {l}

                        {sort === v && (
                          <span aria-hidden="true">
                            ✓
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}

          </div>
        </div>
      </div>

      {/* ================= PRODUCTS ================= */}

      <main className="mx-auto max-w-7xl px-6 py-6 lg:px-8">

        {!loading && (
          <div className="mb-5 flex items-center justify-between gap-3 text-sm">

            <p className="font-semibold">
              {visible.length}{" "}
              {visible.length === 1
                ? "product"
                : "products"}

              {category !== "All" && (
                <span className="font-normal text-[#0F0B24]/55">
                  {" "}
                  in {category}
                </span>
              )}
            </p>

            {filtered && (
              <button
                type="button"
                onClick={reset}
                className="font-semibold text-[#6C47FF] underline underline-offset-4 hover:text-[#0F0B24]"
              >
                Clear filters
              </button>
            )}

          </div>
        )}

        {/* ================= LOADING ================= */}

        {loading ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-full max-w-sm"
              >
                <div className="aspect-[4/5] animate-pulse rounded-[1.75rem] bg-[#e4dff5]" />

                <div className="mt-3 h-4 w-2/3 animate-pulse rounded bg-[#e4dff5]" />
              </div>
            ))}

          </div>
        ) : visible.length > 0 ? (

          <div className="grid grid-cols-1 justify-items-center gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {visible.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}

          </div>

        ) : (

          <div className="py-16 text-center">

            <h2 className="text-2xl font-extrabold tracking-[-0.03em]">
              Nothing matches that.
            </h2>

            <p className="mt-2 text-sm text-[#0F0B24]/60">
              Try a different word or another category.
            </p>

            <button
              type="button"
              onClick={reset}
              className={`mt-5 ${gradientBtn}`}
            >
              Show everything
            </button>

          </div>
        )}

      </main>
    </div>
  );
};

export default Shop;
