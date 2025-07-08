import Hero from "../components/Hero";
import ProjectsCarousel from "../components/ProjectsCarousel";
import ContactSection from "../components/ContactSection";
import EducationSection from "../components/EducationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <EducationSection />
      <ProjectsCarousel />
      <ContactSection />
    </>
  );
}
