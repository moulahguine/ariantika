"use client";

import { motion } from "framer-motion";
import AccordionItem from "@/components/AccordionItem/AccordionItem";
import { faq } from "@/data";
import styles from "./FAQ.module.scss";

export default function FAQ() {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {faq.title}
        </motion.h2>
        <div className={styles.grid}>
          {faq.items.slice(0, 2).map((item) => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
        <div className={styles.grid}>
          {faq.items.slice(2, 4).map((item) => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
