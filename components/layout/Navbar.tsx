"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 
      transition-all duration-500 ease-in-out
      ${
        scrolled
          ? "top-4 w-[92%] max-w-6xl bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-xl rounded-full px-5 py-2.5"
          : "top-6 w-[94%] max-w-7xl bg-transparent px-6 py-3 md:px-10 md:py-5"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMobile}>
          <div className="flex items-center">
            <Image
              src={scrolled ? "/shortlogo.svg" : "/logo.svg"}
              alt="Logo"
              width={scrolled ? 40 : 60}
              height={scrolled ? 40 : 60}
              className="w-10 h-11 object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/destinations">Destinations</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 px-3 py-2 text-white shadow-sm backdrop-blur-sm focus:outline-none"
          onClick={toggleMobile}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${
                mobileOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${
                mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden origin-top transition-all duration-300 ease-out ${
          mobileOpen
            ? "pointer-events-auto mt-3 scale-y-100 opacity-100"
            : "pointer-events-none mt-0 scale-y-0 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-white/10 bg-slate-950/90 py-3 shadow-xl backdrop-blur-xl">
          <MobileNavLink href="/" onClick={closeMobile}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/about" onClick={closeMobile}>
            About Us
          </MobileNavLink>
          <MobileNavLink href="/destinations" onClick={closeMobile}>
            Destinations
          </MobileNavLink>
          <MobileNavLink href="/contact" onClick={closeMobile}>
            Contact Us
          </MobileNavLink>
        </div>
      </div>
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
      className="text-white/80 hover:text-white transition-colors duration-300 tracking-wide"
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
      className="block px-6 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors rounded-lg"
    >
      {children}
    </Link>
  );
}