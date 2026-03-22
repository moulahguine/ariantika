"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { testimonials as testimonialsData } from "@/data";
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
  const { title, items } = testimonialsData;

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <motion.article
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <HiOutlineChatAlt2 className={styles.quoteIcon} size={48} />
                <blockquote className={styles.quote}>{item.quote}</blockquote>
                <div className={styles.author}>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
