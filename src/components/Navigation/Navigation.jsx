"use client";

import Link from "next/link";
import styles from "./Navigation.module.scss";

export default function Nav({
  items,
  className = "",
  linkClassName = "",
  onLinkClick,
}) {
  return (
    <nav className={`${styles.nav} ${className}`.trim()}>
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`${styles.navLink} ${linkClassName}`.trim()}
          onClick={onLinkClick}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
