"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { socialLinks } from "@/data/socialLinks";

import "./SocialLinks.scss";

const MotionLink = motion.create(Link);

const MOBILE_NAV_MEDIA = "(max-width: 767px)";

export default function SocialLinks({
  direction = "vertical",
  showLabel = false,
  className = "",
  onItemClick,
}) {
  const [activeId, setActiveId] = useState(null);
  const isVertical = direction === "vertical";
  const useFloatingLabel = isVertical && !showLabel;
  const rootClassName = `social-links social-links--${
    isVertical ? "vertical" : "horizontal"
  } ${className}`.trim();
  const isMobile = useMediaQuery({ query: MOBILE_NAV_MEDIA });

  return (
    <ul className={rootClassName} aria-label="Social links">
      {socialLinks.map((link) => {
        const isActive = activeId === link.id;
        const shouldShowLabel = showLabel || (!isMobile && isActive);

        return (
          <motion.li
            key={link.id}
            className={`social-links__item social-links__item--${link.id}`}
            style={{ "--color-link": link.color }}
            animate={{ backgroundColor: isActive ? link.color : "#0f4c81" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onHoverStart={() => setActiveId(link.id)}
            onHoverEnd={() => setActiveId(null)}
            onFocusCapture={() => setActiveId(link.id)}
            onBlurCapture={() => setActiveId(null)}
          >
            <MotionLink
              className="social-links__link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onItemClick?.()}
              animate={{
                gap: useFloatingLabel ? "0px" : shouldShowLabel ? "8px" : "0px",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {link.icon}
              <motion.span
                className={`social-links__label ${
                  useFloatingLabel ? "social-links__label--floating" : ""
                }`}
                animate={{
                  width: useFloatingLabel ? "auto" : shouldShowLabel ? 65 : 0,
                  opacity: shouldShowLabel ? 1 : 0,
                  x: useFloatingLabel ? (shouldShowLabel ? 0 : -8) : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {link.label}
              </motion.span>
            </MotionLink>
          </motion.li>
        );
      })}
    </ul>
  );
}
