import Image from "next/image";
import * as motion from "motion/react-client";
import { ButtonLink, ButtonDownload, SocialLinks } from "@/components";
import { hero } from "@/data";
import {
  fadeUp,
  mediaReveal,
  rotateSettle,
  springPopDelayed,
  springPopUp,
  staggerContainer,
  viewportOnce,
} from "@/lib";

import "./Hero.scss";

export default function Hero() {
  // ---- hero data ----
  const {
    greeting,
    title,
    location,
    description,
    actions,
    image,
    badge,
    figureCaption,
  } = hero;

  return (
    // ---- hero section ----
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__container">
        {/* ---- hero content ---- */}
        <motion.div
          className="hero__content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* ---- greeting ---- */}
          <motion.p className="hero__greeting" variants={fadeUp}>
            {greeting.text}
            <span className="hero__greeting-icon" aria-hidden="true">
              {greeting.icon}
            </span>
          </motion.p>

          {/* ---- title ---- */}
          <motion.h1
            id="hero-heading"
            className="hero__title"
            variants={fadeUp}
          >
            <span className="hero__title-name">{title.name}</span>

            <span className="hero__title-line">
              <span className="hero__title-highlight-sronly">
                {title.highlightSrOnly}
              </span>
              <mark className="hero__title-highlight">{title.highlight}</mark>
            </span>
          </motion.h1>

          {/* ---- location ---- */}
          <motion.address className="hero__location" variants={fadeUp}>
            <motion.span
              className="hero__location-icon"
              variants={rotateSettle}
            >
              {location.icon}
            </motion.span>
            <span className="hero__location-text">{location.text}</span>
          </motion.address>

          {/* ---- description ---- */}
          <motion.p className="hero__description" variants={fadeUp}>
            {description.beforeAbbr}
            <abbr
              title={description.abbr.title}
              className="hero__description-abbreviation"
              tabIndex={0}
              data-tooltip={description.abbr.tooltip}
              aria-label={description.abbr.tooltip}
            >
              {description.abbr.label}
            </abbr>
            {description.afterAbbr}
          </motion.p>

          {/* ---- actions ---- */}
          <motion.div className="hero__actions" variants={springPopUp}>
            {actions.map((link) => {
              const Button = link.download ? ButtonDownload : ButtonLink;

              return (
                <Button
                  key={link.id}
                  className="hero__actions-button"
                  variant={link.variant}
                  size={link.size}
                  href={link.href}
                  icon={link.icon}
                  ariaLabel={link.ariaLabel}
                >
                  {link.label}
                </Button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* ---- media ---- */}
        <div className="hero__media">
          {/* ---- images ---- */}
          <motion.figure
            className="hero__images"
            variants={mediaReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Image
              className="hero__images-image"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority
              sizes={image.sizes}
            />

            {/* ---- badge ---- */}
            <motion.span
              className="hero__badge"
              aria-label={badge.experienceAriaLabel}
              variants={springPopDelayed}
            >
              <svg
                className="hero__badge-svg"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="hero-badge-curve"
                    d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                  />
                </defs>
                <text className="hero__badge-text">
                  <textPath href="#hero-badge-curve" startOffset="0">
                    {badge.ringText}
                  </textPath>
                </text>
              </svg>

              {/* ---- badge center ---- */}
              <div className="hero__badge-center">
                <span className="hero__badge-number">{badge.years}+</span>
                <span className="hero__badge-label">{badge.yearsLabel}</span>
              </div>
            </motion.span>

            {/* ---- figure caption ---- */}
            <figcaption className="hero__image-caption">
              {figureCaption}
            </figcaption>
          </motion.figure>

          {/* ---- social links ---- */}
          <SocialLinks direction="vertical" className="hero__social" />
        </div>
      </div>
    </section>
  );
}
