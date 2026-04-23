"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavLink = { label: string; href: string; dropdown?: boolean; active?: boolean };

const navLinks: NavLink[] = [
  { label: "About", href: "#", dropdown: true, active: true },
  { label: "What We Do", href: "#", dropdown: true },
  { label: "Jobs", href: "#", dropdown: true },
  { label: "Projects", href: "#" },
  { label: "TG Academy", href: "#" },
  { label: "Strategic Partnership", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Book a Consultation", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Row 1: Logo left, CTA buttons right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/img/tobams-logo.png"
            alt="Tobams Group logo"
            width={140}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* CTA Buttons — desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="flex items-center gap-1.5 bg-[#4a0e3f] text-white rounded-[4px] px-4 py-1.5 text-sm hover:bg-[#3b0a35] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4a0e3f]">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            Account
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button className="bg-[#e8533a] text-white rounded-[4px] px-4 py-1.5 text-sm hover:bg-[#d4432a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e8533a]">
            Take Assessment
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Row 2: Nav links only — desktop */}
      <nav aria-label="Main navigation" className="hidden lg:block border-t border-gray-200 border-b border-gray-200">
        <ul className="w-full px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-6 text-sm text-gray-700">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="flex items-center py-3"
              style={{ borderBottom: link.active ? "2px solid #3b0a35" : "2px solid transparent" }}
            >
              <Link
                href={link.href}
                className="flex items-center gap-0.5 whitespace-nowrap transition-colors hover:text-[#4a0e3f]"
              >
                {link.label}
                {link.dropdown && (
                  <svg className="w-3 h-3 mt-0.5 shrink-0" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-3 pt-3 text-sm text-gray-700">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`hover:text-[#4a0e3f] ${link.active ? "text-[#4a0e3f] font-medium" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-2 mt-4">
            <button className="flex items-center justify-center gap-1.5 bg-[#4a0e3f] text-white rounded-[4px] px-4 py-2 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Account ▾
            </button>
            <button className="bg-[#e8533a] text-white rounded-[4px] px-4 py-2 text-sm">
              Take Assessment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
