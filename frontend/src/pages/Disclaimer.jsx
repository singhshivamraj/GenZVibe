import React from "react";
import {
  Info,
  ShoppingBag,
  Check,
  AlertTriangle,
} from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-100 bg-white px-4 py-2 text-sm font-medium text-amber-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              GenZVibe Information
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Disclaimer
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              This disclaimer explains the purpose of the information
              available on GenZVibe and the limitations you should
              understand while using our website.
            </p>

          </div>
        </div>
      </section>


      {/* Quick Summary */}
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Information */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Info className="h-5 w-5" />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Information
            </p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              General
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Information is provided for general purposes.
            </p>
          </div>


          {/* Products */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <ShoppingBag className="h-5 w-5" />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Products
            </p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              Details
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Product information may change over time.
            </p>
          </div>


          {/* Accuracy */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Check className="h-5 w-5" />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Accuracy
            </p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              Best Effort
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              We aim to keep information accurate and updated.
            </p>
          </div>


          {/* Responsibility */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
              <AlertTriangle className="h-5 w-5" />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Responsibility
            </p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              User Decision
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Users should verify important information before acting.
            </p>
          </div>

        </div>
      </section>


      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

          {/* Left Content */}
          <div className="space-y-8">

            {/* General Disclaimer */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 font-semibold text-amber-600">
                  01
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-950">
                    General Disclaimer
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    The information provided on GenZVibe is intended for
                    general informational and shopping purposes. While we
                    make reasonable efforts to keep the information
                    accurate and up to date, we do not guarantee that
                    all information will always be complete, accurate,
                    or current.
                  </p>
                </div>

              </div>
            </div>


            {/* Product Information */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-semibold text-blue-600">
                  02
                </div>

                <div className="flex-1">

                  <h2 className="text-2xl font-bold text-slate-950">
                    Product Information
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Product names, descriptions, images, prices,
                    availability, specifications, and other details
                    displayed on GenZVibe are provided for informational
                    purposes and may change without prior notice.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Product images may appear slightly different depending on your device or display.",
                      "Prices and availability may change from time to time.",
                      "Product specifications may be updated by manufacturers.",
                      "We recommend reviewing the product details before placing an order.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />

                        <p className="text-sm leading-6 text-slate-600">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>


            {/* Pricing */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 font-semibold text-emerald-600">
                  03
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-slate-950">
                    Pricing & Availability
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    We try to display accurate prices and product
                    availability on GenZVibe. However, errors or
                    unexpected changes may occasionally occur.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    GenZVibe reserves the right to correct pricing,
                    product information, availability, or other
                    website information when necessary.
                  </p>

                </div>
              </div>
            </div>


            {/* Third Party */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 font-semibold text-violet-600">
                  04
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-slate-950">
                    Third-Party Services
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    GenZVibe may use or link to third-party services,
                    payment providers, delivery services, or external
                    websites. We are not responsible for the content,
                    availability, policies, or practices of third-party
                    services.
                  </p>

                </div>
              </div>
            </div>


            {/* Website Availability */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 font-semibold text-rose-600">
                  05
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-slate-950">
                    Website Availability
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    We aim to keep GenZVibe available and functioning
                    properly. However, temporary interruptions may
                    occur due to maintenance, technical issues,
                    network problems, or circumstances outside our
                    control.
                  </p>

                </div>
              </div>
            </div>


            {/* Limitation */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 font-semibold text-slate-600">
                  06
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-slate-950">
                    Limitation of Responsibility
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    GenZVibe is not responsible for losses or damages
                    resulting from reliance on information available
                    on the website, except where such responsibility
                    cannot legally be excluded.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Users are responsible for reviewing relevant
                    information and making appropriate decisions before
                    completing a purchase or using any service.
                  </p>

                </div>
              </div>
            </div>

          </div>


          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">

            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-amber-600 shadow-sm">
                <Info className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Important information
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Product information, pricing, availability, and other
                website details may change from time to time.
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Please review the information available at the time
                of purchase.
              </p>

            </div>


            <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              <h3 className="font-semibold text-slate-900">
                Quick information
              </h3>

              <div className="mt-5 space-y-4">

                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-slate-500">
                    Information
                  </span>

                  <span className="font-medium text-slate-900">
                    General
                  </span>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-slate-500">
                    Prices
                  </span>

                  <span className="font-medium text-slate-900">
                    Subject to change
                  </span>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-slate-500">
                    Availability
                  </span>

                  <span className="font-medium text-slate-900">
                    May vary
                  </span>
                </div>

              </div>
            </div>

          </aside>

        </div>
      </section>


      {/* Final Notice */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 text-center shadow-sm sm:p-12">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
              <Check className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-950 sm:text-3xl">
              By using GenZVibe, you acknowledge this disclaimer
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              We aim to provide a reliable and transparent shopping
              experience. Please review our other policies for more
              information about purchases, returns, and the use of
              GenZVibe.
            </p>

          </div>

        </div>
      </section>


      {/* Bottom Note */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center lg:px-8">
          <p className="text-sm text-slate-500">
            GenZVibe Disclaimer · Last updated 2026
          </p>
        </div>
      </div>

    </div>
  );
};

export default Disclaimer;