"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/menu", label: "Menú" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-end md:top-8 md:justify-center px-4">
      <div className="relative">
        {/* Pill navbar */}
        <nav className="flex items-center gap-1.5 px-3 py-2 md:px-4 md:py-2.5 rounded-full border border-white/20 bg-white/15 backdrop-blur-md shadow-lg shadow-black/10">
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "text-foreground/80 hover:bg-primary/10 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Hamburger button (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] p-3"
            aria-label="Menú"
            aria-expanded={open}
            aria-controls="mobile-nav"
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
          id="mobile-nav"
          className={`md:hidden absolute top-full right-0 mt-2 w-48 rounded-2xl border border-white/20 bg-white/85 backdrop-blur-md shadow-lg shadow-black/10 overflow-hidden transition-all duration-300 ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="flex flex-col py-2">
            <div className="flex justify-center py-2">
              <Image
                src="/mi-cocina-logo.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </div>
            <div className="h-px w-full bg-white/20" />
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`mx-2 mt-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary/15 text-primary"
                      : "text-foreground/70 hover:bg-primary/10 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
