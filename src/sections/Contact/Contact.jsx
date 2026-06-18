import { contact } from "@/data";
import { SectionHeader, SocialLinks } from "@/components";
import { slideInLeft, staggerContainer, viewportOnce } from "@/lib";
import * as motion from "motion/react-client";
import ContactEmail from "./ContactEmail";
import ContactForm from "./ContactForm";

import "./Contact.scss";

export default function Contact() {
  const { id, header, info, form } = contact;

  return (
    // ---- contact section ----
    <section className="contact" id={id} aria-labelledby="contact-heading">
      {/* ---- section header ---- */}
      <SectionHeader
        headingId="contact-heading"
        prefix={header.prefix}
        accent={header.accent}
        subtitle={header.subtitle}
      />

      {/* ---- contact container ---- */}
      <motion.div
        className="contact__container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.aside
          className="contact__info"
          aria-label="Contact information"
          variants={slideInLeft}
        >
          {/* here is the email block that contains the email and the copy button */}
          <div className="contact__block">
            <h3 className="contact__block-title">{info.contactTitle}</h3>
            <ContactEmail
              email={info.email}
              copyLabel={info.copyLabel}
              copiedLabel={info.copiedLabel}
            />
          </div>

          {/* ---- location block ---- */}
          <div className="contact__block">
            <h3 className="contact__block-title">{info.locationTitle}</h3>
            <p className="contact__location">{info.location}</p>
          </div>

          {/* ---- social links block ---- */}
          <SocialLinks direction="vertical" className="contact__social" />
        </motion.aside>

        <ContactForm form={form} />
      </motion.div>
    </section>
  );
}
