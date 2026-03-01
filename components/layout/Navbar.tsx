"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.nav
      className="fixed left-1/2 z-50 -translate-x-1/2"
      initial={false}
      animate={{
        top: scrolled ? 16 : 28,
        width: scrolled ? "82%" : "92%",
      }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Main navbar */}
      <motion.div
        className="flex items-center justify-between px-6"
        initial={false}
        animate={{
          borderRadius: scrolled ? 9999 : 0,
          backgroundColor: scrolled
            ? "rgba(2, 6, 23, 0.75)"
            : "transparent",
          borderColor: scrolled
            ? "rgba(255, 255, 255, 0.1)"
            : "transparent",
          boxShadow: scrolled
            ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            : "none",
          paddingTop: scrolled ? 8 : 14,
          paddingBottom: scrolled ? 8 : 14,
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ backdropFilter: scrolled ? "blur(24px)" : "none" }}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMobile}
          className="flex shrink-0 items-center min-w-0 max-w-[110px] sm:max-w-none"
        >
          <Image
            src={scrolled ? "/shortlogo.svg" : "/logo.svg"}
            alt="Traveloclue Logo"
            width={scrolled ? 80 : 115}
            height={scrolled ? 35 : 55}
            className="h-auto w-full max-h-8 object-contain transition-all duration-500 sm:max-h-[55px]"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/destinations">Destinations</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMobile}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          className="shrink-0 inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/50 px-3 py-2 text-white backdrop-blur-xl md:hidden"
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
      </motion.div>

      {/* Mobile Dropdown */}
      <motion.div
        initial={false}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="overflow-hidden md:hidden"
      >
        <div className="mt-3">
          <motion.div
            initial={false}
            animate={{ opacity: mobileOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur-xl"
          >
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
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
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
      className="text-sm text-white/80 transition-colors duration-300 hover:text-white"
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
      className="block rounded-lg px-6 py-3 text-sm text-white/80 transition-colors hover:bg-slate-800/50 hover:text-white"
    >
      {children}
    </Link>
  );
}