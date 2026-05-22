import { Header } from "@/components";
import { About, Banner, Hero, Services } from "@/sections";

import "./page.scss";

// ---- home page ----
export default function Home() {
  return (
    <>
      {/* navigation header */}
      <Header />

      {/* main container */}
      <main className="home__main">
        {/* hero section */}
        <Hero />

        {/* banner section */}
        <Banner />

        {/* grid background */}
        <div className="home__grid-bg">
          {/* about section */}
          <About />

          {/* services section */}
          <Services />

          {/* journey section */}
          {/* <Journey /> */}
        </div>
      </main>
    </>
  );
}
