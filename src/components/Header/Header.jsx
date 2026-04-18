"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Logo, Navigation, Menu } from "@/components";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import "./Header.scss";

const MOBILE_NAV_MEDIA = "(max-width: 767px)";

export default function Header() {
  const isMobileNav = useMediaQuery({ query: MOBILE_NAV_MEDIA });
  const [isMounted, setIsMounted] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // close and toggle the menu
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);
  const isMobileMenuOpen = isMobileNav && menuOpen;

  // hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // mount the header
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // update the header height
  useEffect(() => {
    if (!headerRef.current) return undefined;

    const updateHeight = () => {
      setHeaderHeight(headerRef.current?.offsetHeight ?? 0);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(headerRef.current);

    window.addEventListener("resize", updateHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // render the header
  return (
    <motion.header
      ref={headerRef}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={`header ${isMobileMenuOpen ? "header--mobile-menu-open" : ""}`}
    >
      <div className="header__container">
        {/* logo */}
        <Logo />

        {/* menu open button */}
        {isMounted && isMobileNav ? (
          <button
            type="button"
            className={`header__menu-open ${
              isMobileMenuOpen ? "header__menu-open--active" : ""
            }`}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            <span className="header__menu-line" aria-hidden="true" />
            <span className="header__menu-line" aria-hidden="true" />
            <span className="header__menu-line" aria-hidden="true" />
          </button>
        ) : null}

        {/* navigation */}
        {isMounted && !isMobileNav ? (
          <Navigation className="header__navigation" />
        ) : null}
      </div>

      {/* mobile menu */}
      <Menu
        isOpen={isMobileMenuOpen}
        onClose={closeMenu}
        headerHeight={headerHeight}
      />
    </motion.header>
  );
}
