"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";
import { hero } from "@/data";
import styles from "./Hero.module.scss";

export default function Hero() {
  const highlightIndex = hero.headline.toLowerCase().indexOf(hero.highlight.toLowerCase());
  const beforeHighlight = hero.headline.slice(0, highlightIndex);
  const highlighted = hero.headline.slice(highlightIndex, highlightIndex + hero.highlight.length);
  const afterHighlight = hero.headline.slice(highlightIndex + hero.highlight.length);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {beforeHighlight}
            <span className={styles.highlight}>{highlighted}</span>
            {afterHighlight}
          </motion.h1>
          <motion.p
            className={styles.subheadline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {hero.subheadline}
          </motion.p>
          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button href="#contact" variant="primary">
              {hero.ctaPrimary}
            </Button>
            <Button href={hero.ctaSecondaryHref} variant="ghost">
              {hero.ctaSecondary} →
            </Button>
          </motion.div>
        </div>
        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.imageBg} />
          <Image
            src={hero.image}
            alt="Anindita Anindita"
            width={500}
            height={600}
            priority
            className={styles.image}
          />
        </motion.div>
      </div>
    </section>
  );
}
