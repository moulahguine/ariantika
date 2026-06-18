import { ButtonLink, ImageCarousel, SectionHeader } from "@/components";
import { aboutCarousel, aboutSection } from "@/data";
import { fadeUp, mediaReveal, viewportOnce } from "@/lib";
import * as motion from "motion/react-client";

import "./About.scss";

export default function About() {
  // ---- about data ----
  const { id, header, carousel, paragraphs, cta } = aboutSection;

  // ---- intro paragraphs ----
  const introParagraphs = paragraphs.slice(0, -1);
  const closingParagraph = paragraphs.at(-1);

  return (
    // ---- about section ----
    <section className="about" id={id} aria-labelledby="about-heading">
      {/* ---- section header ---- */}
      <SectionHeader
        headingId={header.titleId}
        prefix={header.prefix}
        accent={header.accent}
        accentTag={header.accentTag}
        subtitle={header.subtitle}
      />

      {/* ---- about container ---- */}
      <div className="about__container">
        {/* ---- media container ---- */}
        <motion.div
          className="about__media"
          variants={mediaReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <ImageCarousel
            images={aboutCarousel}
            ariaLabel={carousel.ariaLabel}
          />
        </motion.div>

        {/* ---- content container ---- */}
        <motion.div
          className="about__content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="about__paragraphs">
            {introParagraphs.map((paragraph, index) => (
              <span key={index}>
                {index > 0 && <span className="about__paragraphs-space" />}
                {paragraph}
              </span>
            ))}
            <span className="about__paragraphs-space" />
            {closingParagraph}{" "}
            <ButtonLink
              className="about__paragraphs-link"
              href={cta.href}
              variant="link"
              size="small"
              icon={<cta.icon />}
              iconPosition="right"
            >
              {cta.label}
            </ButtonLink>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
