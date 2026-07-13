"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components";
import "./Navigation.scss";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/aboutme" },
  { label: "Services", href: "/services" },
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
        {links.map((link) => {
          const active = isActive(link.href);

          return (
            <li
              className={`navigation__list-item ${active ? "active" : ""}`}
              key={link.href}
            >
              <ButtonLink
                href={link.href}
                variant="ghost"
                className={`navigation__list-item--link ${
                  active ? "active" : ""
                }`}
                size="small"
                aria-current={active ? "page" : undefined}
                onPress={onNavigate}
              >
                <span className="navigation__list-item--link-text">
                  {link.label}
                </span>
              </ButtonLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
