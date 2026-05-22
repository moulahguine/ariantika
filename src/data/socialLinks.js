import { FaEnvelope, FaGlobe, FaLinkedin } from "react-icons/fa";

// ---- social links ----
export const socialLinks = [
  {
    // ---- linkedin ----
    label: "LinkedIn",
    id: "linkedin",
    href: "https://www.linkedin.com/in/ariantikaa",
    icon: <FaLinkedin aria-hidden="true" />,
    color: "#0077B5",
  },
  {
    // ---- email ----
    label: "Email",
    id: "email",
    href: "mailto:ariantikaeffendi@gmail.com",
    icon: <FaEnvelope aria-hidden="true" />,
    color: "red",
  },
  {
    // ---- e-journal ----
    label: "EJournal",
    id: "eJournal",
    href: "https://e-journal.unair.ac.id/JR/search/search?authors=Ariantika%20Ariantika",
    icon: <FaGlobe aria-hidden="true" />,
    color: "green",
  },
];
