import BlogPosts from "@/components/BlogPost";
import { Brief } from "@/components/Brief";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { HubPostSection } from "@/sections/HubPost";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      <BlogPosts/>
      <TestimonialsSection/>
      <AboutSection/>
      <Brief/>
      <ContactSection/>
      {/* <HubPostSection/> */}
      <Footer/>
    </div>
  );
}
