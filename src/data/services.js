import {
  FaPenNib,
  FaMagnifyingGlass,
  FaCommentDots,
  FaPaperPlane,
  FaClipboardList,
  FaUsers,
  FaBroom,
  FaChartColumn,
  FaFileLines,
  FaBookOpen,
  FaPenRuler,
  FaLanguage,
  FaCircleCheck,
} from "react-icons/fa6";

import scientificWritingImg from "@/assets/images/services/scientific-writing.svg";
import researchDesignImg from "@/assets/images/services/research-design.svg";
import copyEditingImg from "@/assets/images/services/copy-editing.svg";

/** Copy and SEO for the /services page. */
export const servicesPage = {
  metadata: {
    title: "Services",
    description:
      "Publish with confidence: research design, SPSS biostatistics, manuscript writing, and English-Indonesian editing for Scopus and Web of Science indexed journals.",
  },
  header: {
    eyebrow: "What I Offer",
    titleBeforeAccent: "Research",
    titleAccent: "Services",
    titleAfterAccent: ".",
    subtitle:
      "End-to-end research support to help you design stronger studies, analyze data accurately, and publish in high-impact journals.",
  },
  processHeading: "How This Service Works",
  figureCaption: "photo by @storyset",
};

export const servicesFull = [
  {
    id: "scientific-writing",
    number: "01",
    theme: "primary",
    title: "Scientific Writing & Publication Support",
    titleShort: "Scientific Writing & Publishing",
    description:
      "Publishing research requires more than presenting results. Journals expect clear scientific communication, logical structure, accurate formatting, and a manuscript that aligns with editorial and reviewer expectations. The focus here is refining research into a polished, submission-ready paper suitable for peer-reviewed academic publication.",
    shortDescription:
      "Supporting academic writing and journal submission in line with publication standards.",
    bullets: [
      "Structure research papers for journal submission",
      "Write and improve key sections",
      "Format manuscripts based on journal guidelines",
      "Support literature review and references",
      "Assist with revisions and reviewer responses",
    ],
    image: scientificWritingImg,
    imageAlt:
      "Illustration of a researcher at a desk beside a glowing light bulb and a speech bubble filled with lines of text — representing ideas turned into published manuscripts.",
    href: "/services#scientific-writing",
    list: {
      heading: "What's Included",
      items: [
        "Manuscript structuring and academic writing support",
        "Journal selection for Scopus and Web of Science indexed outlets",
        "Responding to reviewer comments with evidence-based revisions",
        "Formatting and compliance with each journal's guidelines",
        "Submission, resubmission, and follow-through to acceptance",
      ],
    },
    steps: [
      {
        number: "01",
        title: "Manuscript Drafting",
        icon: FaPenNib,
      },
      {
        number: "02",
        title: "Journal Selection",
        icon: FaMagnifyingGlass,
      },
      {
        number: "03",
        title: "Peer Review & Revision",
        icon: FaCommentDots,
      },
      {
        number: "04",
        title: "Submission & Publication",
        icon: FaPaperPlane,
      },
    ],
  },
  {
    id: "research-design",
    number: "02",
    theme: "secondary",
    titleShort: "Research Design & Data Analysis",
    title: "Research Design & Data Analysis",
    description:
      "The quality of a study is determined long before the final manuscript is written. Careful methodology, reliable data handling, and appropriate statistical analysis are essential for producing findings that are credible, defensible, and academically meaningful. This work supports researchers through study planning, SPSS analysis, interpretation, and publication-ready reporting.",
    shortDescription:
      "Building reliable research through stronger methodology, data analysis, and statistical interpretation.",
    bullets: [
      "Design epidemiological and public health studies",
      "Analyze data using SPSS",
      "Clean and prepare datasets",
      "Apply appropriate statistical methods",
      "Interpret results for research and publication",
    ],
    image: researchDesignImg,
    imageAlt:
      "Illustration of a woman reviewing a tall clipboard of research questions and data next to a notebook showing an ascending bar chart and upward trend line — representing study design and statistical analysis.",
    href: "/services#research-design",
    list: {
      heading: "What's Included",
      items: [
        "Study design and methodology for epidemiological and public-health research",
        "Sample size estimation and sampling strategy",
        "Data management, cleaning, and preparation in SPSS",
        "Descriptive, inferential, and regression analysis",
        "Publication-ready tables, figures, and written interpretation",
      ],
    },
    steps: [
      {
        number: "01",
        title: "Research Question & Design",
        icon: FaClipboardList,
      },
      {
        number: "02",
        title: "Sample & Data Collection",
        icon: FaUsers,
      },
      {
        number: "03",
        title: "Data Cleaning & Preparation",
        icon: FaBroom,
      },
      {
        number: "04",
        title: "Statistical Analysis",
        icon: FaChartColumn,
      },
      {
        number: "05",
        title: "Reporting & Interpretation",
        icon: FaFileLines,
      },
    ],
  },
  {
    id: "copy-editing",
    number: "03",
    theme: "accent",
    titleShort: "Copy Editing & Translation",
    title: "Copy Editing & Translation",
    description:
      "Clear academic language plays a critical role in how research is understood and evaluated. Editing and translation are approached with attention to clarity, consistency, technical accuracy, and readability while preserving the original scientific meaning and professional tone of the document for an international academic audience.",
    shortDescription:
      "Improving clarity, consistency, and readability for international academic communication.",
    bullets: [
      "Improve clarity and structure of academic writing",
      "Align manuscripts with publication standards",
      "Edit grammar and technical language",
      "Translate research for international use",
      "Ensure accuracy and context in translations",
    ],
    image: copyEditingImg,
    imageAlt:
      "Illustration of an editor working at a laptop that displays text in two languages, with a stack of books alongside and a faint world-map backdrop — representing multilingual copy editing and translation.",
    href: "/services#copy-editing",
    list: {
      heading: "What's Included",
      items: [
        "Copy editing and proofreading (grammar, clarity, style, formatting)",
        "Academic editing for structure, flow, and consistency",
        "English to Indonesian translation for academic content",
        "Tone, terminology, and reference checks",
        "Suitable for manuscripts, theses, reports, and scholarly books",
      ],
    },
    steps: [
      {
        number: "01",
        title: "Initial Review",
        icon: FaBookOpen,
      },
      {
        number: "02",
        title: "Copy Editing & Proofreading",
        icon: FaPenRuler,
      },
      {
        number: "03",
        title: "Academic Editing",
        icon: FaFileLines,
      },
      {
        number: "04",
        title: "Translation (if needed)",
        icon: FaLanguage,
      },
      {
        number: "05",
        title: "Final Quality Check",
        icon: FaCircleCheck,
      },
    ],
  },
];

/** Compact data for the home preview, kept in sync with servicesFull. */
export const servicesPreview = servicesFull.map((s) => ({
  title: s.titleShort ?? s.title,
  description: s.description,
  shortDescription: s.shortDescription,
  bullets: s.bullets,
  image: s.image,
  imageAlt: s.imageAlt,
  href: s.href,
}));
