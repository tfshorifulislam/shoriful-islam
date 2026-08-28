import HeroContent from "./HeroContent";
import HeroProfileCard from "./HeroProfileCard";

const HeroSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">

      <div className="flex flex-col-reverse lg:flex-row justify-between w-full items-center min-h-screen mt-40 lg:mt-0 gap-8">

        <HeroProfileCard />

        <HeroContent />

      </div>

    </div>
  );
};

export default HeroSection;