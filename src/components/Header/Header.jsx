"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button/Button";
import { site, nav } from "@/data";
import styles from "./Header.module.scss";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          {site.name.split(" ")[0]}
        </a>

        <nav className={styles.nav}>
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href="#contact" variant="secondary">
            Work with me!
          </Button>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileNav}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" className={styles.mobileCta}>
              Work with me!
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
