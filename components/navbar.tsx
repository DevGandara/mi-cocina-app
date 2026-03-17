"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/menu", label: "Menú" },
  { href: "#contact", label: "Contacto" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-end md:top-8 md:justify-center px-2">
      <div className="relative">
        {/* Pill navbar */}
        <nav className="flex items-center justify-between gap-4 md:px-8 md:py-4 rounded-full border border-white/20 bg-white/15 backdrop-blur-md shadow-lg shadow-black/10">
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-md transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_20px_var(--primary)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger button (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] p-4 backdrop-blur-md"
            aria-label="Menú"
          >
            <span
              className={`block w-5 h-[2px] bg-current transition-all duration-300 ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-current transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden absolute top-full right-0 mt-2 w-48 rounded-2xl border border-white/20 bg-white/15 backdrop-blur-md shadow-lg shadow-black/10 overflow-hidden transition-all duration-300 ${
            open
              ? "opacity-100 scale-100 translate-y-0 "
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="flex flex-col py-2">
            <div className="flex justify-center">
              <Image
                src="/mi-cocina-logo.png"
                alt="Logo"
                width={50}
                height={50}
                priority
                className="justify-center"
              />
            </div>
            <div className="h-px w-full bg-black/20" />
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-5 py-3 text-md transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_20px_var(--primary)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
