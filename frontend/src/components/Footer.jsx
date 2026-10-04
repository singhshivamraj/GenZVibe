
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import { Truck, RotateCcw, ShieldCheck } from "lucide-react";
// import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

// /* Palette (same as the rest of the site): night #0F0B24, coral #FF5C39, violet #6C47FF, lilac #CDB9FF
//    Tailwind classes only. No <style>, no inline styles. */

// const gradientBtn =
//   "bg-gradient-to-r from-[#FF4D2E] via-[#E0307A] to-[#6C47FF] bg-[length:200%_100%] font-bold text-white transition-all duration-500 hover:bg-[position:100%_0] active:scale-[0.97]";

// const perks = [
//   [Truck, "Free shipping", "On every order"],
//   [RotateCcw, "Easy returns", "Simple and hassle free"],
//   [ShieldCheck, "Secure checkout", "Your payment is protected"],
// ];

// const columns = [
//   {
//     title: "Shop",
//     links: [
//       ["All products", "/shop"],
//       ["Home", "/"],
//       ["Your cart", "/cart"],
//       ["My orders", "/my-orders"],
//     ],
//   },
//   {
//     title: "Help",
//     links: [
//       ["Shipping & returns", "/return"],
//       ["My account", "/profile"],
//       ["About us", "/about"],
//       ["Disclaimer", "/disclaimer"],
//     ],
//   },
// ];

// const socials = [
//   ["Instagram", "https://www.instagram.com/shivamm.63/", FaInstagram],
//   ["GitHub", "https://github.com/singhshivamraj", FaGithub],
//   ["LinkedIn", "https://www.linkedin.com/in/shivam-raj-0148592a5/", FaLinkedin],
// ];

// function Footer() {
//   const currentYear = new Date().getFullYear();
//   const [email, setEmail] = useState("");
//   const [joined, setJoined] = useState(false);

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (email.includes("@")) setJoined(true);
//   };

