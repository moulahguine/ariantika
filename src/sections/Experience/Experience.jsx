"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { SectionHeader } from "@/components";
import { experienceSection } from "@/data";
import { fadeUp, staggerContainerFast, viewportOnce } from "@/lib";

import "./Experience.scss";

/*
I originally wanted to use the <details> and <summary> elements to handle 
expanding and collapsing each experience item. However, there's a CSS feature
called calc-size() that allows animating elements to their intrinsic size without
relying on JavaScript.

Combined with transition-behavior: allow-discrete, this would provide a smoother
and more modern solution. Since transition-behavior: allow-discrete is now
supported across major browsers, I'd like to take advantage of it where possible.

Could you check whether the browser supports the calc-size() function? 
If it does, keep the current implementation and use CSS-based animations. If it
doesn't, fall back to using <details> and <summary> for the expand/collapse behavior.
*/

export default function Experience() {
  const {
    experienceHeadingId,
    header,
    icon: ChevronIcon,
    items,
  } = experienceSection;
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    // ---- experience section ----
    <section className="experience" aria-labelledby={experienceHeadingId}>
      {/* ---- section header ---- */}
      <SectionHeader
        headingId={experienceHeadingId}
        className="experience__header"
        prefix={header.prefix}
        accent={header.accent}
        subtitle={header.subtitle}
      />

      {/* ---- container ---- */}
      <motion.ul
        className="experience__container"
        aria-label="Experience list"
        variants={staggerContainerFast}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {items.map((item) => {
          const isOpen = openId === item.id;

          // ---- item ----
          return (
            <motion.li
              key={item.id}
              className={`experience__item ${
                isOpen ? "experience__item--open" : ""
              }`}
              variants={fadeUp}
            >
              {/* ---- head summary ---- */}
              <button
                className="experience__head"
                onClick={() => handleToggle(item.id)}
                aria-expanded={isOpen}
                aria-label={`Experience ${item.role} at ${item.company}`}
                aria-controls={`experience-content-${item.id}`}
              >
                {/* ---- image ---- */}
                <div className="experience__image" aria-hidden="true">
                  {item.logo ? (
                    <Image
                      className="experience__image-logo"
                      src={item.logo}
                      alt={item.logoAlt}
                      width={56}
                      height={56}
                    />
                  ) : (
                    // ---- initial is for fallback ----
                    <span
                      className="experience__image-initials"
                      aria-hidden="true"
                    >
                      {item.initials}
                    </span>
                  )}
                </div>
                {/* ---- info ---- */}
                <div className="experience__info">
                  {/* ---- identity ---- */}
                  <div className="experience__identity">
                    {/* ---- role ---- */}
                    <h3 className="experience__role">{item.role}</h3>

                    {/* ---- company ---- */}
                    <p className="experience__company">{item.company}</p>

                    {/* ---- employment ---- */}
                    {item.employmentType && (
                      <div className="experience__employment">
                        {/* ---- type ---- */}
                        <span className="experience__employment-type">
                          {item.employmentType},
                        </span>

                        {/* ---- duration ---- */}
                        {item.duration && (
                          <span className="experience__employment-duration">
                            {` (+${item.duration.years} years)`}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  {/* ---- meta ---- */}
                  <div className="experience__meta">
                    {/* ---- head summary -> meta - period ---- */}
                    <p className="experience__period">{item.period}</p>

                    {/* ---- head summary -> meta - location ---- */}
                    <p className="experience__location">{item.location}</p>
                  </div>
                </div>

                {/* ---- chevron ---- */}
                <motion.div
                  className="experience__chevron-container"
                  aria-hidden="true"
                  animate={{
                    rotate: isOpen ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <ChevronIcon className="experience__chevron" />
                </motion.div>
              </button>

              {/* ---- content ---- */}
              <motion.div
                className="experience__content"
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{
                  height: {
                    duration: 0.35,
                  },
                  opacity: {
                    duration: 0.2,
                  },
                }}
                style={{
                  overflow: "hidden",
                }}
              >
                {/* ---- details ---- */}
                {item.details?.length > 0 ? (
                  <ul className="experience__details">
                    {item.details.map((detail, detailIndex) => (
                      // ---- list ----
                      <motion.li
                        key={`${item.id}-detail-${detailIndex}`}
                        className="experience__detail"
                        variants={fadeUp}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                ) : null}
              </motion.div>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
