import { Hero, Banner, About, Experience, Services, Contact } from "@/sections";

import "./page.scss";

// ---- home page ----
export default function Home() {
  return (
    <>
      {/* ---- main container ---- */}
      <main className="home__main">
        {/* ---- hero section ---- */}
        <Hero />

        {/* ---- banner section ---- */}
        <Banner />

        {/* ---- about section ---- */}
        <About />

        {/* ---- services section ---- */}
        <Services />

        {/* ---- experience section ---- */}
        <Experience />

        {/* ---- contact section ---- */}
        <Contact />
      </main>
    </>
  );
}
