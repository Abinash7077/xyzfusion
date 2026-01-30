"use client";

import { FiRocket, FiLayers, FiGlobe } from "react-icons/fi";
import { FaRocket} from "react-icons/fa";

export default function ScalesWithBusinessLight() {
  return (
    <section className="bg-white py-20">
      <div className="px-10 mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Scales with <span className="text-blue-600">Your Business</span>
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            From ambitious startups to Fortune 500 enterprises, XYZFusion grows
            with you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">

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

        {/* Trust text */}
        <p className="text-center text-slate-400 text-sm">
          Trusted by data-driven organizations worldwide
        </p>

      </div>
    </section>
  );
}

function Card({ icon, title, desc, points }) {
  return (
    <div className="text-left hover:border-[1px] hover:border-gray-100 hover:scale-3d hover:shadow-2xl hover  transition p-5 rounded-2xl">

      <div className="text-indigo-600 text-2xl mb-6">
        <span className="inline-flex items-center justify-center bg-blue-600/20 backdrop-blur-md p-4 rounded-xl">
          {icon}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-slate-900 mb-3">
        {title}
      </h3>

      <p className="text-slate-500 mb-6">
        {desc}
      </p>

      <ul className="space-y-2 text-slate-600 text-sm">
        {points.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-800 rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
