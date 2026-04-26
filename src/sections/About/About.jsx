import { ButtonLink, ImageCarousel } from "@/components";

import about1 from "@/assets/images/about/about_1.jpeg";
import about2 from "@/assets/images/about/about_2.jpeg";
import about3 from "@/assets/images/about/about_3.jpeg";
import about4 from "@/assets/images/about/about_4.jpeg";

import { TfiArrowTopRight } from "react-icons/tfi";

import "./About.scss";

const carouselImages = [
  {
    src: about1,
    alt: "Ariantika in graduation cap and gown at the Universitas Sumatera Utara Faculty of Public Health commencement ceremony, April 2025",
    caption: "Graduation Ceremony",
  },
  {
    src: about2,
    alt: "Ariantika exploring a microbiology exhibit on bacteria and foraminifera at a science museum",
    caption: "Science Museum",
  },
  {
    src: about3,
    alt: "Ariantika holding a bouquet in front of the Faculty of Public Health wall at Universitas Sumatera Utara after her master's graduation",
    caption: "Master's Graduation",
  },
  {
    src: about4,
    alt: "Ariantika attending the 9th MABIP 2025 conference (Malaysian Association for Bronchology and Interventional Pulmonology)",
    caption: "MABIP 2025 Conference",
  },
];

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <header
        className="about__header"
        id="about-header"
        aria-labelledby="about-header-heading"
      >
        <h2 className="about__header-title" id="about-header-heading">
          About <small className="about__header-title-accent">Me</small>&#46;
        </h2>

        <p className="about__header-subtitle">
          Curious about what shapes health and disease.
        </p>
      </header>

      <div className="about__container">
        <div className="about__media">
          <ImageCarousel
            images={carouselImages}
            caption={true}
            ariaLabel="A glimpse into my research and teaching"
          />
        </div>

        <div className="about__content">
          <p className="about__content-paragraph">
            Before I ever studied epidemiology, I was already close to research.
            <span className="about__content-paragraph-space"></span>I spent
            several years working as a teaching and research assistant in a
            clinical setting. It wasn’t something distant or abstract. I was
            part of the daily work, helping with studies, joining discussions,
            and seeing how research actually develops from an idea into
            something useful.
            <span className="about__content-paragraph-space"></span>
            Over time, I started paying less attention to results alone and more
            to the questions behind them. Why do some diseases appear more in
            certain populations? What increases risk? And how much of it could
            be understood earlier or even prevented?
            <span className="about__content-paragraph-space"></span>
            That shift is what led me to epidemiology. It gave me a way to
            explore those questions with structure, not just curiosity.
            <span className="about__content-paragraph-space"></span>
            Since then, my work has focused on cancer and public health
            research, especially in understanding how disease affects people
            beyond clinical outcomes, including quality of life.{" "}
            <ButtonLink
              className="about__content-paragraph-link"
              href="/aboutme"
              variant="link"
              size="small"
              icon={<TfiArrowTopRight />}
              iconPosition="right"
            >
              If you want to understand how this path really started and what
              shaped it, you can continue reading my story.
            </ButtonLink>
          </p>
        </div>
      </div>
    </section>
  );
}
