"use client";

import { LuQuote } from "react-icons/lu";

export default function Testimonials() {
  return (
    <section className="bg-white py-10">
      <div className=" mx-auto px-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Loved by <span className="text-blue-600">Data Leaders</span>
          </h2>

          <p className="text-slate-400">
            See what industry leaders are saying about XYZFusion
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          <Card
            text="XYZFusion transformed our data management in just 10 days. What would have taken us 18 months with traditional MDM solutions was done in under two weeks."
            name="Sarah Chen"
            role="CTO, TechVentures Inc."
            initials="SC"
          />

          <Card
            text="The AI-powered data stewardship is a game-changer. Our data quality improved by 85% within the first month, and we reduced manual data work by 90%."
            name="Michael Rodriguez"
            role="VP of Data, Global Retail Corp"
            initials="MR"
          />

          <Card
            text="Finally, an MDM solution that understands modern enterprises. The implementation was smooth, the support was excellent, and the ROI was immediate."
            name="Emma Thompson"
            role="Chief Data Officer, FinanceFirst Bank"
            initials="ET"
          />

          <Card
            text="We evaluated 5 MDM vendors before choosing XYZFusion. The speed of implementation and AI capabilities put them miles ahead of the competition."
            name="David Park"
            role="Director of IT, Manufacturing Plus"
            initials="DP"
          />

          <Card
            text="XYZFusion's platform is intuitive and powerful. Our team was productive from day one, and the ongoing AI improvements keep making it better."
            name="Lisa Anderson"
            role="Data Governance Lead, HealthCare Solutions"
            initials="LA"
          />

          <Card
            text="The best investment we made this year. XYZFusion helped us unify customer data across 12 systems in record time. Highly recommended."
            name="James Wilson"
            role="CEO, E-Commerce Dynamics"
            initials="JW"
          />

        </div>

      </div>
    </section>
  );
}

function Card({ text, name, role, initials }) {
  return (
    <div className="text-left hover:border-[1px] hover:border-gray-100 hover:scale-3d hover:shadow-2xl hover  transition p-5 rounded-2xl">

      <LuQuote className="text-blue-600 text-2xl mb-4" />

      <p className="text-slate-500 text-sm leading-relaxed mb-6">
        "{text}"
      </p>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-blue-600/20 text-blue-600 flex items-center justify-center text-xs">
          {initials}
        </div>

        <div>
          <p className="text-slate-900 text-sm font-medium">{name}</p>
          <p className="text-slate-500 text-xs">{role}</p>
        </div>
      </div>

    </div>
  );
}
