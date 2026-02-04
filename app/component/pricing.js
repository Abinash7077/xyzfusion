"use client";

import { FiCheck, FiArrowRight } from "react-icons/fi";

export default function Pricing() {
  return (
    <section className="bg-white py-10">
      <div className="px-10 mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Simple, <span className="text-blue-600">Transparent</span> Pricing
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto">
            No hidden fees. No surprise costs. Just predictable pricing that
            scales with your business.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Starter */}
          <Plan
            title="Starter"
            desc="Perfect for SMEs getting started with MDM"
            price="$499"
            features={[
              "Up to 100,000 records",
              "3 data domains",
              "AI data matching",
              "Basic integrations",
              "Email support",
              "7-day implementation"
            ]}
            button="Start Free Trial"
          />

          {/* Professional - Popular */}
          <Plan
            popular
            title="Professional"
            desc="For growing businesses with complex data needs"
            price="$1,499"
            features={[
              "Up to 1M records",
              "Unlimited data domains",
              "Advanced AI stewardship",
              "50+ integrations",
              "Priority support",
              "Custom workflows",
              "API access",
              "14-day implementation"
            ]}
            button="Start Free Trial"
          />

          {/* Enterprise */}
          <Plan
            title="Enterprise"
            desc="For global organizations with enterprise needs"
            price="Custom"
            features={[
              "Unlimited records",
              "Multi-tenant architecture",
              "Dedicated AI models",
              "Custom integrations",
              "24/7 dedicated support",
              "SLA guarantees",
              "On-prem option",
              "Dedicated success manager"
            ]}
            button="Contact Sales"
          />

        </div>

        <p className="text-center text-slate-500 text-sm mt-12">
          All plans include a 14-day free trial. No credit card required.
        </p>

      </div>
    </section>
  );
}

function Plan({ title, desc, price, features, button, popular }) {
  return (
    <div
      className={`relative rounded-2xl p-8 ${
        popular
          ? "border border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.2)]"
          : "border border-white/10"
      } bg-[#0a1220]`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-black text-xs px-3 py-1 rounded-full font-medium">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-slate-500 text-sm mb-6">
        {desc}
      </p>

      <div className="mb-6">
        <span className="text-3xl font-bold text-white">
          {price}
        </span>
        {price !== "Custom" && (
          <span className="text-slate-500 text-sm"> / month</span>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex gap-3 text-slate-300 text-sm">
            <FiCheck className="text-blue-600 mt-1" />
            {f}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 transition ${
          popular
            ? "bg-blue-600 text-black font-semibold hover:bg-blue-700"
            : "border border-blue-600/40 text-white hover:bg-blue-600/10"
        }`}
      >
        {button}
        <FiArrowRight />
      </button>
    </div>
  );
}
