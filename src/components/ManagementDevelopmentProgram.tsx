import Image from "next/image";

const features = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementDevelopmentProgram() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark card with padding on all sides */}
        <div className="bg-[#3b0a35] rounded-3xl p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
          {/* Image */}
          <div className="lg:w-5/12 relative h-64 sm:h-80 lg:h-auto min-h-[320px] rounded-2xl overflow-hidden shrink-0">
            <Image
              src="/img/management_dev.jpg"
              alt="Three professionals looking at a tablet together in a bright office"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center gap-5">
            {/* Heading outside the border box */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Management Development Program
            </h2>

            {/* Blue/purple outlined text box — no fill */}
            <div className="border border-[#7c6fcd] rounded-lg p-5">
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with high-performing leaders who can navigate complex business environments.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities to improve leadership, strategic thinking, communication, and managerial competencies.
              </p>
            </div>

            {/* Feature pills */}
            <ul className="flex flex-col gap-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 bg-white/10 rounded-[4px] px-5 py-2.5 text-white text-sm"
                >
                  <svg className="w-4 h-4 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" /></svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
