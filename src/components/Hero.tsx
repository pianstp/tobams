import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(60vh+20px)] min-h-[420px] flex items-center justify-center overflow-hidden">
      <Image
        src="/img/hero_background_cover.jpg"
        alt="Professional working at a tech screen"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto gap-4">
        <span className="bg-black/60 text-white text-xs font-medium px-5 py-1.5 rounded-full tracking-widest uppercase">
          What We Do
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Training and Development
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
          Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
        </p>
        <a
          href="#"
          className="mt-2 bg-[#4a0e3f] text-white rounded-[4px] px-7 py-2.5 text-sm font-medium hover:bg-[#3b0a35] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4a0e3f] focus:ring-offset-2"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
