import React from "react";
import {
  Undo2,
  Check,
  IndianRupee,
  Clock3,
  X,
  CircleHelp,
} from "lucide-react";

const Return = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">

          <div className="max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              GenZVibe Returns
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Returns made simple.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              We want you to feel confident when shopping with GenZVibe.
              If something doesn't work out, here's everything you need
              to know about returning your order.
            </p>

          </div>

        </div>
      </section>


      {/* Quick Summary */}
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Undo2 className="h-5 w-5" />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Return window
            </p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              30 Days
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              From the date of delivery.
            </p>
          </div>


          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Check className="h-5 w-5" />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Product condition
            </p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              Unused
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Original condition and packaging.
            </p>
          </div>


          {/* Card 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <IndianRupee className="h-5 w-5" />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Refund
            </p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              Original payment
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Refunds go back to your payment method.
            </p>
          </div>


          {/* Card 4 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Clock3 className="h-5 w-5" />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Processing
            </p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              5–7 Days
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              After the returned item is received.
            </p>
          </div>

        </div>

      </section>


      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

          {/* Left */}
          <div className="space-y-8">

            {/* Eligibility */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 font-semibold text-indigo-600">
                  01
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-950">
                    Return eligibility
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    To be eligible for a return, your product should meet
                    the following conditions.
                  </p>
                </div>

              </div>


              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {[
                  "Return requested within 30 days",
                  "Product is unused and in original condition",
                  "Original packaging is included",
                  "Proof of purchase is available",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

                    <p className="text-sm leading-6 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </div>


            {/* How it works */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

              <h2 className="text-2xl font-bold text-slate-950">
                How to return an item
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                The return process is designed to be simple and easy to follow.
              </p>


              <div className="mt-8 space-y-7">

                {[
                  {
                    number: "01",
                    title: "Request a return",
                    text: "Contact GenZVibe support with your order details and reason for the return.",
                  },
                  {
                    number: "02",
                    title: "Prepare your package",
                    text: "Pack the product safely with its original packaging and accessories.",
                  },
                  {
                    number: "03",
                    title: "Send the product",
                    text: "Follow the return instructions provided by our support team.",
                  },
                  {
                    number: "04",
                    title: "Receive your refund",
                    text: "Once the returned product is inspected and approved, your refund will be processed.",
                  },
                ].map((step, index) => (
                  <div
                    key={step.number}
                    className="relative flex gap-5"
                  >

                    {index !== 3 && (
                      <div className="absolute left-5 top-11 h-[calc(100%+1.5rem)] w-px bg-slate-200" />
                    )}

                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                      {step.number}
                    </div>

                    <div className="pb-2">
                      <h3 className="font-semibold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {step.text}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>


            {/* Non-returnable */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

              <h2 className="text-2xl font-bold text-slate-950">
                Items that may not be eligible
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Some products may have different return conditions.
              </p>


              <div className="mt-6 space-y-3">

                {[
                  "Products damaged after delivery due to customer handling",
                  "Used or altered products",
                  "Products without original packaging or accessories",
                  "Items marked as final sale",
                  "Personalized or customized products",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 p-4"
                  >
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />

                    <p className="text-sm leading-6 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </div>


            {/* Refund */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

              <h2 className="text-2xl font-bold text-slate-950">
                Refund information
              </h2>

              <div className="mt-6 space-y-5">

                <div>
                  <h3 className="font-semibold text-slate-900">
                    When will I receive my refund?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    After your returned product is received and inspected,
                    an approved refund will be initiated to the original
                    payment method.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    How will I receive it?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Refunds are processed using the original payment method
                    used for the order.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Right Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">

            <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm">
                <CircleHelp className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Need help?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                If you have questions about a return or refund, our support
                team can help you understand the next steps.
              </p>

              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Contact Support
              </button>

            </div>


            <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              <h3 className="font-semibold text-slate-900">
                Quick information
              </h3>

              <div className="mt-5 space-y-4">

                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-slate-500">
                    Return window
                  </span>

                  <span className="font-medium text-slate-900">
                    30 days
                  </span>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-slate-500">
                    Condition
                  </span>

                  <span className="font-medium text-slate-900">
                    Unused
                  </span>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-slate-500">
                    Refund method
                  </span>

                  <span className="font-medium text-slate-900">
                    Original payment
                  </span>
                </div>

              </div>

            </div>

          </aside>

        </div>

      </section>


      {/* FAQ */}
      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              FAQ
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Common questions
            </h2>

          </div>


          <div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">

            <div className="p-6 sm:p-7">
              <h3 className="font-semibold text-slate-900">
                Can I return a product after 30 days?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Returns are generally accepted within the stated return
                window. Some product categories may have different rules.
              </p>
            </div>


            <div className="p-6 sm:p-7">
              <h3 className="font-semibold text-slate-900">
                What if my product arrives damaged?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Contact GenZVibe support as soon as possible and provide
                your order details and relevant information about the damage.
              </p>
            </div>


            <div className="p-6 sm:p-7">
              <h3 className="font-semibold text-slate-900">
                Can I exchange an item?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Exchange availability can depend on the product and stock.
                Contact support to check the available options.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Footer note */}
      <div className="border-t border-slate-200 bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-8 text-center lg:px-8">

          <p className="text-sm text-slate-500">
            GenZVibe Return Policy · Last updated 2026
          </p>

        </div>

      </div>

    </div>
  );
};

export default Return;