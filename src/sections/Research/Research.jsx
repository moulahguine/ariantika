import * as motion from "motion/react-client";
import { SectionHeader } from "@/components";
import { researchSection } from "@/data";
import { fadeUp, viewportOnce } from "@/lib";

import "./Research.scss";

export default function Research() {
  const { researchHeadingId, header, placeholder } = researchSection;

  return (
    // ---- research section ----
    <section className="research" aria-labelledby={researchHeadingId}>
      {/* ---- section header ---- */}
      <SectionHeader
        headingId={researchHeadingId}
        className="research__header"
        prefix={header.prefix}
        accent={header.accent}
        subtitle={header.subtitle}
      />

      {/* ---- container ---- */}
      <motion.div
        className="research__container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      ></motion.div>
    </section>
  );
}
