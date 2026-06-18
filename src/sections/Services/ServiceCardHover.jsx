"use client";

// ---- dependencies ----
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useMediaQuery } from "react-responsive";

// ---- libraries ----
import { deckSpreadCard, hoverPop, viewportOnce } from "@/lib";

// matches Services.scss $breakpoint-lg — 3-column grid only above this width
const DESKTOP_DECK_MEDIA = "(min-width: 1279px)";

// ---- data ----
import { servicesSection } from "@/data";

// ---- service card hover (cursor) ----
export default function ServiceCardHover({ children, index = 0 }) {
  const { cursor } = servicesSection;
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // ---- spring config ----
  const springConfig = { stiffness: 500, damping: 30, mass: 0.7 };
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

  // ---- handle mouse enter ----
  const handleMouseEnter = (event) => setCursorPosition(event, true);

  // ---- handle mouse move ----
  const handleMouseMove = (event) => setCursorPosition(event, false);

  const matchesDesktop = useMediaQuery({ query: DESKTOP_DECK_MEDIA });
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
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        aria-hidden="true"
      >
        {cursor.icon && <cursor.icon aria-hidden="true" />}
      </motion.span>
    </motion.li>
  );
}
