"use client";

import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi";
import { education, experience } from "@/data";
import styles from "./EducationExperience.module.scss";

export default function EducationExperience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <div className={styles.columns}>
          <motion.div
            className={styles.column}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              <HiOutlineAcademicCap />
              {education.title}
            </h2>
            <ul>
              {education.items.map((item, i) => (
                <li key={i}>
                  <div className={styles.itemContent}>
                    <strong>{item.institution}</strong>
                    <span>{item.degree}</span>
                  </div>
                  <span className={styles.period}>{item.period}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className={styles.column}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              <HiOutlineBriefcase />
              {experience.title}
            </h2>
            <ul>
              {experience.items.map((item, i) => (
                <li key={i}>
                  <div className={styles.itemContent}>
                    <strong>{item.role}</strong>
                    <span>{item.company}</span>
                  </div>
                  <span className={styles.period}>{item.period}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
