"use client";

import HeroContent from "./HeroContent";
import HeroProfileCard from "./HeroProfileCard";

const HeroSection = () => {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-0">
      {/* Profile Card shown on mobile/tablet at top/bottom, and desktop on the right */}
      <div className="flex w-full justify-center lg:w-[38%] lg:justify-end">
        <HeroProfileCard />
      </div>

      <div className="w-full lg:w-[58%]">
        <HeroContent />
      </div>
    </section>
  );
};

export default HeroSection;