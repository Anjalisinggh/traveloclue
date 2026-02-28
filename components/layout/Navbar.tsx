"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto w-full max-w-6xl transition-all duration-500 ease-in-out ${
          scrolled
            ? "rounded-full bg-slate-950/90 border border-white/10 backdrop-blur-xl shadow-xl py-2 px-4"
            : "py-2 px-2"
        }`}
      >
        <div className="flex items-center justify-between gap-3">

          {/* ✅ Logo (Properly constrained for mobile) */}
          <Link
            href="/"
            onClick={closeMobile}
            className="flex items-center shrink min-w-0 max-w-[110px] sm:max-w-none"
          >
            <Image
              src={scrolled ? "/shortlogo.svg" : "/logo.svg"}
              alt="Traveloclue Logo"
              width={scrolled ? 90 : 130}
              height={scrolled ? 40 : 60}
              className="object-contain w-full h-auto max-h-9 sm:max-h-[60px] transition-all duration-500"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/destinations">Destinations</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile Button */}
          <button
            onClick={toggleMobile}
            className="md:hidden shrink-0 inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 px-3 py-2 text-white backdrop-blur-sm"
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                  mobileOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-3">
          <div className="mx-auto w-full max-w-6xl px-4">
            <div className="rounded-2xl bg-slate-950/95 border border-white/10 backdrop-blur-xl shadow-xl py-3">
              <MobileNavLink href="/" onClick={closeMobile}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={closeMobile}>
                About
              </MobileNavLink>
              <MobileNavLink href="/destinations" onClick={closeMobile}>
                Destinations
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={closeMobile}>
                Contact
              </MobileNavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
    >
      {children}
    </Link>
  );
}

type MobileNavLinkProps = NavLinkProps & {
  onClick?: () => void;
};

function MobileNavLink({ href, children, onClick }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-6 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition"
    >
      {children}
    </Link>
  );
}