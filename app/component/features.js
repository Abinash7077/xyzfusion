import { FiTarget } from "react-icons/fi";
import { MdMyLocation } from "react-icons/md";
import { FiLock } from "react-icons/fi";

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="px-10 mx-auto grid md:grid-cols-3 gap-16">
        <div className="flex items-start gap-6">
          <div className="w-20 min-w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-white text-2xl">
            <FiTarget className="w-20 h-10" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-slate-900 mb-2">
              Single Source of Truth
            </h3>
            <p className="text-slate-500 text-justify">
              Consolidate data from multiple systems into one unified, accurate,
              and trusted source for your entire organization.{" "}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="w-20 min-w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl">
            <MdMyLocation className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-slate-900 mb-2">
              Enterprise-Grade Security
            </h3>
            <p className="text-slate-500 text-justify">
              Protect sensitive business data with advanced security, role-based
              access, and full compliance with industry regulations.{" "}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="w-20 min-w-20 h-20 rounded-full bg-orange-400 flex items-center justify-center text-white text-2xl">
            <FiLock className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-slate-900 mb-2">
              Real-Time Data Sync
            </h3>
            <p className="text-slate-500 text-justify">
              Keep your data current across all systems with automated
              synchronization and instant updates enterprise-wide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
