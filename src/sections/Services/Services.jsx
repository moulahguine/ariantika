import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiLayout4Line } from "react-icons/ri";

import "./Services.scss";

const services = [
  {
    title: "Research Design",
    description:
      "Designing robust epidemiological studies with clear methodology and measurable outcomes.",
    icon: <MdOutlineDesignServices aria-hidden="true" />,
    href: "/services#research-design",
  },
  {
    title: "Data Analysis",
    description:
      "Biostatistical analysis and interpretation to transform raw health data into actionable insight.",
    icon: <RiLayout4Line aria-hidden="true" />,
    href: "/services#data-analysis",
  },
  {
    title: "Scientific Writing",
    description:
      "Supporting manuscripts, reports, and publication-ready outputs for academic collaboration.",
    icon: <HiMiniPencilSquare aria-hidden="true" />,
    href: "/services#scientific-writing",
  },
];

export default function Services() {
  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="services__container">
        <header className="services__header">
          <div className="services__title-wrap">
            <p className="services__eyebrow">Services</p>
            <h2 className="services__title" id="services-heading">
              <span className="services__title-highlight">Services</span> I
              Provide
            </h2>
          </div>

          <Link className="services__cta" href="/services">
            <span className="services__cta-text">View All Services</span>
            <span className="services__cta-icon" aria-hidden="true">
              <GoArrowRight />
            </span>
          </Link>
        </header>

        <ul className="services__grid">
          {services.map((service) => (
            <li className="services__card" key={service.title}>
              <span className="services__card-icon">{service.icon}</span>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-description">
                {service.description}
              </p>
              <Link className="services__card-link" href={service.href}>
                Learn more
                <GoArrowRight aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
