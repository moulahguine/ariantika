"use client";

import * as motion from "motion/react-client";
import { usePathname } from "next/navigation";
import { Button } from "@/components";
import { fadeUpLight, staggerContainer } from "@/lib";
import "./Navigation.scss";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/aboutme" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation({
  className = "",
  direction = "horizontal",
  onNavigate,
}) {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  const isVertical = direction === "vertical";

  return (
    <nav className={`navigation navigation--${direction} ${className}`.trim()}>
      <motion.ul
        className={`navigation__list ${
          isVertical ? "navigation__list--vertical" : ""
        }`}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {links.map((link) => {
          const active = isActive(link.href);

          return (
            <motion.li
              className="navigation__list--item"
              key={link.href}
              variants={fadeUpLight}
            >
              <Button
                href={link.href}
                variant="ghost"
                size="default"
                className={`navigation__list--link ${
                  active ? "navigation__list--link--active" : ""
                }`}
                aria-current={active ? "page" : undefined}
                onPress={onNavigate}
              >
                {link.label}
              </Button>
            </motion.li>
          );
        })}
      </motion.ul>
    </nav>
  );
}
