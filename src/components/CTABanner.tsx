export default function CTABanner() {
  return (
    <section className="bg-[#F0EEF0] py-8 lg:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[rgba(87,18,68,1)] rounded-xl py-10 px-8 lg:px-12 flex flex-col items-center text-center gap-5">
          <p className="text-white text-base font-medium leading-relaxed">
            Want to accelerate professional growth and development at your organisation?{" "}
            <span className="block">See how we can help.</span>
          </p>
          <a
            href="#"
            className="border-[1.5px] border-white text-[rgba(87,18,68,1)] bg-white rounded-lg px-7 py-2.5 text-sm font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[rgba(87,18,68,1)]"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
