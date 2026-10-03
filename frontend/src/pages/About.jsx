




import React from "react";
import {
  ShoppingBag,
  ShoppingCart,
  LockKeyhole,
  Package,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
              About GenZVibe
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Building a better way to
              <span className="block text-gray-500">
                shop online.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              GenZVibe is a full-stack e-commerce project created by
              Shivam Raj, focused on building a clean, modern and
              user-friendly shopping experience.
            </p>

          </div>
        </div>
      </section>


      {/* Developer + Project */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* About Shivam */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              The Developer
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Hi, I'm Shivam Raj.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              I'm a Computer Science student and an aspiring Full Stack
              Developer who enjoys turning ideas into real web applications.
            </p>

            <p className="mt-4 leading-7 text-gray-500">
              I built GenZVibe as a practical project to understand how
              a complete e-commerce application works — from creating
              a responsive frontend to building APIs, authentication,
              database operations and order management on the backend.
            </p>

            <p className="mt-4 leading-7 text-gray-500">
              I'm continuously learning and improving my development
              skills by building real-world projects and solving
              practical problems.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "JavaScript",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>


          {/* Developer Card */}
          <div className="relative">

            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gray-100 blur-2xl" />

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-200/50">

              <div className="flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-900 text-xl font-bold text-white">
                  SR
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Shivam Raj
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Full Stack Developer
                  </p>
                </div>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-2xl font-bold text-gray-900">
                    MERN
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Full Stack
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-2xl font-bold text-gray-900">
                    React
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Frontend
                  </p>
                </div>

              </div>

              <div className="mt-4 rounded-2xl bg-gray-50 p-5">
                <p className="text-sm leading-6 text-gray-600">
                  Focused on creating responsive interfaces and
                  practical full-stack applications.
                </p>
              </div>

            </div>
          </div>

        </div>

      </section>


      {/* GenZVibe */}
      <section className="border-y border-gray-100 bg-gray-50">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              The Project
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              What is GenZVibe?
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              GenZVibe is designed as a complete e-commerce experience
              where users can discover products, view product details,
              manage their cart, authenticate their account and place
              orders.
            </p>

          </div>


          {/* Feature Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Product Discovery */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                <ShoppingBag className="h-5 w-5" />
              </div>

              <h3 className="mt-5 font-semibold text-gray-900">
                Product Discovery
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Browse products and explore detailed product information.
              </p>

            </div>


            {/* Smart Cart */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                <ShoppingCart className="h-5 w-5" />
              </div>

              <h3 className="mt-5 font-semibold text-gray-900">
                Smart Cart
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Add products and manage selected items before checkout.
              </p>

            </div>


            {/* Authentication */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                <LockKeyhole className="h-5 w-5" />
              </div>

              <h3 className="mt-5 font-semibold text-gray-900">
                Authentication
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Secure registration, login and protected user features.
              </p>

            </div>


            {/* Order Management */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                <Package className="h-5 w-5" />
              </div>

              <h3 className="mt-5 font-semibold text-gray-900">
                Order Management
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Handle orders and keep important order information organized.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Technology */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Technology
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Built with modern technologies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
            GenZVibe combines a modern frontend with a powerful backend
            to create a complete full-stack application.
          </p>

        </div>


        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">

          {[
            ["MongoDB", "Database"],
            ["Express", "Backend"],
            ["React", "Frontend"],
            ["Node.js", "Runtime"],
          ].map(([name, type]) => (
            <div
              key={name}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-bold text-gray-900">
                {name}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {type}
              </p>
            </div>
          ))}

        </div>

      </section>


      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">

        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white px-6 py-14 text-center shadow-sm sm:px-10">

          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Built with curiosity. Designed with purpose.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
            GenZVibe is part of my journey as a developer — learning,
            experimenting and turning ideas into working applications.
          </p>

        </div>

      </section>

    </div>
  );
};

export default About;