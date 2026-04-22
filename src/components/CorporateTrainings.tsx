import Image from "next/image";
import BoltListItem from "./BoltListItem";

const items = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

export default function CorporateTrainings() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text */}
        <div className="flex-1 order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Corporate Trainings
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            We offer customized corporate training programs delivered by expert facilitators, providing tailored learning experiences that align with your organization&apos;s goals and drive measurable performance improvements.
          </p>
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <BoltListItem key={item} text={item} />
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="flex-1 order-1 lg:order-2 w-full">
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/img/cooperate_training.jpg"
              alt="Business meeting with a presenter at a screen and seated group"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
