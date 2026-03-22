"use client";

import { motion } from "framer-motion";
import { HiOutlineDesktopComputer, HiOutlineCode, HiOutlineStar } from "react-icons/hi";
import { services } from "@/data";
import styles from "./Services.module.scss";

const icons = {
  monitor: HiOutlineDesktopComputer,
  code: HiOutlineCode,
  star: HiOutlineStar,
};

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {services.title}
        </motion.h2>
        <div className={styles.grid}>
          {services.items.map((item, i) => {
            const Icon = icons[item.icon] || icons.monitor;
            return (
              <motion.div
                key={item.title}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={32} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
