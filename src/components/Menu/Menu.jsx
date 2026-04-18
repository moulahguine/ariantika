"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RemoveScroll } from "react-remove-scroll";
import { Navigation, SocialLinks } from "@/components";
import "./Menu.scss";

export default function Menu({ isOpen, onClose, headerHeight = 0 }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <RemoveScroll enabled={isOpen}>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.aside
            className="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            style={{ "--header-height": `${headerHeight}px` }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Navigation
              className={`menu__navigation ${
                isOpen ? "menu__navigation--open" : ""
              }`}
              variant="mobile"
              onNavigate={onClose}
            />

            <SocialLinks
              direction="horizontal"
              className="menu__social"
              onItemClick={onClose}
            />
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </RemoveScroll>
  );
}
