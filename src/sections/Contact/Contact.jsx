"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button/Button";
import { site } from "@/data";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            Ready to collaborate? <span>Let&apos;s talk!</span>
          </h2>
          <p>
            Have a project in mind? I&apos;d love to hear about it. Reach out for research
            collaborations, design work, or just to say hello.
          </p>
          <div className={styles.actions}>
            <Button href={`mailto:${site.email}`} variant="primary">
              Get in touch
            </Button>
            <Button href={site.linkedin} variant="secondary">
              LinkedIn
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
