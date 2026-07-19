import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components";
import { servicesSection } from "@/data";
import ServiceCardHover from "./ServiceCardHover";

import "./Services.scss";

export default function Services() {
  const { servicesHeadingId, header, cards } = servicesSection;

  return (
    <section className="services" aria-labelledby={servicesHeadingId}>
      {/* ---- section header ---- */}
      <SectionHeader
        headingId={servicesHeadingId}
        prefix={header.prefix}
        accent={header.accent}
        subtitle={header.subtitle}
      />

      {/* ---- services container ---- */}
      <ul className="services__container">
        {cards.map((card) => (
          <ServiceCardHover key={card.id} index={card.id}>
            {/* ---- service card link ---- */}
            <Link
              href={card.href}
              className="services__link"
              aria-label={`This link leads to the ${card.title} service.`}
            >
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
                <h3 className="services__title">{card.title}</h3>

                <p className="services__description">{card.description}</p>

                <ul className="services__bullets">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="services__bullet">
                      <span
                        className="services__bullet-icon"
                        aria-hidden="true"
                      >
                        <card.icon />
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
