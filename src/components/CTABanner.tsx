export default function CTABanner() {
  return (
    <section className="bg-white py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4a0e3f] border border-[#7c6fcd] rounded-2xl py-14 lg:py-20 px-6 flex flex-col items-center text-center gap-6">
          <p className="text-white text-base sm:text-lg leading-relaxed max-w-2xl">
            Want to accelerate professional growth and development at your organisation?{" "}
            <span className="block mt-1">See how we can help.</span>
          </p>
          <a
            href="#"
            className="border border-white text-white rounded-[4px] px-8 py-3 text-sm font-medium hover:bg-white hover:text-[#4a0e3f] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4a0e3f]"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
