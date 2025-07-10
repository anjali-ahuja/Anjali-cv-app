import Hero from "../components/Hero";
import ProjectsCarousel from "../components/ProjectsCarousel";
import ContactSection from "../components/ContactSection";
import EducationSection from "../components/EducationSection";
import WorkExperienceSection from "../components/WorkExperienceSection";

export default function Home() {
  return (
    <>
      <Hero />
      <EducationSection />
      <WorkExperienceSection />
      <ProjectsCarousel />
      <ContactSection />
    </>
  );
}
