"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    avatar: "/img/testimony_1.png",
    quote:
      "Tobams Group's training programs gave me the strategic clarity and leadership skills I needed to scale my business. The facilitators are world-class and genuinely invested in your growth.",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    avatar: "/img/testimony_2.png",
    quote:
      "The corporate training sessions were tailored perfectly to our team's needs. We saw measurable improvements in communication and project delivery within weeks.",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    avatar: "/img/testimony_3.png",
    quote:
      "The Management Development Program transformed how our managers lead. The blend of workshops, coaching, and online modules made it practical and immediately applicable.",
  },
  {
    name: "Adaeze Okonkwo",
    role: "Product Manager, Lagos",
    avatar: "/img/testimony_1.png",
    quote:
      "TG Academy's curriculum is comprehensive and up-to-date. I gained both technical depth and soft skills that have directly accelerated my career trajectory.",
  },
];

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const visible = 3;
  const canPrev = start > 0;
  const canNext = start + visible < testimonials.length;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
          Testimonials
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(start, start + visible).map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-[#e8533a] p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Navigation — coral arrows */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={() => setStart((s) => Math.max(0, s - 1))}
            disabled={!canPrev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-[#e8533a] text-white flex items-center justify-center hover:bg-[#d4432a] transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#e8533a]"
          >
            ‹
          </button>
          <button
            onClick={() => setStart((s) => Math.min(testimonials.length - visible, s + 1))}
            disabled={!canNext}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full bg-[#e8533a] text-white flex items-center justify-center hover:bg-[#d4432a] transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#e8533a]"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
