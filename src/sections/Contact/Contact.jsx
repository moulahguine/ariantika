import ContactForm from "./ContactForm";
import { contact } from "@/data";
import { SectionHeader } from "@/components";

import "./Contact.scss";

export default function Contact() {
  const { id, header } = contact;

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
      <div className="contact__container">
        <ContactForm />
      </div>
    </section>
  );
}
