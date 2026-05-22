import { ButtonLink, ImageCarousel } from "@/components";
import { aboutCarousel, aboutSection } from "@/data";

import "./About.scss";

export default function About() {
  const { id, header, carousel, paragraphs, cta } = aboutSection;
  const CtaIcon = cta.icon;
  const closingParagraph = paragraphs.at(-1);
  const introParagraphs = paragraphs.slice(0, -1);

  return (
    <section className="about" id={id} aria-labelledby="about-heading">
      <header
        className="about__header"
        id="about-header"
        aria-labelledby="about-header-heading"
      >
        <h2 className="about__header-title" id="about-header-heading">
          {header.titleBeforeAccent}{" "}
          <small className="about__header-title-accent">
            {header.titleAccent}
          </small>
          &#46;
        </h2>

        <p className="about__header-subtitle">{header.subtitle}</p>
      </header>

      <div className="about__container">
        <div className="about__media">
          <ImageCarousel
            images={aboutCarousel}
            ariaLabel={carousel.ariaLabel}
          />
        </div>

        <div className="about__content">
          <p className="about__content-paragraph">
            {introParagraphs.map((paragraph, index) => (
              <span key={index}>
                {index > 0 && (
                  <span className="about__content-paragraph-space" />
                )}
                {paragraph}
              </span>
            ))}
            <span className="about__content-paragraph-space" />
            {closingParagraph}{" "}
            <ButtonLink
              className="about__content-paragraph-link"
              href={cta.href}
              variant="link"
              size="small"
              icon={<CtaIcon />}
              iconPosition="right"
            >
              {cta.label}
            </ButtonLink>
          </p>
        </div>
      </div>
    </section>
  );
}
