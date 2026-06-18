// ---- next/image imports ----
import Image from "next/image";
import Link from "next/link";

// ---- components imports ----
import { SectionHeader } from "@/components";
import ServiceCardHover from "./ServiceCardHover";

// ---- data imports ----
import { servicesSection } from "@/data";

// ---- react-icons imports ----
import { FaCheckCircle } from "react-icons/fa";

// ---- styles ----
import "./Services.scss";

// ---- services section ----
export default function Services() {
  const { header, cards } = servicesSection;

  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-heading"
    >
      {/* ---- section header ---- */}
      <SectionHeader
        headingId={header.id}
        prefix={header.prefix}
        accent={header.accent}
        subtitle={header.subtitle}
        accentTag="small"
      />

      {/* ---- services container ---- */}
      <ul className="services__container">
        {cards.map((card, index) => (
          <ServiceCardHover key={card.title} index={index}>
            {/* ---- service card link ---- */}
            <Link href={card.href} className="services__link">
              {/* ---- service card media ---- */}
              <div className="services__media">
                {card.image && (
                  <Image
                    className="services__image"
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                )}
              </div>

              {/* ---- service card body ---- */}
              <div className="services__body">
                {/* ---- service card title ---- */}
                <h3 className="services__title">{card.title}</h3>
                {/* ---- service card description ---- */}
                <p className="services__description">{card.description}</p>
                {/* ---- service card bullets ---- */}
                <ul className="services__bullets">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="services__bullet">
                      <span className="services__bullet-icon">
                        <card.icon aria-hidden="true" />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </ServiceCardHover>
        ))}
      </ul>
    </section>
  );
}
