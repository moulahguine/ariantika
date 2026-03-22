"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi";
import styles from "./AccordionItem.module.scss";

export default function AccordionItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.item}>
      <button
        className={styles.trigger}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-${item.id}`}
        id={`faq-trigger-${item.id}`}
      >
        <span>{item.question}</span>
        <span className={styles.icon}>
          {open ? <HiMinus size={20} /> : <HiPlus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={`faq-${item.id}`}
            className={styles.content}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-labelledby={`faq-trigger-${item.id}`}
          >
            <p>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
