"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

import scientificWritingImg from "@/assets/images/services/scientific-writing.svg";
import researchDesignImg from "@/assets/images/services/research-design.svg";
import copyEditingImg from "@/assets/images/services/copy-editing.svg";

import { FaCheckCircle } from "react-icons/fa";

import "./Services.scss";

const services = [
  {
    title: "Scientific Writing & Publishing",

    description:
      "Supporting the development of academic manuscripts, including structuring research papers, preparing journal submissions, and aligning work with international publication standards.",
    shortDescription:
      "Supporting academic writing and journal submission in line with publication standards.",
    bullets: [
      "Structure research papers for journal submission",
      "Write and improve key sections",
      "Format manuscripts based on journal guidelines",
      "Support literature review and references",
      "Assist with revisions and reviewer responses",
    ],
    image: scientificWritingImg,
    imageAlt:
      "Illustration of a researcher at a desk beside a glowing light bulb and a speech bubble filled with lines of text, surrounded by clouds, stars and paper airplanes — representing ideas turned into published manuscripts.",
    href: "/services",
  },
  {
    title: "Research Design & Data Analysis",
    description:
      "Designing epidemiological studies and conducting statistical analysis using SPSS to produce clear, reliable, and publication-ready results.",

    shortDescription:
      "Designing studies and analyzing data with SPSS for reliable, publication-ready results.",
    bullets: [
      "Design epidemiological and public health studies",
      "Analyze data using SPSS",
      "Clean and prepare datasets",
      "Apply appropriate statistical methods",
      "Interpret results for research and publication",
    ],
    image: researchDesignImg,
    imageAlt:
      "Illustration of a woman reviewing a tall clipboard of research questions and data next to a notebook showing an ascending bar chart and upward trend line, with a magnifying-glass speech bubble — representing study design and statistical analysis.",
    href: "/services",
  },
  {
    title: "Copy Editing & Translation",
    description:
      "Editing and refining academic manuscripts to improve clarity, structure, and alignment with publication standards, along with accurate translation for international research communication.",
    shortDescription:
      "Refining academic writing and providing accurate translation for international research.",
    bullets: [
      "Improve clarity and structure of academic writing",
      "Align manuscripts with publication standards",
      "Edit grammar and technical language",
      "Translate research for international use",
      "Ensure accuracy and context in translations",
    ],
    image: copyEditingImg,
    imageAlt:
      "Illustration of an editor working at a laptop that displays text in both English and Chinese characters, with a stack of books alongside and a faint world-map backdrop — representing multilingual copy editing and translation.",
    href: "/services",
  },
];

const cursorVariants = {
  initial: { scale: 0, opacity: 0 },
  hover: { scale: 1, opacity: 1 },
  tap: { scale: 0.95, opacity: 1 },
};

// Service Card Component
function ServiceCard({ service }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 500, damping: 30, mass: 0.7 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (event) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  const handleMouseEnter = (event) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.jump(event.clientX - rect.left);
    y.jump(event.clientY - rect.top);
  };

  return (
    // Service Card Component
    <motion.li
      ref={cardRef}
      className="services__card"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      {/* Service Card Link */}
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

      <motion.span
        className="services__card-cursor"
        style={{ x: springX, y: springY }}
        variants={cursorVariants}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        aria-hidden="true"
      >
        Click
      </motion.span>
    </motion.li>
  );
}

// Services Section Component
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
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
}
