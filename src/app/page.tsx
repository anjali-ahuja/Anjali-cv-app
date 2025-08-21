import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import WorkExperienceSection from "../components/WorkExperienceSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkExperienceSection />
      <EducationSection />
      <ProjectsSection />
    </>
  );
}
