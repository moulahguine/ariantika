import Image from "next/image";

import * as motion from "motion/react-client";

import { aboutSteps, aboutMetadata } from "@/data";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib";

import "./page.scss";

// ---- about me metadata ----
export const metadata = aboutMetadata;

// ---- about me page ----
export default function AboutMe() {
  return (
    <>
      {/* ---- main container ---- */}
      <main className="about__me">
        {/* ---- header ---- */}
        <motion.header
          className="about__me-header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span className="about__me-header-eyebrow" variants={fadeUp}>
            My Story
          </motion.span>
          <motion.h1 className="about__me-header-title" variants={fadeUp}>
            How <span className="about__me-header-title-accent">I</span> Got
            Here.
          </motion.h1>
          <motion.p className="about__me-header-subtitle" variants={fadeUp}>
            How years of academic and clinical experience slowly shaped the way
            I understand health and disease.
          </motion.p>
        </motion.header>

        {/* ---- container  ---- */}
        <div className="about__me-container">
          {/* ---- steps list ---- */}
          <div
            className="about__me-steps"
            aria-label="My journey into epidemiology"
          >
            {aboutSteps.map((step, i) => {
              const side = i % 2 === 0 ? "left" : "right";
              const photoVariant = side === "left" ? slideInLeft : slideInRight;
              const contentVariant =
                side === "left" ? slideInRight : slideInLeft;

              return (
                // ---- card container ----
                <motion.section
                  key={step.id}
                  className={`about__me-step about__me-step--${side} about__me-step--${step.theme}`}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  {/* ---- polaroid photo ---- */}
                  <motion.div
                    className="about__me-wrapper--photo"
                    variants={photoVariant}
                  >
                    <figure
                      className={`about__me-photo about__me-photo--${side}`}
                    >
                      {/* ---- left tape ---- */}
                      <span
                        className={`about__me-photo-tape about__me-photo-tape--tl about__me-photo-tape--tl-${side}`}
                        aria-hidden="true"
                      />
                      {/* ---- right tape ---- */}
                      <span
                        className={`about__me-photo-tape about__me-photo-tape--tr about__me-photo-tape--tr-${side}`}
                        aria-hidden="true"
                      />
                      {/* ---- image ---- */}
                      <Image
                        src={step.image}
                        className="about__me-photo-img"
                        width={700}
                        height={700}
                        alt={step.alt}
                      />
                      <figcaption className="about__me-photo-caption">
                        <svg
                          className="about__me-photo-caption-curve"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M 4 3 Q 4 20 21 20"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="about__me-photo-caption-text">
                          {step.caption}
                        </span>
                      </figcaption>
                    </figure>
                  </motion.div>

                  {/* ---- content ---- */}
                  <motion.article
                    className={`about__me-content about__me-content--${side}`}
                    variants={contentVariant}
                  >
                    <h2 className="about__me-content-title">
                      <span
                        className="about__me-content-icon"
                        aria-hidden="true"
                      >
                        <step.icon />
                      </span>
                      {step.title}
                    </h2>

                    <p className="about__me-content-body">{step.body}</p>
                  </motion.article>
                </motion.section>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
