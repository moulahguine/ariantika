"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/data";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.titleHighlight}>T</span>
          hat&apos;s me!
        </motion.h2>
        <div className={styles.content}>
          <motion.p
            className={styles.bio}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {about.bio}
          </motion.p>
          <div className={styles.gallery}>
            {about.images.map((src, i) => (
              <motion.div
                key={src}
                className={`${styles.imageWrap} ${i === 0 ? styles.large : ""}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Image
                  src={src}
                  alt={`About ${i + 1}`}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
