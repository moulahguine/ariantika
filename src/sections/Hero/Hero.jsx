import Image from "next/image";

import { ButtonLink, ButtonDownload, SocialLinks } from "@/components";
import { getHeroExperienceYears, hero } from "@/data";

import "./Hero.scss";

// ---- hero component ----
export default function Hero() {
  // ---- get experience years ----
  const experienceYears = getHeroExperienceYears();

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
    locationIcon,
  } = hero;

  // ---- render hero component ----
  return (
    // ---- hero section ----
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__container">
        <div className="hero__content">
          {/* greeting */}
          <p className="hero__greeting">
            {greeting.text}
            <span className="hero__greeting-icon">{greeting.icon}</span>
          </p>

          {/* title */}
          <h1 id="hero-heading" className="hero__title">
            <span className="hero__title-name">{title.name}</span>

            <span className="hero__title-line">
              <span className="hero__title-highlight-sronly">
                {title.highlightSrOnly}
              </span>
              <mark className="hero__title-highlight">{title.highlight}</mark>
            </span>
          </h1>

          {/* location */}
          <address className="hero__location">
            <span className="hero__location-icon">{locationIcon}</span>
            <span className="hero__location-text">{location.text}</span>
          </address>

          {/* description */}
          <p className="hero__description">
            {description.beforeAbbr}
            <abbr
              title={description.abbr.title}
              className="hero__description-abbreviation"
              tabIndex={0}
              data-tooltip={description.abbr.tooltip}
            >
              {description.abbr.label}
            </abbr>
            {description.afterAbbr}
          </p>

          {/* actions */}
          <div className="hero__actions">
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
                >
                  {link.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* media */}
        <div className="hero__media">
          {/* images */}
          <figure className="hero__images">
            <Image
              className="hero__images-image"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority
              sizes={image.sizes}
            />

            {/* badge */}
            <span
              className="hero__badge"
              role="img"
              aria-label={badge.experienceAriaLabel(experienceYears)}
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

              <div className="hero__badge-center">
                <span className="hero__badge-number">{experienceYears}+</span>
                <span className="hero__badge-label">{badge.yearsLabel}</span>
              </div>
            </span>

            {/* figure caption */}
            <figcaption className="hero__image-caption">
              {figureCaption}
            </figcaption>
          </figure>

          {/* social links */}
          <SocialLinks direction="vertical" className="hero__social" />
        </div>
      </div>
    </section>
  );
}
