import Image from "next/image";
import * as motion from "motion/react-client";
import { aboutMetadata, aboutMePageSteps } from "@/data";
import { PageHeader, QuoteVerse } from "@/components";
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
  const { header, steps, quote } = aboutMePageSteps;

  return (
    <>
      {/* ---- main container ---- */}
      <main className="about__me">
        {/* ---- header ---- */}
        <PageHeader header={header} />

        {/* ---- container  ---- */}
        <div className="about__me-container">
          {/* ---- steps list ---- */}
          <div className="about__me-steps">
            {steps.map((step, i) => {
              const isOdd = i % 2 === 0 ? "odd" : "";
              const photoVariant = isOdd === "odd" ? slideInRight : slideInLeft;
              const contentVariant =
                isOdd === "odd" ? slideInLeft : slideInRight;

              return (
                <motion.section
                  key={step.id}
                  className="about__me--step"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  <motion.div
                    className="about__me--wrapper"
                    variants={photoVariant}
                  >
                    <div
                      className={`about__me--photo about__me--photo-${isOdd}`}
                    >
                      <Image
                        src={step.image}
                        className="about__me-img"
                        width={700}
                        height={700}
                        alt={step.alt}
                      />
                    </div>
                  </motion.div>

                  {/* ---- content ---- */}
                  <motion.div
                    className="about__me--content"
                    variants={contentVariant}
                  >
                    <motion.h2
                      variants={fadeUp}
                      className={`about__me--content-title about__me--content-title-${isOdd}`}
                    >
                      <span
                        className={`about__me--content-icon about__me--content-icon-${isOdd}`}
                        aria-hidden="true"
                      >
                        <step.icon />
                      </span>
                      {step.title}
                    </motion.h2>

                    <motion.p
                      variants={fadeUp}
                      className="about__me--content-body"
                    >
                      {step.body}
                    </motion.p>
                  </motion.div>
                </motion.section>
              );
            })}
          </div>

          {/* ---- Quran verse ---- */}
          <QuoteVerse
            arabic={quote.arabic}
            translation={quote.translation}
            source={quote.source}
            href={quote.href}
            variant="accent"
          />
        </div>
      </main>
    </>
  );
}
