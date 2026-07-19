import * as motion from "motion/react-client";
import { Button, ImageCarousel, SectionHeader } from "@/components";
import { aboutMePageCarousel, aboutSection } from "@/data";
import { fadeUp, springPopUp, viewportOnce } from "@/lib";

import "./About.scss";

export default function About() {
  // ---- about data ----
  const { aboutHeadingId, header, carousel, paragraphs, cta } = aboutSection;

  // ---- intro paragraphs ----
  const introParagraphs = paragraphs.slice(0, -1);
  const closingParagraph = paragraphs.at(-1);

  return (
    // ---- about section ----
    <section
      className="about"
      id={aboutHeadingId}
      aria-labelledby={aboutHeadingId}
    >
      {/* ---- section header ---- */}
      <SectionHeader
        headingId={aboutHeadingId}
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
          variants={springPopUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <ImageCarousel
            images={aboutMePageCarousel}
            ariaLabel={carousel.ariaLabel}
          />
        </motion.div>

        {/* ---- content container ---- */}
        <motion.p
          className="about__paragraphs"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {introParagraphs.map((paragraph, index) => (
            <span key={index}>
              {index > 0 && <span className="about__paragraphs-space" />}
              {paragraph}
            </span>
          ))}
          <span className="about__paragraphs-space" />
          {closingParagraph}{" "}
          <Button
            className="about__paragraphs-link"
            href={cta.href}
            variant="link"
            size="small"
            icon={<cta.icon />}
            iconPosition="right"
          >
            {cta.label}
          </Button>
        </motion.p>
      </div>
    </section>
  );
}
