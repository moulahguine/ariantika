// ---- react-icons imports ----
import { FaCircleCheck } from "react-icons/fa6";
import {
  LuBadgeCheck,
  LuBookOpenCheck,
  LuListChecks,
  LuMessagesSquare,
  LuShieldCheck,
} from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";
import { BsArrowUpRight } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";

// ---- duration ----
import { getExperienceDuration } from "@/lib";
const duration = getExperienceDuration();

// ---- images ----
import scientificWritingImg from "@/assets/images/services/scientific-writing.svg";
import researchDesignImg from "@/assets/images/services/research-design.svg";
import copyEditingImg from "@/assets/images/services/copy-editing.svg";
import scientificWritingImgPage from "@/assets/images/services_page/scientific-writing.png";
import researchDesignImgPage from "@/assets/images/services_page/research-design.png";
import copyEditingImgPage from "@/assets/images/services_page/copy-editing.png";
import heroPortrait from "@/assets/images/hero/ariantika-hero-portrait.jpeg";

// ---- headings ----
const listHeading = "What's Included";
const figcaption = "photo by @storyset";

// ---- services meta data ----
export const servicesMetaData = {
  title: "Services",
  description:
    "Publish with confidence: research design, SPSS biostatistics, manuscript writing, and English-Indonesian editing for Scopus and Web of Science indexed journals.",
};

// ---- services page data ----
export const servicesPage = {
  // ---- services page header ----
  header: {
    eyebrow: "What I Offer",
    title: {
      prefix: "Research",
      accent: "Services",
    },
    subtitle:
      "End-to-end research support to help you design stronger studies, analyze data accurately, and publish in high-impact journals.",
  },

  // ---- here are services page ----
  services: [
    {
      id: "scientific-writing",
      number: "01",
      theme: "primary",
      title: "Scientific Writing & Publication Support",
      description:
        "Publishing research requires more than presenting results. Journals expect clear scientific communication, logical structure, accurate formatting, and a manuscript that aligns with editorial and reviewer expectations. The focus here is refining research into a polished, submission-ready paper suitable for peer-reviewed academic publication.",
      image: scientificWritingImgPage,
      imageAlt:
        "Illustration of hands typing on a laptop beside a notepad and pen, representing scientific writing and manuscript preparation.",
      figcaption: figcaption,

      // ---- what's included ----
      list: {
        heading: listHeading,
        icon: FaCircleCheck,

        items: [
          "Manuscript structuring and academic writing support",
          "Journal selection for Scopus and Web of Science indexed outlets",
          "Responding to reviewer comments with evidence-based revisions",
          "Formatting and compliance with each journal's guidelines",
          "Submission, resubmission, and follow-through to acceptance",
        ],
      },
    },
    {
      id: "research-design",
      number: "02",
      theme: "secondary",
      title: "Research Design & Data Analysis",
      description:
        "The quality of a study is determined long before the final manuscript is written. Careful methodology, reliable data handling, and appropriate statistical analysis are essential for producing findings that are credible, defensible, and academically meaningful. This work supports researchers through study planning, SPSS analysis, interpretation, and publication-ready reporting.",
      image: researchDesignImgPage,
      imageAlt:
        "Illustration of researchers reviewing charts, graphs, and data dashboards, representing study design and statistical analysis.",
      figcaption: figcaption,
      // ---- what's included ----
      list: {
        heading: listHeading,
        icon: FaCircleCheck,
        items: [
          "Study design and methodology for epidemiological and public-health research",
          "Sample size estimation and sampling strategy",
          "Data management, cleaning, and preparation in SPSS",
          "Descriptive, inferential, and regression analysis",
          "Publication-ready tables, figures, and written interpretation",
        ],
      },
    },
    {
      id: "copy-editing",
      number: "03",
      theme: "accent",
      title: "Copy Editing & Translation",
      description:
        "Clear academic language plays a critical role in how research is understood and evaluated. Editing and translation are approached with attention to clarity, consistency, technical accuracy, and readability while preserving the original scientific meaning and professional tone of the document for an international academic audience.",
      image: copyEditingImgPage,
      imageAlt:
        "Illustration of an editor at a laptop with greetings in multiple languages and a world map, representing copy editing and translation.",
      figcaption: figcaption,
      // ---- what's included ----
      list: {
        heading: listHeading,
        icon: FaCircleCheck,
        items: [
          "Copy editing and proofreading (grammar, clarity, style, formatting)",
          "Academic editing for structure, flow, and consistency",
          "English to Indonesian translation for academic content",
          "Tone, terminology, and reference checks",
          "Suitable for manuscripts, theses, reports, and scholarly books",
        ],
      },
    },
  ],

  // ---- contact cta ----
  contactCta: {
    title: "Still Have Questions?",
    subtitle:
      "If anything is unclear about services, timelines, or how we can work together, I'd be happy to hear from you.",
    image: {
      src: heroPortrait,
      alt: "Ariantika smiling in an outdoor graduation portrait.",
    },
    cta: {
      label: "Get In Touch",
      href: "/contact",
      icon: <GoArrowUpRight />,
      variant: "primary",
      size: "default",
      ariaLabel: "Go to contact page.",
    },
  },

  // ---- Quran verse ----
  quran: {
    arabic: "وَٱلَّذِينَ هُمْ لِأَمَـٰنَـٰتِهِمْ وَعَهْدِهِمْ رَٰعُونَ",
    translation:
      "˹the believers are also˺ those who are true to their trusts and covenants",
    source: "Quran 23:8",
    href: "https://quran.com/al-muminun/8",
  },
};

