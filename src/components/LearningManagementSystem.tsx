import Image from "next/image";

export default function LearningManagementSystem() {
  return (
    <section className="bg-[#ede3f0] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Circular image — no border, no shadow */}
        <div className="shrink-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
          <Image
            src="/img/learning_mangement.jpg"
            alt="Two professionals in business attire"
            width={384}
            height={384}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4a0e3f] mb-5">
            Learning Management System
          </h2>
          <div className="bg-[#e8d5f0] rounded-2xl p-6">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              TG Academy offers a robust learning management system featuring technical courses in programming languages, software development, and emerging technologies, alongside soft skills training in leadership, communication, and project management — empowering professionals at every stage of their career.
            </p>
            <p className="font-bold text-[#4a0e3f] mb-3 text-sm sm:text-base">
              Some of our courses include:
            </p>
            <ul className="flex flex-col gap-1.5">
              {[["Business Analysis", "Design Thinking", "Effective Communication"], ["Entrepreneurship", "Career Development", "Business Model"]].map((row, i) => (
                <li key={i} className="flex flex-wrap gap-x-4 gap-y-1">
                  {row.map((course) => (
                    <span key={course} className="flex items-center gap-1 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0" />
                      {course}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 mt-5 bg-[#4a0e3f] text-white rounded-[4px] px-6 py-2.5 text-sm font-medium hover:bg-[#3b0a35] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4a0e3f] focus:ring-offset-2"
          >
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
