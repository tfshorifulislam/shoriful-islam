import HeroContent from "./HeroContent";
import HeroProfileCard from "./HeroProfileCard";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="flex min-h-svh w-full flex-col items-center justify-center gap-10 py-20 mt-10 sm:mt-0 sm:gap-12 sm:py-24 md:gap-14 md:py-28 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-0">
        {/* Hero Content */}
        <div className="w-full min-w-0 lg:w-1/2">
          <HeroContent />
        </div>

        {/* Profile Card */}
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <HeroProfileCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;