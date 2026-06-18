import Image from "next/image";

import * as motion from "motion/react-client";

import { servicesMeta, whyChooseMe, servicesPage } from "@/data";
import { Contact } from "@/sections";
import {
  fadeUp,
  mediaReveal,
  scaleIn,
  staggerContainer,
  staggerContainerFast,
  viewportOnce,
} from "@/lib";

import ProcessConnectors from "./ProcessConnectors";

import "./page.scss";

// ---- services page metadata ----
export const metadata = servicesMeta;

// ---- services page ----
export default function ServicesPage() {
  const { header, services } = servicesPage;

  const { header: whyChooseHeader, items: whyChooseItems } = whyChooseMe;

  return (
    <>
      {/* ---- main container ---- */}
      <main className="services__page">
        {/* ---- page header ---- */}
        <motion.header
          className="services__page-header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span
            className="services__page-header-eyebrow"
            variants={fadeUp}
          >
            {header.eyebrow}
          </motion.span>
          <motion.h1 className="services__page-header-title" variants={fadeUp}>
            {/* {header.titleBeforeAccent}{" "} */}
            <span className="services__page-header-title-accent">
              {header.titleAccent}
            </span>
            {/* {header.titleAfterAccent} */}
          </motion.h1>
          <motion.p
            className="services__page-header-subtitle"
            variants={fadeUp}
          >
            {header.subtitle}
          </motion.p>
        </motion.header>

        {/* ---- container ---- */}
        <div className="services__page-container">
          {/* ---- service sections ---- */}
          {services.map((service, i) => (
            <section
              key={service.id}
              id={service.id}
              className={`services__page-section services__page-section--${
                service.theme
              }${i % 2 === 1 ? " services__page-section--reverse" : ""}`}
              aria-labelledby={`${service.id}-title`}
            >
              {/* ---- section heading ---- */}
              <motion.header
                className="services__page-section-head"
                variants={staggerContainerFast}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <motion.span
                  className="services__page-section-number"
                  aria-hidden="true"
                  variants={scaleIn}
                >
                  {service.number}
                </motion.span>
                <motion.h2
                  className="services__page-section-title"
                  id={`${service.id}-title`}
                  variants={fadeUp}
                >
                  {service.title}
                </motion.h2>
              </motion.header>

              {/* ---- description + illustration ---- */}
              <div className="services__page-section-intro">
                <motion.p
                  className="services__page-section-description"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  {service.description}
                </motion.p>

                <motion.figure
                  className="services__page-section-figure"
                  variants={mediaReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  <Image
                    className="services__page-section-image"
                    src={service.image}
                    alt={service.imageAlt}
                    width={2000}
                    height={2000}
                    sizes="(max-width: 1024px) 80vw, 420px"
                  />

                  <figcaption className="services__page-section-figure-caption">
                    {service.figcaption}
                  </figcaption>
                </motion.figure>
              </div>

              {/* ---- what's included ---- */}
              <motion.div
                className="services__page-section-block"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
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
                        <service.list.icon />
                      </span>
                      <span className="services__page-section-list-item-text">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* ---- how this service works ---- */}
              <motion.div
                className="services__page-section-block"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <h3 className="services__page-section-subhead">
                  {service.steps.heading}
                </h3>
                <ProcessConnectors sectionId={service.id}>
                  {service.steps.items.map(
                    ({ number, title, icon: Icon }, i) => (
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
                    ),
                  )}
                </ProcessConnectors>
              </motion.div>
            </section>
          ))}
        </div>

        {/* ---- why choose me section ---- */}
        <section
          className="services__page-why-choose"
          aria-labelledby="why-choose-me-heading"
        >
          {/* ---- container ---- */}
          <div className="services__why-choose-container">
            {/* ---- header ---- */}
            <motion.header
              className="services__why-choose-header"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.h2
                className="services__why-choose-header-title"
                id="why-choose-me-heading"
                variants={fadeUp}
              >
                {whyChooseHeader.prefix}{" "}
                <span className="services__why-choose-header-title-accent">
                  {whyChooseHeader.accent}{" "}
                </span>
                {whyChooseHeader.suffix}
              </motion.h2>
              <motion.p
                className="services__why-choose-header-description"
                variants={fadeUp}
              >
                {whyChooseHeader.description}
              </motion.p>
            </motion.header>

            {/* ---- grid items ---- */}
            <motion.ul
              className="services__why-choose-grid"
              variants={staggerContainerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {whyChooseItems.map(
                ({ title: itemTitle, description, icon: Icon }) => (
                  <motion.li
                    key={itemTitle}
                    className="services__why-choose-item"
                    variants={scaleIn}
                  >
                    <span
                      className="services__why-choose-icon"
                      aria-hidden="true"
                    >
                      <Icon strokeWidth={1.7} />
                    </span>
                    <h3 className="services__why-choose-item-title">
                      {itemTitle}
                    </h3>
                    <p className="services__why-choose-item-description">
                      {description}
                    </p>
                  </motion.li>
                ),
              )}
            </motion.ul>
          </div>
        </section>

        {/* ---- contact section ---- */}
        <Contact />
      </main>
    </>
  );
}
