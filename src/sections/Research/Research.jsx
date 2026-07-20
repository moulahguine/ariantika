import * as motion from "motion/react-client";
import { SectionHeader } from "@/components";
import { researchSection } from "@/data";
import { fadeUp, viewportOnce } from "@/lib";

import "./Research.scss";
import Image from "next/image";

import image from "../../assets/images/projects/comin-soon-illustrator.svg";

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
      >
        <Image
          src={image}
          alt="comming soon illstrator."
          width={450}
          height={450}
          priority
        />
        <p className="research__status">{placeholder.status}</p>
      </motion.div>
    </section>
  );
}
