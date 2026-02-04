"use client";

import { FiRocket, FiLayers, FiGlobe } from "react-icons/fi";
import { FaRocket} from "react-icons/fa";

export default function BusinessScale() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto px-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Scales with <span className="text-blue-600">Your Business</span>
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto text-sm">
            From ambitious startups to Fortune 500 enterprises, XYZFusion grows with you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">

          <Card
            icon={<FaRocket />}
            title="Startups & SMEs"
            desc="Get enterprise-grade MDM without the enterprise complexity. Start small, scale fast."
            points={[
              "Quick deployment",
              "Pay as you grow",
              "No IT overhead"
            ]}
          />

          <Card
            icon={<FiLayers />}
            title="Mid-Market"
            desc="Bridge the gap between spreadsheets and legacy systems with modern data management."
            points={[
              "Seamless integrations",
              "Team collaboration",
              "Custom workflows"
            ]}
          />

          <Card
            icon={<FiGlobe />}
            title="Global Enterprises"
            desc="Unified master data across regions, subsidiaries, and business units worldwide."
            points={[
              "Multi-region support",
              "Compliance ready",
              "Dedicated success team"
            ]}
          />

        </div>

        {/* Trust Logos */}
        <p className="text-center text-slate-500 text-xs mb-6">
          Trusted by data-driven organizations worldwide
        </p>

        <div className="flex flex-wrap justify-center gap-10 text-slate-600 text-sm">
          <span>TechCorp</span>
          <span>DataFlow</span>
          <span>CloudNine</span>
          <span>InnovateCo</span>
          <span>ScaleUp</span>
        </div>

      </div>
    </section>
  );
}

function Card({ icon, title, desc, points }) {
  return (
    <div className="text-left hover:border-[1px] hover:border-gray-100 hover:scale-3d hover:shadow-2xl hover  transition p-5 rounded-2xl">

      <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-6">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-black mb-3">
        {title}
      </h3>

      <p className="text-slate-500 text-sm mb-5">
        {desc}
      </p>

      <ul className="space-y-2 text-slate-500 text-sm">
        {points.map((p, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            {p}
          </li>
        ))}
      </ul>

    </div>
  );
}
