import heroPortrait from "@/assets/images/hero/ariantika-hero-portrait.jpeg";
import { GoArrowUpRight } from "react-icons/go";
import { FaFileAlt, FaMapMarkerAlt } from "react-icons/fa";

// ---- hero experience ----
export const heroExperience = {
  startYear: 2017,
  startMonth: 8,
};

// ---- get hero experience years ----
export function getHeroExperienceYears(date = new Date()) {
  const totalMonths =
    (date.getFullYear() - heroExperience.startYear) * 12 +
    date.getMonth() -
    heroExperience.startMonth;

  return Math.floor(totalMonths / 12);
}

// ---- hero data ----
export const hero = {
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
    text: "based in North Sumatra, Indonesia.",
  },

  // ---- description ----
  description: {
    beforeAbbr:
      "Conducting research in cancer, infectious, and non\u2011communicable diseases. Experienced in research design, statistical analysis using ",
    abbr: {
      label: "SPSS",
      title: "Statistical Package for the Social Sciences",
      tooltip: "Statistical Package for the Social Sciences",
    },
    afterAbbr:
      ", and translating data into insights that strengthen public health systems.",
  },

  // ---- actions ----
  actions: [
    {
      id: "contact",
      label: "Contact",
      href: "/contact",
      icon: <GoArrowUpRight />,
      variant: "primary",
      size: "default",
      download: false,
    },
    {
      id: "resume",
      label: "Resume",
      href: "/documents/ARIANTIKA_PUBLIC HEALTH_RESUME.pdf",
      icon: <FaFileAlt />,
      variant: "secondary",
      size: "default",
      download: true,
    },
  ],

  // ---- image ----
  image: {
    src: heroPortrait,
    alt: "Ariantika smiling at the camera, wearing a cream hijab, round eyeglasses, and a white Genomic Science Day T-shirt with a light-blue lanyard, raising her right hand in a peace sign at an indoor research event.",
    width: 520,
    height: 520,
    sizes: "(max-width: 778px) 100vw, min(520px, 45vw)",
  },

  // ---- badge ----
  badge: {
    ringText: "Research Experience • Researcher • Public Health •",
    yearsLabel: "Years",
    experienceAriaLabel: (years) => `${years}+ years of research experience`,
  },

  // ---- figure caption ----
  figureCaption: "photo by @ariantika",

  // ---- location icon ----
  locationIcon: <FaMapMarkerAlt aria-label="Location" aria-hidden="true" />,
};
