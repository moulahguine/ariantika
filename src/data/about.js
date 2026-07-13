import {
  FaStethoscope,
  FaLightbulb,
  FaHeartPulse,
  FaVirusSlash,
  FaSeedling,
} from "react-icons/fa6";
import { TfiArrowTopRight } from "react-icons/tfi";

import campusOutdoor from "@/assets/images/about/ariantika-usu-campus-outdoor.jpeg";
import mphGraduation from "@/assets/images/about/ariantika-master-public-health-graduation-2024.jpeg";
import mabipConference from "@/assets/images/about/ariantika-mabip-conference-2025.jpg";
import genomicsScienceDay from "@/assets/images/about/ariantika-genomics-science-day.jpeg";
import scienceMuseumBacteria from "@/assets/images/about/ariantika-science-museum-bacteria-exhibit.jpeg";

// you can change the order of the steps by changing the ids here
export const aboutCarouselStepIds = ["04", "02", "03"];

// ---- about metadata ----
export const aboutMetadata = {
  title: "About Me",
  description:
    "The story of how my years in clinical pulmonology and research shaped my path into epidemiology, cancer and quality-of-life research, and public health prevention.",
  keywords: [
    "Ariantika",
    "Epidemiology",
    "Biostatistics",
    "Research",
    "Public Health",
    "Prevention",
  ],
};

// ---- about page ----
export const aboutMePageSteps = {
  // ---- header ----
  header: {
    eyebrow: "My Story",
    title: {
      prefix: "How",
      accent: "I",
      suffix: "Got Here",
    },
    subtitle:
      "Moments that took me from assisting in clinical studies to researching cancer, prevention, and public health.",
  },

  // ---- steps ----
  steps: [
    {
      id: "01",
      title: "Before Epidemiology",
      image: campusOutdoor,
      alt: "Ariantika smiling at the university campus.",
      body: "At that time, I spent several years working as a teaching and research assistant in pulmonology. Through research projects, discussions, and time spent in clinical settings, I became increasingly interested in the questions surrounding health and disease. I found myself thinking beyond daily work and asking why diseases affect people differently, why some populations face greater risks, and how health could be understood before illness progresses. Those questions stayed with me and slowly changed the way I viewed research. I was no longer interested only in outcomes, but also in understanding patterns, risk factors, and the broader influences shaping people’s health. Looking back now, those questions were the beginning of the path that eventually led me to epidemiology.",
      icon: FaStethoscope,
    },
    {
      id: "02",
      title: "Learning to Look Beyond the Disease",
      image: mphGraduation,
      alt: "Ariantika wearing a maroon graduation sash labeled Master of Public Health.",
      body: "Studying epidemiology felt like finding a way to connect curiosity with understanding. It gave me the tools to move from observation into investigation and to explore how health patterns form across populations. I learned how to identify risk factors, measure trends, and understand health beyond individual cases. More importantly, it changed the way I viewed disease itself. I began to see the larger picture of people’s lives through social, environmental, and behavioral influences that shape health long before treatment begins.",
      icon: FaLightbulb,
    },
    {
      id: "03",
      title: "The Research That Stayed With Me",
      image: mabipConference,
      alt: "Ariantika in conference lanyard gesturing toward the 9th MABIP 2025.",
      body: "That new perspective led me toward research on the quality of life of lung cancer patients. The work became deeply meaningful because it connected research with lived experiences. Beyond treatment outcomes, I became interested in how illness affects daily routines, relationships, emotional well-being, and the small moments people often take for granted. Listening to these experiences changed the way I think about healthcare and public health research. It reminded me that behind every dataset is a person and behind every result is a human story.",
      icon: FaHeartPulse,
    },
    {
      id: "04",
      title: "Why Prevention Matters to Me",
      image: genomicsScienceDay,
      alt: "Ariantika at a Genomics Science Day event.",
      caption: "Genomics Science Day workshop",
      body: "Research also made me realize that many health outcomes begin long before someone enters a hospital. The conditions people live in, their environment, behaviors, and access to support all shape health over time. That understanding shifted my focus from illness alone toward prevention and public health perspectives. I became increasingly interested in how meaningful impact can begin earlier through understanding risks, supporting communities, and addressing health challenges before disease progresses.",
      icon: FaVirusSlash,
    },
    {
      id: "05",
      title: "Continuing the Journey",
      image: scienceMuseumBacteria,
      alt: "Ariantika smiling while pointing at a museum exhibit panel about bacteria.",
      body: "Today, I continue learning with the same curiosity that first guided me years ago. Every experience, from clinical exposure to epidemiology and research, has shaped how I understand health and disease. I remain interested in exploring the connections between people, data, and public health while continuing to grow through research and learning. Looking ahead, I hope to continue this journey through a PhD abroad, not only to deepen my knowledge but also to learn from different perspectives and build meaningful collaborations. For me, this journey has never been only about studying illness; it has always been about understanding people.",
      icon: FaSeedling,
    },
  ],

  // ---- Quran verse ----
  quote: {
    arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
    translation: "and pray, My Lord! Increase me in knowledge.",
    source: "Quran 20:114",
    href: "https://quran.com/taha/114",
  },
};

// ---- about section ----
export const aboutSection = {
  aboutHeadingId: "about-heading",

  // ---- header ----
  header: {
    prefix: "About",
    accent: "Me",
    subtitle:
      "A bit about my background and what led me into public health research.",
    accentTag: "small",
  },

  // ---- carousel ----
  carousel: {
    ariaLabel:
      "Photos from my life as a researcher and student. Tap to navigate through the photos.",
  },

  // ---- paragraphs ----
  paragraphs: [
    "Before I ever studied epidemiology, I was already close to research.",
    "I spent several years working as a teaching and research assistant in a clinical setting. It wasn’t something distant or abstract. I was part of the daily work, helping with studies, joining discussions, and seeing how research actually develops from an idea into something useful.",
    "Over time, I started paying less attention to results alone and more to the questions behind them. Why do some diseases appear more in certain populations? What increases risk? And how much of it could be understood earlier or even prevented?",
    "That shift is what led me to epidemiology. It gave me a way to explore those questions with structure, not just curiosity.",
    "Since then, my work has focused on cancer and public health research, especially in understanding how disease affects people beyond clinical outcomes, including quality of life.",
  ],

  // ---- button link ----
  cta: {
    href: "/aboutme",
    label:
      "If you want to understand how this path really started and what shaped it, you can continue reading my story.",
    icon: TfiArrowTopRight,
  },
};

// ---- about steps by id ----
const aboutMePageStepsById = Object.fromEntries(
  aboutMePageSteps.steps.map((step) => [step.id, step]),
);

// ---- about carousel ----
export const aboutMePageCarousel = aboutCarouselStepIds
  .map((id) => aboutMePageStepsById[id])
  .filter(Boolean)
  .map(({ image, alt, caption }) => ({
    src: image,
    alt,
    caption,
  }));
