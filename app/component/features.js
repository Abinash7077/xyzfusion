'use client';
import { FiTarget } from "react-icons/fi";
import { MdMyLocation } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import {motion,useInView} from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "../../utils/utils";
export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section className="bg-white py-24">
      <div ref={ref} className="px-10 mx-auto grid md:grid-cols-3 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.5, delay: 0.7}}
          className="flex items-start gap-6 "
        >
          <div className="w-20 min-w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-white text-2xl">
            <FiTarget className="w-20 h-10" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-slate-900 mb-2">
            <Typewriter play={isInView} text="Single Source of Truth" />
            </h3>
            <p className="text-slate-500 text-justify">
             <Typewriter play={isInView} text="Consolidate data from multiple systems into one unified, accurate,
              and trusted source for your entire organization." />
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-start gap-6"
        >
          <div className="w-20 min-w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl">
            <MdMyLocation className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-slate-900 mb-2">
              <Typewriter play={isInView} text="Enterprise-Grade Security" />
            </h3>
            <p className="text-slate-500 text-justify">
             <Typewriter play={isInView} text="Protect sensitive business data with advanced security, role-based
              access, and full compliance with industry regulations." />
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex items-start gap-6"
        >
          <div className="w-20 min-w-20 h-20 rounded-full bg-orange-400 flex items-center justify-center text-white text-2xl">
            <FiLock className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-slate-900 mb-2">
              <Typewriter play={isInView} text="Real-Time Data Sync" />
            </h3>
            <p className="text-slate-500 text-justify">
             <Typewriter play={isInView}   text="Keep your data current across all systems with automated
              synchronization and instant updates enterprise-wide." />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
