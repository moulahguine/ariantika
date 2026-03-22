"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">Ariantika</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={closeMobileNav}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA / Actions */}
        <div className={styles.actions}>
          <Link href="#contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={toggleMobileNav}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileNavOpen && (
        <nav className={styles.mobileNav}>
          <div className={styles.mobileNavLinks}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={closeMobileNav}
              >
                {link.label}
              </a>
            ))}
            <div className={styles.mobileCta}>
              <Link
                href="#contact"
                className="btn btn-primary"
                onClick={closeMobileNav}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
