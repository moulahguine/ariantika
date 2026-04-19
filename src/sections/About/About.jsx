import { ButtonLink, ImageCarousel } from "@/components";

import about1 from "@/assets/images/about/about_1.jpeg";
import about2 from "@/assets/images/about/about_2.jpeg";
import about3 from "@/assets/images/about/about_3.jpeg";
import about4 from "@/assets/images/about/about_4.jpeg";

import "./About.scss";

const carouselImages = [
  {
    src: about1,
    alt: "Researcher reviewing data on a laptop in a bright workspace",
  },
  {
    src: about2,
    alt: "Close-up of a microscope in a research laboratory",
  },
  {
    src: about3,
    alt: "Scientist analysing samples with lab equipment",
  },
  {
    src: about4,
    alt: "Health professional collaborating with a colleague in a clinic",
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
        <div className="about__container-media">
          <ImageCarousel
            images={carouselImages}
            ariaLabel="A glimpse into my research and teaching"
          />
        </div>

        <div className="about__container-text">
          <p className="about__container-text-paragraph">
            Before I ever studied epidemiology, I was already close to research.
          </p>
          <p className="about__container-text-paragraph">
            I spent several years working as a teaching and research assistant
            in a clinical setting. It wasn’t something distant or abstract. I
            was part of the daily work, helping with studies, joining
            discussions, and seeing how research actually develops from an idea
            into something useful.
          </p>

          <p className="about__container-text-paragraph">
            Over time, I started paying less attention to results alone and more
            to the questions behind them. Why do some diseases appear more in
            certain populations? What increases risk? And how much of it could
            be understood earlier or even prevented?
          </p>
          <p className="about__container-text-paragraph">
            That shift is what led me to epidemiology. It gave me a way to
            explore those questions with structure, not just curiosity.
          </p>

          <p className="about__container-text-paragraph">
            Since then, my work has focused on cancer and public health
            research, especially in understanding how disease affects people
            beyond clinical outcomes, including quality of life.{" "}
            <ButtonLink
              className="about__container-text-paragraph-link"
              href="/about"
              variant="link"
              size="small"
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
