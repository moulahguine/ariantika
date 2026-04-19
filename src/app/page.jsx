import Header from "@/components/Header/Header";
import { homeHero, site } from "@/data/content";
import { About, Banner, Hero, Services } from "@/sections";

export const metadata = {
  title: `${site.name} | ${site.title}`,
  description: homeHero.mission,
};

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ overflowX: "hidden" }}>
        <Hero />
        <Banner />
        <About />
        {/* <Services /> */}
      </main>
    </>
  );
}
