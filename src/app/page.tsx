import AboutPreview from "@/components/section/AboutPreview";
import ActivitiesHighlight from "@/components/section/ActivitesHighlight";
import CallToAction from "@/components/section/CallToAction";
import Footer from "@/components/section/Footer";
import HeroSection from "@/components/section/HeroSection";
import Partners from "@/components/section/Partners";
import ProjectsShowcase from "@/components/section/ProjectShowcase";
import ResearchAreas from "@/components/section/ResearchAreas";
import TeamPreview from "@/components/section/TeamPreview";

export default function HomePage() {
  return (
    <main className="background-topography min-h-screen space-y-20 md:space-y-24">
      <HeroSection />
      <AboutPreview />
      <ResearchAreas />
      <ProjectsShowcase />
      <ActivitiesHighlight />
      <TeamPreview />
      <Partners />
      <CallToAction />
      <Footer />
    </main>
  );
}
