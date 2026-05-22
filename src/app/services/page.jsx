import Image from "next/image";

import { Header } from "@/components";
import { servicesFull, servicesPage } from "@/data";
import { FaCircleCheck } from "react-icons/fa6";
import ProcessConnectors from "./ProcessConnectors";

import "./page.scss";

export const metadata = servicesPage.metadata;

export default function ServicesPage() {
  const { header, processHeading, figureCaption } = servicesPage;

  return (
    <>
      {/* header */}
      <Header />

      {/* main */}
      <main className="services__page">
        {/* page header */}
        <header className="services__page-header">
          <span className="services__page-header-eyebrow">
            {header.eyebrow}
          </span>
          <h1 className="services__page-header-title">
            {header.titleBeforeAccent}{" "}
            <span className="services__page-header-title-accent">
              {header.titleAccent}
            </span>
            {header.titleAfterAccent}
          </h1>
          <p className="services__page-header-subtitle">{header.subtitle}</p>
        </header>

        {/* container */}
        <div className="services__page-container">
          {/* service sections */}
          {servicesFull.map((service, i) => (
            <section
              key={service.id}
              id={service.id}
              className={`services__page-section services__page-section--${
                service.theme
              }${i % 2 === 1 ? " services__page-section--reverse" : ""}`}
              aria-labelledby={`${service.id}-title`}
            >
              {/* section heading */}
              <header className="services__page-section-head">
                <span
                  className="services__page-section-number"
                  aria-hidden="true"
                >
                  {service.number}
                </span>
                <h2
                  className="services__page-section-title"
                  id={`${service.id}-title`}
                >
                  {service.title}
                </h2>
              </header>

              {/* description + illustration */}
              <div className="services__page-section-intro">
                <p className="services__page-section-description">
                  {service.description}
                </p>

                <figure className="services__page-section-figure">
                  <Image
                    className="services__page-section-image"
                    src={service.image}
                    alt={service.imageAlt}
                    width={520}
                    height={520}
                    sizes="(max-width: 1024px) 80vw, 420px"
                  />

                  <figcaption className="services__page-section-figure-caption">
                    {figureCaption}
                  </figcaption>
                </figure>
              </div>

              {/* what's included */}
              <div className="services__page-section-block">
                <h3 className="services__page-section-subhead">
                  {service.list.heading}
                </h3>
                <ul className="services__page-section-list-items">
                  {service.list.items.map((item) => (
                    <li key={item} className="services__page-section-list-item">
                      <span
                        className="services__page-section-list-item-icon"
                        aria-hidden="true"
                      >
                        <FaCircleCheck />
                      </span>
                      <span className="services__page-section-list-item-text">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* how this service works */}
              <div className="services__page-section-block">
                <h3 className="services__page-section-subhead">
                  {processHeading}
                </h3>
                <ProcessConnectors sectionId={service.id}>
                  {service.steps.map(({ number, title, icon: Icon }, i) => (
                    <li
                      key={number}
                      className="services__page-section-process-item"
                      style={{ "--i": i }}
                    >
                      <span
                        id={`${service.id}-process-marker-${i}`}
                        className="services__page-section-process-marker"
                        aria-hidden="true"
                      >
                        <Icon />
                      </span>

                      <h4 className="services__page-section-process-title">
                        {title}
                      </h4>
                    </li>
                  ))}
                </ProcessConnectors>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
