"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button/Button";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/data";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {projects.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button href={projects.viewAllHref} variant="ghost">
              {projects.viewAll}
            </Button>
          </motion.div>
        </div>
        <div className={styles.grid}>
          {projects.items.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
