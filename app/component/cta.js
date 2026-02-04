export default function CTA() {
  return (
<section className="relative bg-blue-600 text-white overflow-hidden">
      <div className="mx-auto px-10 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Contact Sales
          </h2>

          <p className="text-gray-300 max-w-xl text-lg">
          All plans include: 30-day free trial • No credit card required • 
Cancel anytime • Free migration assistance
          </p>
        </div>

        <div className="md:flex md:justify-end">
          <button className="bg-white text-black font-semibold px-10 py-4 rounded-full hover:bg-indigo-50 transition">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
