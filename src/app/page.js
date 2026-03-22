import { metadata } from "./page.metadata";
import { Header, Footer } from "@/components";
import {
  Hero,
  Services,
  Projects,
  Blog,
  About,
  EducationExperience,
  Testimonials,
  FAQ,
  Contact,
} from "@/sections";

export function generateMetadata() {
  return metadata;
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Blog />
        <EducationExperience />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
