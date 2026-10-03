// import React, {useState, useContext} from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { AuthContext } from "../context/Authcontext";


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       });
//       const data = await res.json();
//       if (res.ok) {
//         login(data);
//         navigate('/');
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form onSubmit={handleSubmit} className="auth-form">
//         <h2>Login</h2>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit" className="btn">Login</button>
//         <p>Don't have an account? <Link to="/register">Signup</Link></p>
//       </form>
//     </div>
//   );
// };

// export default Login;




import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data);
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f5] px-4 py-4 sm:px-6">

      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-5xl items-center justify-center">

        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-[0_15px_50px_rgba(0,0,0,0.10)] lg:grid-cols-2">

          {/* LEFT - SHOPPING VISUAL */}
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[570px]">

            <img
              src="/images/login-shopping.jpg"
              alt="GenZVibe shopping"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Only subtle dark gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Logo */}
            <div className="absolute left-7 top-6 z-10">
              <Link
                to="/"
                className="text-2xl font-black tracking-tight text-white"
              >
                GenZ
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Vibe
                </span>
              </Link>
            </div>

            {/* Shopping Text */}
            <div className="absolute bottom-8 left-7 right-7 z-10">

              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                Welcome back
              </p>

              <h1 className="max-w-sm text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-[44px]">
                Your vibe.
                <span className="block">
                  Your style.
                </span>
              </h1>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
                Discover products that match your style,
                personality and everyday vibe.
              </p>

            </div>
          </div>

          {/* RIGHT - LOGIN FORM */}
          <div className="flex items-center justify-center px-7 py-9 sm:px-10 lg:px-14">

            <div className="w-full max-w-sm">

              {/* Mobile Logo */}
              <div className="mb-7 lg:hidden">
                <Link
                  to="/"
                  className="text-2xl font-black tracking-tight text-gray-900"
                >
                  GenZ
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Vibe
                  </span>
                </Link>
              </div>

              {/* Heading */}
              <div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-600">
                  Sign in
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-900">
                  Good to see you.
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Enter your details to continue to your account.
                </p>

              </div>

              {/* Login Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-purple-300 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Password
                  </label>

                  <div className="relative">

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 pr-16 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-purple-300 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-purple-600 transition hover:text-pink-500"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>

                  </div>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-sm font-bold text-white shadow-lg shadow-purple-500/20 transition duration-200 hover:scale-[1.01] hover:shadow-purple-500/30 active:scale-[0.99]"
                >
                  Login
                </button>

              </form>

              {/* Signup */}
              <p className="mt-7 text-center text-sm text-gray-500">
                New to GenZVibe?{" "}
                <Link
                  to="/register"
                  className="font-bold text-purple-600 transition hover:text-pink-500"
                >
                  Create an account
                </Link>
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;