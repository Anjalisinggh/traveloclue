"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 
      transition-all duration-500 ease-in-out
      ${
        scrolled
          ? "top-4 w-[85%] max-w-6xl bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-xl rounded-full px-6 py-3"
          : "top-8 w-[95%] max-w-7xl bg-transparent px-10 py-5"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className={`font-bold text-xl tracking-wide transition-all duration-500 ${
              scrolled ? "text-white scale-95" : "text-white scale-100"
            }`}
          >
            <img src="/logo.png" alt="Logo" width={20} height={100} />
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/destinations">Destinations</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden text-white">
          ☰
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