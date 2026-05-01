import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BottomNav } from "@/components/portfolio/BottomNav";
import { SocialBar } from "@/components/portfolio/SocialBar";
import { InteractiveBackground } from "@/components/portfolio/InteractiveBackground";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <InteractiveBackground />
      <SocialBar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Services />
      <Contact />
      <Footer />
      <BottomNav />
      <Toaster />
    </main>
  );
}
