"use client";

import { motion } from "framer-motion";
import { site, footer as footerData } from "@/data";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            {footerData.cta}{" "}
            <span className={styles.ctaHighlight}>{footerData.ctaHighlight}</span>
          </h2>
        </motion.div>

        <div className={styles.main}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              {site.name.split(" ")[0]}
            </a>
            <a href={`mailto:${site.email}`} className={styles.email}>
              {site.email}
            </a>
          </div>

          <div className={styles.columns}>
            {footerData.columns.map((col) => (
              <div key={col.title} className={styles.column}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
