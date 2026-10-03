// import React from "react";
// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl font-sans">

//       <div className="h-72 overflow-hidden bg-gray-100">
//         <img
//           src={product.imageUrl}
//           alt={product.name}
//           className="w-full h-full object-cover transition duration-500 hover:scale-105"
//         />
//       </div>

//       <div className="p-5">
//         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//           {product.name}
//         </h3>

//         <p className="text-xl font-bold text-gray-900 mb-4">
//           ${product.price.toFixed(2)}
//         </p>

//         <Link
//           to={`/product/${product._id}`}
//           className="inline-block rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
//         >
//           View Details
//         </Link>
//       </div>

//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";

/* Palette: night #0F0B24, coral #FF5C39, lilac #CDB9FF, mist #F5F2FF
   Only Tailwind classes are used here. No <style>, no inline styles, no extra CSS. */

const money = (n) =>
  `₹${Number(n || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const ProductCard = ({ product }) => {
  const soldOut = product.stock !== undefined && product.stock <= 0;
  const low = !soldOut && product.stock > 0 && product.stock <= 5;
  const desc = product.description ?? product.discription;

  return (
    <Link
      to={`/product/${product._id}`}
      className="group block w-full max-w-sm rounded-[1.75rem] text-[#0F0B24] outline-none focus-visible:ring-4 focus-visible:ring-[#FF5C39]/50"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#e4dff5]">
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className={`h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110 ${
            soldOut ? "grayscale" : ""
          }`}
        />

        {/* Top-left tag */}
        {(soldOut || low || product.category) && (
          <span
            className={`absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-xs font-semibold ${
              soldOut
                ? "bg-[#0F0B24] text-white"
                : low
                  ? "bg-[#FF5C39] text-[#0F0B24]"
                  : "bg-gradient-to-r from-[#FF4D2E] via-[#E0307A] to-[#6C47FF] bg-[length:200%_100%] text-white shadow-[0_12px_30px_-10px_rgba(224,48,122,0.7)] transition-all duration-500 hover:bg-[position:100%_0] hover:-translate-y-0.5 active:scale-[0.98]"
            }`}
          >
            {soldOut
              ? "Sold out"
              : low
                ? `Only ${product.stock} left`
                : product.category}
          </span>
        )}

        {/* Hover pill (always visible on phones, slides up on desktop) */}
        <span className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full bg-white py-2 pl-6 pr-2 text-sm font-bold text-[#0F0B24] shadow-xl transition duration-300 lg:translate-y-16 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
          View product
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F0B24] text-lg text-white transition duration-300 group-hover:bg-[#FF5C39] group-hover:text-[#0F0B24]">
            →
          </span>
        </span>
      </div>

      {/* Details */}
      <div className="flex items-start justify-between gap-4 px-2 pb-2 pt-4">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-extrabold tracking-[-0.03em]">
            {product.name}
          </h3>
          {desc && (
            <p className="mt-1 truncate text-sm text-[#0F0B24]/55">{desc}</p>
          )}
        </div>
        <p className="shrink-0 rounded-full bg-[#FF5C39] px-3.5 py-1.5 text-sm font-extrabold">
          {money(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
