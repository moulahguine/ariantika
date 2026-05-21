import Image from "next/image";
import Link from "next/link";

import { servicesPreview } from "@/data/services";

import { FaCheckCircle } from "react-icons/fa";

import ServiceCardHover from "./ServiceCardHover";

import "./Services.scss";

export default function Services() {
  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="services__container">
        <header
          className="services__header"
          id="services-header"
          aria-labelledby="services-header-heading"
        >
          <h2 className="services__header-title" id="services-header-heading">
            <small className="services__header-title-accent">Research</small>{" "}
            Services
          </h2>
          <p className="services__header-subtitle">
            here are the services I provide to help you with your research and
            publishing work.
          </p>
        </header>

        <ul className="services__grid">
          {servicesPreview.map((service) => (
            <ServiceCardHover key={service.title}>
              <Link href={service.href} className="services__card-link">
                <div className="services__card-media">
                  {service.image && (
                    <Image
                      className="services__card-image"
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  )}
                </div>

                <div className="services__card-body">
                  <h3 className="services__card-title">{service.title}</h3>
                  <p className="services__card-description">
                    {service.shortDescription}
                  </p>

                  <ul className="services__card-bullets">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="services__card-bullet">
                        <span className="services__card-bullet-icon">
                          <FaCheckCircle aria-hidden="true" />
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
      </div>
    </section>
  );
}
