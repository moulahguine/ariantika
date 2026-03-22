"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blog } from "@/data";
import styles from "./Blog.module.scss";

export default function Blog() {
  return (
    <section className={styles.blog} id="blog">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{blog.title}</h2>
          <a href={blog.viewAllHref} className={styles.viewAll}>
            {blog.viewAll}
          </a>
        </div>
        <div className={styles.list}>
          {blog.items.map((item, i) => (
            <motion.article
              key={item.id}
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className={styles.date}>{item.date}</span>
              <a href={item.href} className={styles.link}>
                <h3>{item.title}</h3>
                <span className={styles.cta}>Read the article →</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
