"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BiSolidVirus } from "react-icons/bi";

import "./Banner.scss";

const bannerItems = [
  "Epidemiology",
  "Biostatistics",
  "Public Health",
  "Cancer Research",
  "Infectious Diseases",
  "Data-Driven Insights",
  "Healthcare Impact",
];

const REPEAT_COUNT = 2;
const SCROLL_SPEED = 70;

// Repeat the banner items to create a loop
const repeatedItems = Array.from(
  { length: REPEAT_COUNT },
  () => bannerItems
).flat();

// Banner group component
function BannerGroup({ itemKeyPrefix, groupRef }) {
  return (
    <ul className="banner__group" aria-hidden="true" ref={groupRef}>
      {repeatedItems.map((item, index) => (
        <li className="banner__item" key={`${itemKeyPrefix}-${item}-${index}`}>
          <span className="banner__item-label">{item}</span>
          <span className="banner__item-separator" aria-label="Separator">
            <BiSolidVirus aria-hidden="true" />
          </span>
        </li>
      ))}
    </ul>
  );
}

// Main banner component
export default function Banner() {
  const prefersReducedMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const [loopWidth, setLoopWidth] = useState(0);
  const firstGroupRef = useRef(null);
  const x = useMotionValue(0);

  // Update the loop width when the window is resized
  useEffect(() => {
    const updateLoopWidth = () => {
      if (firstGroupRef.current) {
        setLoopWidth(firstGroupRef.current.offsetWidth);
      }
    };

    updateLoopWidth();
    window.addEventListener("resize", updateLoopWidth);

    return () => window.removeEventListener("resize", updateLoopWidth);
  }, []);

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion || isPaused || loopWidth === 0) return;

    const moveBy = (SCROLL_SPEED * delta) / 1000;
    const next = x.get() - moveBy;
    x.set(next <= -loopWidth ? next + loopWidth : next);
  });

  return (
    <section
      className="banner"
      aria-label="Research expertise marquee"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="banner__surface">
        <motion.div
          className="banner__track"
          style={{ x: prefersReducedMotion ? 0 : x }}
        >
          <BannerGroup itemKeyPrefix="group-a" groupRef={firstGroupRef} />
          <BannerGroup itemKeyPrefix="group-b" />
        </motion.div>
      </div>
    </section>
  );
}
