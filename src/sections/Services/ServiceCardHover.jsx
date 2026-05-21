"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const cursorVariants = {
  initial: { scale: 0, opacity: 0 },
  hover: { scale: 1, opacity: 1 },
};

export default function ServiceCardHover({ children }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 500, damping: 30, mass: 0.7 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

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

  return (
    <motion.li
      ref={cardRef}
      className="services__card"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      initial="initial"
      whileHover="hover"
    >
      {children}

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
