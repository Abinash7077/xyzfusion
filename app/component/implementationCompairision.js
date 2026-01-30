"use client";

import { FiX, FiCheck } from "react-icons/fi";

export default function ImplementationComparison() {
  return (
    <section className="relative bg-white py-10 overflow-hidden">
      <div className="px-10 mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            <span className="text-cyan-400">Days</span> vs. <span className="text-blue-400">Years</span>
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto">
            Traditional MDM implementations take 12–24 months. We’ve changed
            that forever.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          {/* Traditional */}
          <div className="bg-[#0a1220] border border-white/10 rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-9 h-9 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
                <FiX />
              </span>
              <h3 className="text-xl font-semibold text-slate-200">
                Traditional MDM
              </h3>
            </div>

            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3"><FiX className="text-red-400 mt-1" />12–24 months implementation</li>
              <li className="flex gap-3"><FiX className="text-red-400 mt-1" />Millions in consulting fees</li>
              <li className="flex gap-3"><FiX className="text-red-400 mt-1" />Complex data modeling</li>
              <li className="flex gap-3"><FiX className="text-red-400 mt-1" />Rigid, inflexible architecture</li>
              <li className="flex gap-3"><FiX className="text-red-400 mt-1" />Manual data stewardship</li>
              <li className="flex gap-3"><FiX className="text-red-400 mt-1" />Difficult to maintain</li>
            </ul>
          </div>

          {/* XYZFusion */}
          <div className="bg-[#0a1220] border border-cyan-400/40 rounded-2xl p-10 shadow-[0_0_60px_rgba(34,211,238,0.15)]">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-9 h-9 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center">
                <FiCheck />
              </span>
              <h3 className="text-xl font-semibold text-white">
                XYZFusion
              </h3>
            </div>

            <ul className="space-y-4 text-slate-200">
              <li className="flex gap-3"><FiCheck className="text-cyan-400 mt-1" />Go live in 7–14 days</li>
              <li className="flex gap-3"><FiCheck className="text-cyan-400 mt-1" />Predictable, transparent pricing</li>
              <li className="flex gap-3"><FiCheck className="text-cyan-400 mt-1" />AI-powered auto-modeling</li>
              <li className="flex gap-3"><FiCheck className="text-cyan-400 mt-1" />Flexible, adaptable platform</li>
              <li className="flex gap-3"><FiCheck className="text-cyan-400 mt-1" />Intelligent automation</li>
              <li className="flex gap-3"><FiCheck className="text-cyan-400 mt-1" />Self-service and intuitive</li>
            </ul>
          </div>

        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between text-slate-500 text-sm mb-2">
            <span>Day 1</span>
            <span>Day 14</span>
          </div>

          <div className="h-2 rounded-full bg-white/10 relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          </div>

          <div className="flex justify-between mt-4 text-sm text-slate-500">
            <span>Connect</span>
            <span>Configure</span>
            <span>Validate</span>
            <span className="text-cyan-400 font-medium">Go Live ✓</span>
          </div>
        </div>

      </div>
    </section>
  );
}
