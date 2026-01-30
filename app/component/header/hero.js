export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-8xl mx-auto px-10 pt-40 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-10">
            Transform Your Enterprise Data into Your Most Valuable Strategic
            Asset
          </h1>

          <p className="text-slate-500 text-lg max-w-3xl mb-15">
            XYZ Fusion delivers comprehensive Master Data Management solutions 
that create a single source of truth across your organization. 
Streamline operations, ensure compliance, and drive data-driven 
decision making with our enterprise-grade MDM platform.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-blue-600 hover:bg-indigo-700 text-white px-7 py-3 rounded-full font-medium transition">
              Get Started Free →
            </button>

            <div>
              <p className="font-semibold text-slate-900">
                📞 Schedule a Consultation
              </p>
              <p className="text-slate-500 text-sm">
                Talk to our MDM experts today
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute right-[-20%] top-[-100%]  w-[730px] h-[750px] bg-[#5d5ddf] rounded-full"></div>

          <img
            src="/Images/undraw_google-docs_fwhy.svg"
            alt="hero"
            className="relative z-10 w-[450px] object-contain"
          />

          <div className="absolute left-10 top-50 w-24 h-24 bg-yellow-400 rounded-tr-full"></div>
        </div>
      </div>
    </section>
  );
}
