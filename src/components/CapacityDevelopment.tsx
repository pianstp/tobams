import Image from "next/image";
import BoltListItem from "./BoltListItem";

const items = [
  "Tailored Training Programs",
  "Expert-Led Workshops",
  "Personalized Mentorship",
  "Technical Skills Enhancement",
  "Collaborative Learning Environment",
  "Ongoing Support and Resources",
];

export default function CapacityDevelopment() {
  return (
    <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text */}
        <div className="flex-1 order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Capacity Development
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            Our capacity development initiatives offer tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success through collaborative learning environments and ongoing support.
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
              src="/img/capacity_development.jpg"
              alt="Team in a training workshop with someone presenting charts on a whiteboard"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
