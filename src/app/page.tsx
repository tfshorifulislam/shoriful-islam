import HeroSection from "@/components/banner/HeroSection";
import GithubSection from "@/components/githubStats/githubSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/skills/SkillsSection";


const HomePage = () => {
  return (
    <div>

      <HeroSection />

      <SkillsSection/>

      <ProjectsSection/>

      <GithubSection/>

    </div>
  );
};

export default HomePage;