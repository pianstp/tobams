import Image from "next/image";

const features = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export default function TransformationHub() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating blush card */}
        <div className="bg-[#fce8f3] rounded-3xl p-8 lg:p-12">
          {/* Top text block — single column */}
          <p className="text-[#4a0e3f] italic text-sm mb-1">Learning With Our CEO:</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
            A flagship webinar series curated by Dr. Jite Newton, designed to elevate career trajectories and leadership capabilities. Gain exclusive insights and strategies for personal and professional growth from industry-leading experts.
          </p>

          {/* Bottom two-column block */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: image */}
            <div className="lg:w-5/12 relative h-64 sm:h-80 lg:h-[340px] rounded-xl overflow-hidden shrink-0">
              <Image
                src="/img/learning_with_ceo.jpg"
                alt="Woman in orange coat standing in front of glowing digital screens"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: 2×3 chip grid + CTA */}
            <div className="flex-1 flex flex-col justify-between gap-6">
              <div className="grid grid-cols-2 gap-3">
                {features.map((f) => (
                  <div
                    key={f}
                    className="bg-white rounded-lg px-4 py-3 flex items-center gap-2 text-sm text-gray-800 shadow-sm"
                  >
                    <svg className="w-4 h-4 shrink-0 text-[rgba(29,6,23,1)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" /></svg>
                    {f}
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="self-start inline-flex items-center gap-1 bg-[#4a0e3f] text-white rounded-[4px] px-6 py-2.5 text-sm font-medium hover:bg-[#3b0a35] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4a0e3f] focus:ring-offset-2"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
