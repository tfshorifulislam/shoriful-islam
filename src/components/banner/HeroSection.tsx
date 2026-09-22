import HeroContent from "./HeroContent";
import HeroProfileCard from "./HeroProfileCard";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div
        className="
          flex
          min-h-screen
          w-full
          flex-col-reverse
          items-center
          justify-center
          gap-12
          py-24
          sm:gap-14
          sm:py-28
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-16
          lg:py-0
        "
      >
        {/* Hero Content */}
        <div className="w-full lg:w-1/2">
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