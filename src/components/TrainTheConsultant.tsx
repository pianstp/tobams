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
    <section className="bg-[#F0EEF0] py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-[28px] font-semibold text-[#1A1A1A] mb-1">
          Training The Consultant
        </h2>

        {/* Eyebrow */}
        <p className="text-[#7C3A8C] italic text-sm mb-4">
          Maximise Your Potential as a Certified Trainer:
        </p>

        {/* Body */}
        <p className="text-[#555] text-sm leading-[1.7] mb-8">
          Our Training Consultants program is designed to transform aspiring professionals into certified training consultants. Learn from industry professionals through a thorough curriculum, interactive workshops, and hands-on experience mentoring others in career advancement.
        </p>

        {/* Feature card — 2×2 grid */}
        <div className="bg-[rgba(87,18,68,1)] rounded-xl p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-6">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className="font-bold text-white text-sm mb-1.5">{f.title}</h3>
              <p className="text-white/80 text-[13px] leading-[1.7]">{f.body}</p>
            </div>
          ))}
        </div>

        {/* Solid purple Learn More button */}
        <a
          href="#"
          className="inline-flex items-center gap-1.5 bg-[rgba(87,18,68,1)] text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-[#4a1859] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(87,18,68,1)] focus:ring-offset-2"
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
