import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Traveloclue",
  description: "Discover curated travel experiences with Traveloclue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* global blurred blobs behind content */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" />
          <div className="absolute top-1/3 right-[-10%] h-96 w-96 rounded-full bg-emerald-400/12 blur-3xl" />
          <div className="absolute bottom-[-20%] left-1/3 h-104 w-104 rounded-full bg-amber-300/10 blur-3xl" />
        </div>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
