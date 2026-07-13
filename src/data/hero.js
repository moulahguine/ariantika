import heroPortrait from "@/assets/images/hero/ariantika-hero-portrait.jpeg";
import { GoArrowUpRight } from "react-icons/go";
import { FaFileAlt, FaMapMarkerAlt } from "react-icons/fa";
import { getExperienceDuration } from "@/lib";

// ---- duration ----
const duration = getExperienceDuration();

// ---- hero data ----
export const hero = {
  heroHeadingId: "hero-heading",

  // ---- greeting ----
  greeting: {
    text: "hi there!",
    icon: "👋",
  },

  // ---- title ----
  title: {
    name: "I'm Ariantika",
    highlightSrOnly: ", an",
    highlight: "Epidemiology & Biostatistics Researcher.",
  },

  // ---- location ----
  location: {
    icon: FaMapMarkerAlt,
    text: "based in North Sumatra, Indonesia.",
  },

  // ---- description ----
  description: {
    beforeAbbr:
      "Conducting research in cancer, infectious, and non\u2011communicable diseases. Experienced in research design, statistical analysis using ",
    abbr: {
      label: "SPSS",
      title: "Statistical Package for the Social Sciences.",
    },
    afterAbbr:
      ", and translating data into insights that strengthen public health systems.",
  },

  // ---- actions ----
  actions: {
    contact: {
      id: "contact",
      label: "Contact",
      href: "/contact",
      icon: <GoArrowUpRight />,
      variant: "primary",
      size: "default",
      download: false,
      ariaLabel: "contact page.",
    },
    resume: {
      id: "resume",
      label: "Resume",
      href: "/documents/ARIANTIKA_PUBLIC_HEALTH_RESUME.pdf",
      icon: <FaFileAlt />,
      variant: "secondary",
      size: "default",
      download: true,
      ariaLabel: "download my resume PDF.",
    },
  },

  // ---- image ----
  image: {
    src: heroPortrait,
    alt: "Ariantika smiling in an outdoor graduation portrait.",
    width: 520,
    height: 520,
    sizes: "(max-width: 778px) 100vw, min(520px, 45vw)",
  },

  // ---- badge ----
  badge: {
    ringText: "Research Experience • Researcher • Public Health •",
    years: duration.years,
    yearsLabel: "Years",
  },
};
