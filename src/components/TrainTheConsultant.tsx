const features = [
  {
    title: "Expert-Led Learning",
    body: "Learn directly from seasoned professionals in business analysis, gaining mentorship and real-world insights to sharpen your consulting edge.",
  },
  {
    title: "Interactive Workshops",
    body: "Engage in hands-on workshops designed to enhance your training capabilities and simulate real consulting scenarios.",
  },
  {
    title: "Comprehensive Curriculum",
    body: "A robust curriculum covering fundamental principles through advanced methodologies, ensuring well-rounded consultant development.",
  },
  {
    title: "Global Recognition",
    body: "Earn a globally recognised certification that opens new career opportunities and validates your expertise to clients worldwide.",
  },
];

export default function TrainTheConsultant() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top text */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Training The Consultant
        </h2>
        <p className="text-[#e8533a] italic text-sm sm:text-base mb-4">
          Maximise Your Potential as a Certified Trainer:
        </p>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
          Our Training Consultants program is designed to transform aspiring professionals into certified training consultants. Learn from industry professionals through a thorough curriculum, interactive workshops, and hands-on experience mentoring others in career advancement.
        </p>

        {/* Dark feature card — 2×2 grid */}
        <div className="bg-[#4a0e3f] rounded-2xl p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className="font-bold text-white text-base sm:text-lg mb-2">{f.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        {/* Outlined CTA */}
        <a
          href="#"
          className="inline-flex items-center gap-1 border border-[#4a0e3f] text-[#4a0e3f] rounded-[4px] px-6 py-2.5 text-sm font-medium hover:bg-[#4a0e3f] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#4a0e3f] focus:ring-offset-2"
        >
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
}
