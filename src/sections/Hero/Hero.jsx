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
    size: "default",
  },
  {
    label: "Resume",
    href: "/documents/Ariantika_Public_Health_CV.pdf",
    icon: <FaFileAlt aria-hidden="true" />,
    variant: "secondary",
    download: true,
    size: "default",
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
            Conducting research in cancer, infectious, and
            non&#8209;communicable diseases. Experienced in research design,
            statistical analysis using{" "}
            <abbr
              title="Statistical Package for the Social Sciences"
              className="hero__content--description-abbreviation"
              tabIndex={0}
              data-tooltip="Statistical Package for the Social Sciences"
            >
              SPSS
            </abbr>
            , and translating data into insights that strengthen public health
            systems.
          </p>

          {/* actions */}
          <div className="hero__content--actions">
            {actionLinks.map((link) => {
              const Button = link.download ? ButtonDownload : ButtonLink;
              return (
                <Button
                  key={link.href}
                  className="hero__content--actions-button"
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

        {/* hero media*/}
        <div className="hero__media">
          {/* hero image */}
          <figure className="hero__media--images">
            <Image
              className="hero__media--images-image"
              src={heroPortrait}
              alt="Ariantika smiling at the camera, wearing a cream hijab, round eyeglasses, and a white Genomic Science Day T-shirt with a light-blue lanyard, raising her right hand in a peace sign at an indoor research event."
              width={520}
              height={520}
              priority
              sizes="(max-width: 778px) 100vw, min(520px, 45vw)"
            />

            {/* experience badge */}
            <span
              className="hero__media--badge"
              role="img"
              aria-label="8 plus years of research experience"
            >
              <svg
                className="hero__media--badge-svg"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="hero-badge-curve"
                    d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                  />
                </defs>
                <text className="hero__media--badge-text">
                  <textPath href="#hero-badge-curve" startOffset="0">
                    Research Experience • Researcher • Public Health •
                  </textPath>
                </text>
              </svg>

              <div className="hero__media--badge-center">
                <span className="hero__media--badge-number">8+</span>
                <span className="hero__media--badge-label">Years</span>
              </div>
            </span>

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
