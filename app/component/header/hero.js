"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        ref={ref}
        className="max-w-8xl mx-auto px-5 md:px-10 pt-28 md:pt-40 pb-16 md:pb-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 md:mt-10"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 leading-snug md:leading-tight mb-4 md:mb-8">
            Transform Your Enterprise Data into Your Most Valuable Strategic
            Asset
          </h1>

          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-3xl mb-8 md:mb-12 leading-relaxed">
            XYZ Fusion delivers comprehensive Master Data Management solutions
            that create a single source of truth across your organization.
            Streamline operations, ensure compliance, and drive data-driven
            decision making with our enterprise-grade MDM platform.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 1 : 30 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6"
          >
            <button className="bg-blue-600 hover:bg-indigo-700 text-white px-6 md:px-7 py-3 rounded-full font-medium transition text-sm md:text-base w-fit">
              Get Started Free →
            </button>

            <div className="text-center sm:text-left">
              <p className="font-semibold text-slate-900 text-sm md:text-base">
                📞 Schedule a Consultation
              </p>
              <p className="text-slate-500 text-xs md:text-sm">
                Talk to our MDM experts today
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center lg:justify-end mt-6 lg:mt-0"
        >
          {/* BLUE BLOB – RESPONSIVE FIX */}
          <div
            className="
              absolute 
              hidden sm:block        /* ❗HIDE ON MOBILE */
              sm:w-[420px] sm:h-[420px] sm:top-[-40%] sm:right-[-10%]
              md:w-[560px] md:h-[600px] md:top-[-70%] md:right-[-15%]
              lg:w-[730px] lg:h-[750px] lg:top-[-100%] lg:right-[-20%]
              bg-[#5d5ddf] rounded-full
            "
          ></div>

          <motion.img
            src="/Images/undraw_google-docs_fwhy.svg"
            alt="hero"
            className="relative z-10 w-[240px] sm:w-[320px] md:w-[420px] lg:w-[450px] object-contain"
            animate={{
              y: [0, -16, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* YELLOW SHAPE – ALSO RESPONSIVE */}
          <motion.div
            className="
              absolute 
              hidden sm:block
              sm:left-2 sm:top-16 sm:w-12 sm:h-12
              md:left-10 md:top-40 md:w-24 md:h-24
              bg-yellow-400 rounded-tr-full
            "
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