//   return (
//     <footer className="bg-[#0F0B24] text-white">
//       {/* ================= TRUST STRIP ================= */}
//       <div className="border-b border-white/10">
//         <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 sm:grid-cols-3 sm:px-6 lg:px-8">
//           {perks.map(([Icon, title, text]) => (
//             <div key={title} className="flex items-center gap-3">
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#CDB9FF]">
//                 <Icon className="h-5 w-5" strokeWidth={1.8} />
//               </span>
//               <div>
//                 <p className="text-sm font-bold">{title}</p>
//                 <p className="text-xs text-white/55">{text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= MAIN ================= */}
//       <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr] lg:px-8">
//         {/* Brand */}
//         <div>
//           <Link to="/" className="inline-block text-2xl font-extrabold tracking-[-0.05em]">
//             GenZ<span className="text-[#CDB9FF]">Vibe</span>
//             <span className="text-[#FF5C39]">.</span>
//           </Link>
//           <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
//             Your everyday style, your rules. Products that match your vibe.
//           </p>
//           <div className="mt-4 flex gap-2">
//             {socials.map(([label, href, Icon]) => (
//               <a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#FF5C39] hover:bg-[#FF5C39] hover:text-[#0F0B24]"
//               >
//                 <Icon className="h-4 w-4" />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Link columns */}
//         {columns.map((col) => (
//           <div key={col.title}>
//             <h3 className="text-sm font-bold text-[#CDB9FF]">{col.title}</h3>
//             <ul className="mt-4 space-y-2.5">
//               {col.links.map(([label, to]) => (
//                 <li key={label}>
//                   <Link to={to} className="text-sm text-white/70 transition hover:text-white hover:underline hover:decoration-[#FF5C39] hover:decoration-2 hover:underline-offset-4">
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-sm font-bold text-[#CDB9FF]">Stay updated</h3>
//           <p className="mt-4 text-sm text-white/60">New arrivals and updates, straight to your inbox.</p>
//           {joined ? (
//             <p className="mt-3 text-sm font-semibold text-white">You're in. Watch your inbox.</p>
//           ) : (
//             <form onSubmit={handleSubscribe} className="mt-3 flex gap-2">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email address"
//                 aria-label="Email address"
//                 className="h-11 min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-4 text-base text-white outline-none placeholder:text-white/40 focus:border-[#CDB9FF] focus:ring-4 focus:ring-[#CDB9FF]/20"
//               />
//               <button type="submit" className={`h-11 shrink-0 rounded-full px-5 text-sm ${gradientBtn}`}>
//                 Join
//               </button>
//             </form>
//           )}
//         </div>
//       </div>

//       {/* ================= BOTTOM BAR ================= */}
//       <div className="border-t border-white/10">
//         <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
//           <p>© {currentYear} GenZVibe. All rights reserved.</p>
//           <div className="flex gap-5">
//             <Link to="/return" className="transition hover:text-white">Return policy</Link>
//             <Link to="/disclaimer" className="transition hover:text-white">Disclaimer</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;












import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

/* Palette (same as the rest of the site): night #0F0B24, coral #FF5C39, violet #6C47FF, lilac #CDB9FF
   Tailwind classes only. No <style>, no inline styles. */

const gradientBtn =
  "bg-gradient-to-r from-[#FF4D2E] via-[#E0307A] to-[#6C47FF] bg-[length:200%_100%] font-bold text-white transition-all duration-500 hover:bg-[position:100%_0] active:scale-[0.97]";

const perks = [
  [Truck, "Free shipping", "On every order"],
  [RotateCcw, "Easy returns", "Simple and hassle free"],
  [ShieldCheck, "Secure checkout", "Your payment is protected"],
];

const columns = [
  {
    title: "Shop",
    links: [
      ["All products", "/shop"],
      ["Home", "/"],
      ["Your cart", "/cart"],
      ["My orders", "/my-orders"],
    ],
  },
  {
    title: "Help",
    links: [
      ["Shipping & returns", "/return"],
      ["My account", "/profile"],
      ["About us", "/about"],
      ["Disclaimer", "/disclaimer"],
    ],
  },
];

const socials = [
  ["Instagram", "https://www.instagram.com/shivamm.63/", FaInstagram],
  ["GitHub", "https://github.com/singhshivamraj", FaGithub],
  ["LinkedIn", "https://www.linkedin.com/in/shivam-raj-0148592a5/", FaLinkedin],
];

function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.includes("@")) {
      setJoined(true);
    }
  };

  return (
    <footer className="bg-[#0F0B24] text-white">
      {/* ================= TRUST STRIP ================= */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 sm:grid-cols-3 sm:px-6 lg:px-8">
          {perks.map(([Icon, title, text]) => (
            <div key={title} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#CDB9FF]">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>

              <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="text-xs text-white/55">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr] lg:px-8">
        {/* Brand */}
        <div>
          <Link
            to="/"
            className="inline-block text-2xl font-extrabold tracking-[-0.05em]"
          >
            GenZ<span className="text-[#CDB9FF]">Vibe</span>
            <span className="text-[#FF5C39]">.</span>
          </Link>

          <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
            Your everyday style, your rules. Products that match your vibe.
          </p>

          <div className="mt-4 flex gap-2">
            {socials.map(([label, href, Icon]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#FF5C39] hover:bg-[#FF5C39] hover:text-[#0F0B24]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold text-[#CDB9FF]">
              {col.title}
            </h3>

            <ul className="mt-4 space-y-2.5">
              {col.links.map(([label, to]) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-white/70 transition hover:text-white hover:underline hover:decoration-[#FF5C39] hover:decoration-2 hover:underline-offset-4"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-bold text-[#CDB9FF]">
            Stay updated
          </h3>

          <p className="mt-4 text-sm text-white/60">
            New arrivals and updates, straight to your inbox.
          </p>

          {joined ? (
            <p className="mt-3 text-sm font-semibold text-white">
              You're in. Watch your inbox.
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="mt-3 flex flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                aria-label="Email address"
                className="h-11 min-w-0 w-full flex-1 rounded-full border border-white/15 bg-white/10 px-4 text-base text-white outline-none placeholder:text-white/40 focus:border-[#CDB9FF] focus:ring-4 focus:ring-[#CDB9FF]/20 sm:w-auto"
              />

              <button
                type="submit"
                className={`h-11 w-full shrink-0 rounded-full px-5 text-sm sm:w-auto ${gradientBtn}`}
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {currentYear} GenZVibe. All rights reserved.</p>

          <div className="flex gap-5">
            <Link to="/return" className="transition hover:text-white">
              Return policy
            </Link>

            <Link to="/disclaimer" className="transition hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;