// ---- services section data ----
export const servicesSection = {
  servicesHeadingId: "services-heading",

  // ---- services section header ----
  header: {
    prefix: "Research",
    accent: "Services",
    subtitle:
      "Here are the services I provide to help you with your research and publishing work.",
  },

  // ---- services section cards ----
  cards: [
    {
      href: `/services#${servicesPage.services[0].id}`,
      image: scientificWritingImg,
      imageAlt: "Illustration of a person working at a laptop.",
      title: "Scientific Writing & Publication",
      description:
        "Supporting academic writing and journal submission in line with publication standards.",
      icon: FaCircleCheck,
      bullets: [
        "Structure research papers for journal submission",
        "Write and improve key sections",
        "Format manuscripts based on journal guidelines",
        "Support literature review and references",
        "Assist with revisions and reviewer responses",
      ],
    },
    {
      href: `/services#${servicesPage.services[1].id}`,
      image: researchDesignImg,
      imageAlt: "Illustration of a browser dashboard with bar charts.",
      title: "Research Design & Data Analysis",
      description:
        "Building reliable research through stronger methodology, data analysis, and statistical interpretation.",
      icon: FaCircleCheck,
      bullets: [
        "Design epidemiological and public health studies",
        "Analyze data using SPSS",
        "Clean and prepare datasets",
        "Apply appropriate statistical methods",
        "Interpret results for research and publication",
      ],
    },

    {
      href: `/services#${servicesPage.services[2].id}`,
      image: copyEditingImg,
      imageAlt: "Illustration of a document with editing marks.",
      title: "Copy Editing & Translation",
      description:
        "Improving clarity, consistency, and readability for international academic communication.",
      icon: FaCircleCheck,
      bullets: [
        "Improve clarity and structure of academic writing",
        "Align manuscripts with publication standards",
        "Edit grammar and technical language",
        "Translate research for international use",
        "Ensure accuracy and context in translations",
      ],
    },
  ],

  // ---- services section cursor ----
  cursor: {
    text: "Click",
    icon: BsArrowUpRight,
  },
};

// ---- faq data (services page) ----
export const faq = {
  header: {
    prefix: "FA",
    accent: "Q",
    subtitle:
      "Common questions about working together, timelines, confidentiality, and how I support your research.",
  },

  items: [
    {
      question: "How do we get started?",
      answer:
        "Simply contact me with your research topic, objectives, and any available materials. I'll review your project and recommend the best way to proceed.",
    },
    {
      question: "What types of research do you support?",
      answer:
        "I primarily support epidemiology, public health, and medical research, but I also assist with other academic disciplines depending on the project's requirements.",
    },
    {
      question: "Do you write the research for clients?",
      answer:
        "No. My role is to provide professional guidance, editing, statistical analysis, and publication support while maintaining academic integrity and ethical research practices.",
    },
    {
      question: "Which statistical software do you use?",
      answer:
        "SPSS is my primary statistical software, and I can assist with descriptive, inferential, and regression analyses.",
    },
    {
      question: "Can you help prepare a manuscript for journal submission?",
      answer:
        "Yes. I assist with formatting, journal selection, responding to reviewers, and ensuring manuscripts meet submission requirements.",
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Yes. Revisions are included according to the agreed scope to ensure the final work meets your expectations.",
    },
    {
      question: "Is my research confidential?",
      answer:
        "Absolutely. All client information and research materials are treated with strict confidentiality.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Project timelines vary depending on complexity and scope. After reviewing your requirements, I'll provide an estimated delivery schedule.",
    },
  ],
};

// ---- why choose me data (services page) ----
export const whyChooseMe = {
  // ---- why choose me header ----
  header: {
    prefix: "Why Choose",
    accent: "Me",
    suffix: "?",
    subtitle:
      "Choosing the right research partner matters. Here's what you can expect when working with me.",
  },

  // ---- why choose me items ----
  items: [
    {
      title: `${duration.years}+ Years Experience`,
      description:
        "Extensive experience in epidemiology and biostatistics research, working across infectious diseases, chronic conditions, and public health studies.",
      icon: LuBadgeCheck,
    },
    {
      title: "MPH Qualified",
      description:
        "Advanced public health training combined with practical experience in study design, statistical analysis, and research methodology.",
      icon: GrCertificate,
    },
    {
      title: "Published Research",
      description:
        "Contributed to peer-reviewed publications, with a strong focus on methodological rigor, accuracy, and scientific quality.",
      icon: LuBookOpenCheck,
    },
    {
      title: "End-to-End Support",
      description:
        "Whether you\u2019re planning a study, analyzing data, or preparing a manuscript, guidance is available throughout the research journey.",
      icon: LuListChecks,
    },
    {
      title: "Tailored Guidance",
      description:
        "Every project is different, so recommendations and support are adapted to your goals, research questions, and publication needs.",
      icon: LuMessagesSquare,
    },
    {
      title: "Ethical & Evidence-Based",
      description:
        "Research decisions are guided by established scientific methods, data integrity, and professional ethical standards.",
      icon: LuShieldCheck,
    },
  ],
};
