"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { Logo, Navigation, Menu } from "@/components";
import {
  stickyBarReveal,
  stickyBarTransition,
  useHideOnScrollDown,
} from "@/lib";
import { motion } from "motion/react";

import "./Header.scss";

const MOBILE_NAV_MEDIA = "(max-width: 767px)";

export default function Header() {
  const pathname = usePathname();
  const isMobileNav = useMediaQuery({ query: MOBILE_NAV_MEDIA });
  const [isMounted, setIsMounted] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const hidden = useHideOnScrollDown();

  // close and toggle the menu
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);
  const isMobileMenuOpen = isMobileNav && menuOpen;

  useEffect(() => {
    setTimeout(() => {
      setMenuOpen(false);
    }, 100);
  }, [pathname]);

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

  return (
    // ---- header ----
    <motion.header
      ref={headerRef}
      variants={stickyBarReveal}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={stickyBarTransition}
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
