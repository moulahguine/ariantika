import Image from "next/image";

import { Header } from "@/components";
import { aboutSteps } from "@/data";

import "./page.scss";

export const metadata = {
  title: "About Me",
  description:
    "The story of how years in clinical pulmonology and research shaped my path into epidemiology, cancer and quality-of-life research, and public health prevention.",
};

export default function AboutMe() {
  return (
    <>
      {/* navigation header */}
      <Header />

      {/* main container */}
      <main className="about__me">
        {/* header */}
        <header className="about__me-header">
          <span className="about__me-header-eyebrow">My Story</span>
          <h1 className="about__me-header-title">
            How <span className="about__me-header-title-accent">I</span> Got
            Here.
          </h1>
          <p className="about__me-header-subtitle">
            How years of academic and clinical experience slowly shaped the way
            I understand health and disease.
          </p>
        </header>

        {/* container  */}
        <div className="about__me-container">
          {/* steps list */}
          <div
            className="about__me-steps"
            aria-label="My journey into epidemiology"
          >
            {aboutSteps.map((step, i) => {
              const side = i % 2 === 0 ? "left" : "right";

              return (
                // card container
                <section
                  key={step.id}
                  className={`about__me-step about__me-step--${side} about__me-step--${step.theme}`}
                >
                  {/* polaroid photo */}
                  <div className="about__me-wrapper--photo">
                    <figure
                      className={`about__me-photo about__me-photo--${side}`}
                    >
                      {/* left tape */}
                      <span
                        className={`about__me-photo-tape about__me-photo-tape--tl about__me-photo-tape--tl-${side}`}
                        aria-hidden="true"
                      />
                      {/* right tape */}
                      <span
                        className={`about__me-photo-tape about__me-photo-tape--tr about__me-photo-tape--tr-${side}`}
                        aria-hidden="true"
                      />
                      {/* image */}
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
                  </div>

                  {/* content */}
                  <article
                    className={`about__me-content about__me-content--${side}`}
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
                  </article>
                </section>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
