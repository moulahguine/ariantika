"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import styles from "./ProjectCard.module.scss";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <a href={project.href} className={styles.link}>
        <div className={styles.imageWrap}>
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className={styles.image}
          />
          <span className={`${styles.category} ${styles[project.categoryColor] || ""}`}>
            {project.category}
          </span>
        </div>
        <div className={styles.content}>
          <h3>{project.title}</h3>
          <span className={styles.cta}>
            View project
            <HiArrowRight />
          </span>
        </div>
      </a>
    </motion.article>
  );
}
