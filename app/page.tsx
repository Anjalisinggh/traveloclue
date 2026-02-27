// app/page.tsx
import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import HowWeWorkSection from "@/components/sections/home/HowWeWorkSection";
import FeaturedToursSection from "@/components/sections/home/FeaturedToursSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HowWeWorkSection />
      <FeaturedToursSection />
    </main>
  );
}