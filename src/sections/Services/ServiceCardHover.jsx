"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useMediaQuery } from "react-responsive";
import {
  deckSpreadCard,
  DECK_SPREAD_DESKTOP_MEDIA,
  hoverPop,
  viewportOnce,
} from "@/lib";
import { servicesSection } from "@/data";

export default function ServiceCardHover({ children, index = 0 }) {
  const { cursor } = servicesSection;
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // ---- spring config ----
  const springConfig = { stiffness: 300, damping: 30, mass: 0.7 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // ---- set cursor position ----
  const setCursorPosition = (event, immediate = false) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;

    if (immediate) {
      x.jump(px);
      y.jump(py);
      springX.jump(px);
      springY.jump(py);
    } else {
      x.set(px);
      y.set(py);
    }
  };

  const handleMouseEnter = (event) => setCursorPosition(event, true);
  const handleMouseMove = (event) => setCursorPosition(event, false);

  const matchesDesktop = useMediaQuery({ query: DECK_SPREAD_DESKTOP_MEDIA });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 0);
  }, []);

  const isDesktop = mounted && matchesDesktop;

  return (
    // ---- service card ----
    <motion.li
      key={`${index}-${isDesktop}`}
      ref={cardRef}
      className="services__card"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      variants={deckSpreadCard}
      custom={{ index, isDesktop }}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={viewportOnce}
    >
      {/* ---- children ---- */}
      {children}

      {/* ---- cursor ---- */}
      <motion.span
        className="services__cursor"
        style={{ x: springX, y: springY }}
        variants={hoverPop}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        aria-hidden="true"
      >
        {cursor.icon && <cursor.icon />}
      </motion.span>
    </motion.li>
  );
}
