import { FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";

export const socialLinks = [
  {
    label: "LinkedIn",
    id: "linkedin",
    href: "https://www.linkedin.com/in/ariantikaa",
    icon: <FaLinkedin aria-hidden="true" />,
    color: "#0077B5",
  },
  {
    label: "Instagram",
    id: "instagram",
    href: "https://www.instagram.com/ms.ariantikaef",
    icon: <FaInstagram aria-hidden="true" />,
    color: "#E1306C",
  },
  {
    label: "EJournal",
    id: "eJournal",
    href: "https://e-journal.unair.ac.id/JR/search/search?authors=Ariantika%20Ariantika",
    icon: <FaGlobe aria-hidden="true" />,
    color: "green",
  },
];
