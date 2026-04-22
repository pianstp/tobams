import Link from "next/link";
import Image from "next/image";

const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const company = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solution = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

export default function Footer() {
  return (
    <footer className="bg-[#150310] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/img/tobams-logo.png"
              alt="Tobams Group logo"
              width={140}
              height={40}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white hover:border-white transition-colors focus:outline-none focus:ring-2 focus:ring-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white hover:border-white transition-colors focus:outline-none focus:ring-2 focus:ring-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" aria-label="X (Twitter)" className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white hover:border-white transition-colors focus:outline-none focus:ring-2 focus:ring-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="font-bold text-sm mb-4">What We Do</h3>
            <ul className="flex flex-col gap-2.5">
              {whatWeDo.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors focus:outline-none focus:underline">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-sm mb-4">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {company.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors focus:outline-none focus:underline">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h3 className="font-bold text-sm mb-4">Solution</h3>
            <ul className="flex flex-col gap-2.5">
              {solution.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors focus:outline-none focus:underline">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Info card */}
        <div className="mt-12 bg-white/5 rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Registered Offices */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Registered Offices</h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[#e8533a] text-xs font-semibold mb-1">United Kingdom</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  07451196 (Registered by Company House), Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                </p>
              </div>
              <div>
                <p className="text-[#e8533a] text-xs font-semibold mb-1">Nigeria</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  RC 1048722 (Registered by the Corporate Affairs Commission), 4, Muaz Close, Angwar-Rimi
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Contact Information</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:theteam@tobamsgroup.com" className="flex items-center gap-2 text-gray-400 text-xs hover:text-white transition-colors focus:outline-none focus:underline">
                <svg className="w-4 h-4 text-[#e8533a] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                theteam@tobamsgroup.com
              </a>
              <a href="tel:+447886600748" className="flex items-center gap-2 text-gray-400 text-xs hover:text-white transition-colors focus:outline-none focus:underline">
                <svg className="w-4 h-4 text-[#e8533a] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +447886600748
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-xs">
          <p>Copyright &copy; Tobams Group, 2024. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
