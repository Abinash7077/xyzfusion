"use client";

import {
  FiBarChart2,
  FiStar,
  FiRefreshCw,
  FiSliders,
  FiBell,
} from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

export default function Quality() {
  return (
    <section className="bg-white py-10">
      <div className="px-10 mx-auto text-center">
        <h2 className="text-[45px] font-bold text-slate-900 mb-4">
          Comprehensive Features for <span className="text-cyan-400">Enterprise</span>  <br /> <span className="text-blue-400">Data Management</span> 
        </h2>

        <p className="text-slate-500 max-w-2xl mx-auto mb-20">
          Powerful capabilities designed to govern, unify, and optimize
          enterprise data across your entire organization.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-15 ">
          <Feature
            icon={<FiBarChart2 />}
            title="Master Data Governance"
            desc="Establish enterprise-wide data governance policies with automated workflows, stewardship assignments, and compliance tracking."
          />

          <Feature
            icon={<FiStar />}
            title="Data Quality Management"
            desc="Ensure pristine data quality with automated validation, standardization, deduplication, and enrichment capabilities."
          />

          <Feature
            icon={<FiRefreshCw />}
            title="Multi-System Integration"
            desc="Seamlessly integrate with ERP, CRM, e-commerce platforms, and legacy systems through 200+ pre-built connectors and APIs."
          />

          <Feature
            icon={<FaRocket />}
            title="High Performance & Scalability"
            desc="Built on modern cloud architecture to handle millions of records with sub-second response times and unlimited scalability."
          />

          <Feature
            icon={<FiSliders />}
            title="Fully Customizable Workflows"
            desc="Configure data models, approval processes, and business rules to match your unique organizational requirements."
          />

          <Feature
            icon={<FiBell />}
            title="Intelligent Data Monitoring"
            desc="AI-powered anomaly detection, automated alerts, and proactive data quality monitoring keep your data healthy 24/7."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="text-left hover:border-[1px] hover:border-gray-100 hover:scale-3d hover:shadow-2xl hover  transition p-5 rounded-2xl">
      <div className="text-indigo-600 text-2xl mb-6">
        <span className="inline-flex items-center justify-center bg-blue-600/20 backdrop-blur-md p-4 rounded-xl">
          {icon}
        </span>
      </div>

      <h3 className="text-2xl font-semibold text-slate-900 mb-3">{title}</h3>

      <p className="text-slate-500  leading-relaxed">{desc}</p>
    </div>
  );
}
