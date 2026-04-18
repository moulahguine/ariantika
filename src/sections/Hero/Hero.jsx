import Image from "next/image";
import heroPortrait from "@/assets/images/hero/hero.jpeg";
import { GoArrowUpRight } from "react-icons/go";
import { FaFileAlt, FaMapMarkerAlt } from "react-icons/fa";
import { ButtonLink, ButtonDownload, SocialLinks } from "@/components";
import "./Hero.scss";

// action links
const actionLinks = [
  {
    label: "Contact",
    href: "/contact",
    icon: <GoArrowUpRight aria-hidden="true" />,
    variant: "primary",
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: <FaFileAlt aria-hidden="true" />,
    variant: "secondary",
    download: true,
  },
];

export default function Hero() {
  return (
    // hero section
    <section className="hero" aria-labelledby="hero-heading">
      {/* hero container */}
      <div className="hero__container">
        {/* hero content */}
        <div className="hero__content">
          {/* greeting */}
          <p className="hero__content--greeting">
            hi there!
            <span className="hero__content--greeting-icon">👋</span>
          </p>

          {/* title */}
          <h1 id="hero-heading" className="hero__content--title">
            <span className="hero__content--title-name">
              I&apos;m Ariantika
            </span>

            <span className="hero__content--title-line">
              <span className="hero__content--title-highlight-sronly">
                and I&apos;m a
              </span>
              <mark className="hero__content--title-highlight">
                Epidemiology &amp; Biostatistics Researcher.
              </mark>
            </span>
          </h1>

          {/* location */}
          <address className="hero__content--location">
            <span className="hero__content--location-icon">
              <FaMapMarkerAlt aria-label="Location" />
            </span>
            <span className="hero__content--location-text">
              based in North Sumatra, Indonesia.
            </span>
          </address>

          {/* description */}
          <p className="hero__content--description">
            I study how diseases spread and evolve through data&#8209;driven
            research, focusing on cancer, infectious, and non&#8209;communicable
            diseases. I aim to turn these insights into meaningful strategies
            that improve and strengthen public health systems.
          </p>

          {/* actions */}
          <div className="hero__content--actions">
            {actionLinks.map((link) => {
              const Button = link.download ? ButtonDownload : ButtonLink;
              return (
                <Button
                  key={link.href}
                  variant={link.variant}
                  size="default"
                  href={link.href}
                  icon={link.icon}
                  className="hero__content--actions-button"
                >
                  {link.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* hero media*/}
        <div className="hero__media">
          {/* hero image */}
          <figure className="hero__media--images">
            <Image
              className="hero__media--images-image-1"
              src={heroPortrait}
              alt="Portrait of Ariantika smiling in a softly lit studio"
              width={520}
              height={520}
              priority
              sizes="(max-width: 778px) 100vw, min(520px, 45vw)"
            />

            <figcaption className="hero__media--image-caption">
              photo by @ariantika
            </figcaption>
          </figure>

          {/* social links */}
          <SocialLinks direction="vertical" className="hero__media--social" />
        </div>
      </div>
    </section>
  );
}
