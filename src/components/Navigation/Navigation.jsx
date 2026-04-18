"use client";

import Link from "next/link";
import "./Navigation.scss";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const MotionLink = motion.create(Link);

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation({
  className = "",
  variant = "desktop",
  onNavigate,
}) {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  const isMobile = variant === "mobile";

  return (
    <nav
      className={`navigation ${
        isMobile ? "navigation--mobile" : ""
      } ${className}`}
      aria-label="Primary"
    >
      <ul
        className={`navigation__list ${
          isMobile ? "navigation__list--mobile" : ""
        }`}
      >
        {links.map((link) => (
          <li
            className={`navigation__list-item ${
              isActive(link.href) ? "active" : ""
            }`}
            key={link.href}
          >
            <MotionLink
              href={link.href}
              className="navigation__list-item--link"
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              onClick={() => onNavigate()}
            >
              <span
                className={`navigation__list-item--link-text ${
                  isActive(link.href) ? "active" : ""
                }`}
              >
                {link.label}
              </span>
            </MotionLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
