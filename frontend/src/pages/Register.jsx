// import React, { useContext, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { AuthContext } from "../context/Authcontext";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         alert(
//           "Registraion Sucessful! Please check your Email for the Welcome OTP",
//         );
//         login(data);
//         navigate("/");
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form onSubmit={handleSubmit} className="auth-from">
//         <h2>Register</h2>
//         <input
//           type="text"
//           placeholder=" Enter Your Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder=" Enter Your Valid Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder=" Enter your Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit" className="btn">
//           Singup
//         </button>
//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;











import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(
          "Registration Successful! Please check your Email for the Welcome OTP"
        );

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
    <div className="min-h-screen bg-gradient-to-br from-[#fff7fb] via-[#f7f5ff] to-[#eef5ff] px-4 py-4 sm:px-6">

      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-5xl items-center justify-center">

        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-[0_15px_50px_rgba(91,72,160,0.15)] lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[570px]">

            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/videos/register.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/55 via-[#ec4899]/35 to-[#2563eb]/55" /> */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

            {/* Logo */}
            <div className="absolute left-7 top-6 z-10">
              <Link
                to="/"
                className="text-2xl font-black tracking-tight text-white"
              >
                GenZ
                <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                  Vibe
                </span>
              </Link>
            </div>

            {/* Text */}
            <div className="absolute bottom-7 left-7 right-7 z-10">

              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/75">
                Discover your style
              </p>

              <h1 className="max-w-sm text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-[42px]">
                Your vibe.
                <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                  Your style.
                </span>
              </h1>

              <p className="mt-3 max-w-sm text-xs leading-5 text-white/75">
                Discover products that match your style,
                personality and everyday vibe.
              </p>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center px-7 py-8 sm:px-10 lg:px-12">

            <div className="w-full max-w-sm">

              {/* Mobile Logo */}
              <div className="mb-6 lg:hidden">
                <Link
                  to="/"
                  className="text-2xl font-black tracking-tight"
                >
                  GenZ
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Vibe
                  </span>
                </Link>
              </div>

              {/* Heading */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-600">
                  Create account
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-900">
                  Join GenZVibe.
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Create your account and start shopping.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-semibold text-gray-800"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-purple-300 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold text-gray-800"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-purple-300 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-1.5 block text-sm font-semibold text-gray-800"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 pr-16 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-purple-300 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-purple-600 hover:text-purple-800"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="mt-1 h-11 w-full rounded-xl bg-gradient-to-r from-[#ec4899] via-[#8b5cf6] to-[#3b82f6] text-sm font-bold text-white shadow-lg shadow-purple-500/20 transition duration-200 hover:scale-[1.01] hover:shadow-purple-500/30 active:scale-[0.99]"
                >
                  Create Account
                </button>

              </form>

              {/* Login */}
              <p className="mt-5 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-bold text-purple-600 transition hover:text-pink-500"
                >
                  Login
                </Link>
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
