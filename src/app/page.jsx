import {
  Hero,
  Banner,
  About,
  Services,
  Experience,
  Research,
  Contact,
} from "@/sections";
import { QuoteVerse } from "@/components";

import "./page.scss";

// ---- Quran verse ----
const QuranVerse = {
  arabic: "وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا",
  translation:
    "and whoever saves a life, it will be as if they saved all of humanity",
  source: "Quran 5:32",
  href: "https://quran.com/search?page=1&query=5+32",
};

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

        {/* ---- research section ---- */}
        <Research />

        {/* ---- quote verse section ---- */}
        <QuoteVerse
          arabic={QuranVerse.arabic}
          translation={QuranVerse.translation}
          source={QuranVerse.source}
          href={QuranVerse.href}
          variant="primary"
        />

        {/* ---- contact section ---- */}
        <Contact />
      </main>
    </>
  );
}
