"use client";

import Image from "next/image";
import { hero } from "@/data";
import styles from "./Hero.module.scss";

export default function Hero() {
  return <section className={styles.hero} id="hero"></section>;
}
