import AboutSection from "@/components/AboutSection/AboutSection";
import HomeSection from "@/components/HomeSection/HomeSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
