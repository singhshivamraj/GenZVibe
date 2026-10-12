
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