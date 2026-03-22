"use client";

import Image from "next/image";
import { hero } from "@/data";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          {hero.comingSoon && (
            <span className={styles.badge}>coming soon 🙂</span>
          )}
          <h1 className={styles.name}>{hero.name}</h1>
          <p className={styles.tagline}>{hero.tagline}</p>
          {/* <p className={styles.intro}>{hero.intro}</p> */}
        </div>
        <div className={styles.imageWrap}>
          <div className={styles.imageBg} />
          <Image
            src={hero.image}
            alt={hero.name}
            width={400}
            height={500}
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
