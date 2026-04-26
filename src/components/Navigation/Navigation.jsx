"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components";
import "./Navigation.scss";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/aboutme" },
  { label: "Services", href: "/services" },
  // { label: "Experience", href: "/experience" },
  // { label: "Contact", href: "/contact" },
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
            <ButtonLink
              href={link.href}
              variant="ghost"
              className={`navigation__list-item--link ${
                isActive(link.href) ? "active" : ""
              }`}
              classNameContent="navigation__list-item--link-text"
              size="small"
              onPress={onNavigate}
            >
              {link.label}
            </ButtonLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
