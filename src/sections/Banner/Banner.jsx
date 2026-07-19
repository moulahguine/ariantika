"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

import { fadeIn, viewportOnce } from "@/lib";
import { banner } from "@/data";

import "./Banner.scss";

const { ariaLabel, items, marquee, separator } = banner;
const { repeatCount, scrollSpeed } = marquee;
const SeparatorIcon = separator.icon;

const repeatedItems = Array.from({ length: repeatCount }, () => items).flat();

// ---- banner group component ----
function BannerGroup({ itemKeyPrefix, groupRef }) {
  return (
    <ul className="banner__group" ref={groupRef}>
      {repeatedItems.map((item, index) => (
        <li className="banner__item" key={`${itemKeyPrefix}-${item}-${index}`}>
          <span className="banner__label">{item}</span>
          <span className="banner__separator">
            <SeparatorIcon />
          </span>
        </li>
      ))}
    </ul>
  );
}

// ---- main banner component ----
export default function Banner() {
  const prefersReducedMotion = useReducedMotion();
  const [loopWidth, setLoopWidth] = useState(0);
  const firstGroupRef = useRef(null);
  const x = useMotionValue(0);

  // ---- update loop width ----
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

  // ---- animate the banner ----
  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion || loopWidth === 0) return;

    const moveBy = (scrollSpeed * delta) / 2000;
    const next = x.get() - moveBy;
    x.set(next <= -loopWidth ? next + loopWidth : next);
  });

  return (
    // ---- banner section ----
    <section className="banner" aria-hidden="true">
      <motion.div
        className="banner__surface"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div
          className="banner__track"
          style={{ x: prefersReducedMotion ? 0 : x }}
        >
          <BannerGroup itemKeyPrefix="group-a" groupRef={firstGroupRef} />
          <BannerGroup itemKeyPrefix="group-b" />
        </motion.div>
      </motion.div>
    </section>
  );
}
