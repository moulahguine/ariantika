import Image from "next/image";
import * as motion from "motion/react-client";
import { AbbrTooltip, Button, SocialLinks } from "@/components";
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
  const { greeting, title, location, description, actions, image, badge } =
    hero;

  return (
    // ---- hero section ----
    <section className="hero" aria-label="Introduction">
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
            className="hero__title"
            variants={fadeUp}
            aria-label={`${title.name}${title.highlightSrOnly} ${title.highlight}`}
          >
            <span className="hero__title-name" aria-hidden="true">
              {title.name}
            </span>

            <span className="hero__title-line" aria-hidden="true">
              <mark className="hero__title-highlight">{title.highlight}</mark>
            </span>
          </motion.h1>

          {/* ---- location ---- */}
          <motion.address className="hero__location" variants={fadeUp}>
            <motion.span
              className="hero__location-icon"
              variants={rotateSettle}
              aria-hidden="true"
            >
              <location.icon />
            </motion.span>
            <span className="hero__location-text">{location.text}</span>
          </motion.address>

          {/* ---- description ---- */}
          <motion.p className="hero__description" variants={fadeUp}>
            {description.beforeAbbr}
            <AbbrTooltip
              className="hero__description-abbr"
              content={description.abbr.title}
            >
              {description.abbr.label}
            </AbbrTooltip>
            {description.afterAbbr}
          </motion.p>

          {/* ---- actions ---- */}
          <motion.div className="hero__actions" variants={springPopUp}>
            {/* ---- contact button ---- */}
            {actions.map((action) => (
              <Button
                key={action.id}
                className="hero__actions-button"
                variant={action.variant}
                size={action.size}
                href={action.href}
                icon={action.icon}
                aria-label={action.ariaLabel}
                download={action.download}
              >
                {action.label}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        {/* ---- media ---- */}
        <div className="hero__visual">
          <motion.div
            className="hero__image"
            variants={mediaReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* ---- images ---- */}
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={image.sizes}
              priority
            />

            {/* ---- badge ---- */}
            <motion.span
              className="hero__badge"
              variants={springPopDelayed}
              aria-hidden="true"
            >
              <svg className="hero__badge-svg" viewBox="0 0 200 200">
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
          </motion.div>

          {/* ---- social links ---- */}
          <SocialLinks direction="vertical" className="hero__social" />
        </div>
      </div>
    </section>
  );
}
