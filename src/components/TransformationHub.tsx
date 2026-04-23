import Image from "next/image";

const chips = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export default function TransformationHub() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAE8F2] rounded-2xl p-8 lg:p-10">
          {/* Eyebrow */}
          <p className="text-[#7C3A8C] italic text-sm mb-1">Learning With Our CEO:</p>

          {/* Heading */}
          <h2 className="text-2xl font-semibold italic text-[#3B1A4A] mb-4 leading-snug">
            Transformation Hub With Jite Newton
          </h2>

          {/* Body paragraph — full width */}
          <p className="text-[#555] text-sm leading-[1.7] mb-8">
            A flagship webinar series curated by Dr. Jite Newton, designed to elevate career trajectories and leadership capabilities. Gain exclusive insights and strategies for personal and professional growth from industry-leading experts in an engaging and interactive format.
          </p>

          {/* Two-column: image + chips */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: image */}
            <div className="lg:w-1/2 relative h-[220px] rounded-lg overflow-hidden shrink-0">
              <Image
                src="/img/learning_with_ceo.jpg"
                alt="Woman in a cinematic tech environment"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: 2×3 chip grid + button */}
            <div className="flex-1 flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-2">
                {chips.map((chip) => (
                  <div
                    key={chip}
                    className="bg-white border border-gray-200 rounded-lg px-3 py-2.5 flex items-center gap-2 text-[13px] text-[#1A1A1A]"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0 text-[rgba(87,18,68,1)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
                    </svg>
                    {chip}
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="self-start inline-flex items-center gap-1.5 bg-[rgba(87,18,68,1)] text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-[#4a1859] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(87,18,68,1)] focus:ring-offset-2"
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
