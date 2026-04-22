export default function PreFooterCTA() {
  return (
    <section className="bg-[#1a0a1a] py-12 lg:py-16 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-gray-400 text-sm mb-2">Ready to be a part of something extraordinary?</p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            Let&apos;s work together to create a difference
          </h2>
        </div>
        <a
          href="#"
          className="shrink-0 bg-[#4a0e3f] text-white rounded-[4px] px-8 py-3 text-sm font-semibold hover:bg-[#3b0a35] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4a0e3f] focus:ring-offset-2 focus:ring-offset-[#1a0a1a]"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
