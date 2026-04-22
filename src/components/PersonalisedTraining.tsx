import Image from "next/image";
import BoltListItem from "./BoltListItem";

const items = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

export default function PersonalisedTraining() {
  return (
    <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Image */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/img/personalize_training.jpg"
              alt="Two women in a professional discussion, one holding documents"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Personalised Individual Training
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            We believe in lifelong learning and professional development. Our personalised training programs are designed to help individuals grow both technically and personally, equipping them with the skills needed to thrive in their careers.
          </p>
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <BoltListItem key={item} text={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
