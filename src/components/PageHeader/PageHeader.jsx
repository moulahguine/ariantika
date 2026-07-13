import * as motion from "motion/react-client";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib";

import "./PageHeader.scss";

export default function PageHeader({ header, className = "" }) {
  const { eyebrow, title, subtitle } = header;

  return (
    <motion.header
      className={`page__header ${className}`.trim()}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.span className="page__header-eyebrow" variants={fadeUp}>
        {eyebrow}
      </motion.span>
      <motion.h1 className="page__header-title" variants={fadeUp}>
        {title.prefix ? `${title.prefix} ` : null}
        {title.accent ? (
          <span className="page__header-title-accent">{title.accent}</span>
        ) : null}
        {title.suffix ? ` ${title.suffix}` : null}
      </motion.h1>
      <motion.p className="page__header-subtitle" variants={fadeUp}>
        {subtitle}
      </motion.p>
    </motion.header>
  );
}
