"use client";

import {
  FiCpu,
  FiZap,
  FiShield,
  FiDatabase,
  FiGitMerge,
  FiBarChart2
} from "react-icons/fi";

export default function EnterpriseCapabilities() {
  return (
    <section className="relative bg-white py-28">
      <div className="px-10 mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Built for the <span className="text-cyan-400">Modern</span>{" "}
            <span className="text-blue-400">Enterprise</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Everything you need to manage, govern, and unlock the value of your
            master data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          <Card
            icon={<FiCpu />}
            title="AI Data Steward"
            desc="Intelligent automation that learns your data patterns and suggests improvements in real-time."
          />

          <Card
            icon={<FiZap />}
            title="Lightning Fast Setup"
            desc="Go live in days, not months. Our intuitive platform eliminates complex configurations."
          />

          <Card
            icon={<FiShield />}
            title="Enterprise Security"
            desc="SOC 2 Type II certified with end-to-end encryption and granular access controls."
          />

          <Card
            icon={<FiDatabase />}
            title="Unified Data Model"
            desc="Single source of truth across all your systems with automatic schema mapping."
          />

          <Card
            icon={<FiGitMerge />}
            title="Smart Matching"
            desc="ML-powered entity resolution that identifies and merges duplicate records with 99.9% accuracy."
          />

          <Card
            icon={<FiBarChart2 />}
            title="Real-time Analytics"
            desc="Live dashboards and data quality metrics to monitor your master data health."
          />

        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="text-left hover:border-[1px] hover:border-gray-100 hover:scale-3d hover:shadow-2xl hover  transition p-5 rounded-2xl">

      <div className="text-indigo-600 text-2xl mb-6">
        <span className="inline-flex items-center justify-center bg-blue-600/20 backdrop-blur-md p-4 rounded-xl">
          {icon}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-black mb-3">
        {title}
      </h3>

      <p className="text-slate-500 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
