import {
  FaStethoscope,
  FaLightbulb,
  FaHeartPulse,
  FaVirusSlash,
  FaSeedling,
} from "react-icons/fa6";

import about1 from "@/assets/images/about/about_1.jpg";
import about2 from "@/assets/images/about/about_2.jpg";
import about3 from "@/assets/images/about/about_3.jpg";
import about4 from "@/assets/images/about/about_4.jpg";
import about5 from "@/assets/images/about/about_5.jpeg";

export const aboutSteps = [
  {
    id: "01",
    theme: "teal",
    tape: "amber",
    title: "Before Epidemiology",
    image: about1,
    alt: "Ariantika reviewing paperwork at a shared desk with two colleagues during a research meeting in an office",
    caption: "Pulmonology Research",
    body: "At that time, I spent several years working as a teaching and research assistant in pulmonology. Through research projects, discussions, and time spent in clinical settings, I became increasingly interested in the questions surrounding health and disease. I found myself thinking beyond daily work and asking why diseases affect people differently, why some populations face greater risks, and how health could be understood before illness progresses. Those questions stayed with me and slowly changed the way I viewed research. I was no longer interested only in outcomes, but also in understanding patterns, risk factors, and the broader influences shaping people’s health. Looking back now, those questions were the beginning of the path that eventually led me to epidemiology.",
    icon: FaStethoscope,
  },
  {
    id: "02",
    theme: "amber",
    tape: "teal",
    title: "Learning to Look Beyond the Disease",
    image: about2,
    alt: "Ariantika in graduation gown and master's sash holding a bouquet in front of the Faculty of Public Health wall at Universitas Sumatera Utara",
    caption: "Master's Graduation",
    body: "Studying epidemiology felt like finding a way to connect curiosity with understanding. It gave me the tools to move from observation into investigation and to explore how health patterns form across populations. I learned how to identify risk factors, measure trends, and understand health beyond individual cases. More importantly, it changed the way I viewed disease itself. I began to see the larger picture of people’s lives through social, environmental, and behavioral influences that shape health long before treatment begins.",
    icon: FaLightbulb,
  },
  {
    id: "03",
    theme: "teal",
    tape: "amber",
    title: "The Research That Stayed With Me",
    image: about3,
    alt: "Ariantika posing in front of the 9th MABIP 2025 backdrop at the Malaysian Association for Bronchology and Interventional Pulmonology conference",
    caption: "MABIP 2025 Conference",
    body: "That new perspective led me toward research on the quality of life of lung cancer patients. The work became deeply meaningful because it connected research with lived experiences. Beyond treatment outcomes, I became interested in how illness affects daily routines, relationships, emotional well-being, and the small moments people often take for granted. Listening to these experiences changed the way I think about healthcare and public health research. It reminded me that behind every dataset is a person and behind every result is a human story.",
    icon: FaHeartPulse,
  },
  {
    id: "04",
    theme: "amber",
    tape: "teal",
    title: "Why Prevention Matters to Me",
    image: about4,
    alt: "Ariantika with two fellow participants in front of a Genomics Science Dojo banner at a bioinformatics workshop",
    caption: "Genomics Science Dojo",
    body: "Research also made me realize that many health outcomes begin long before someone enters a hospital. The conditions people live in, their environment, behaviors, and access to support all shape health over time. That understanding shifted my focus from illness alone toward prevention and public health perspectives. I became increasingly interested in how meaningful impact can begin earlier through understanding risks, supporting communities, and addressing health challenges before disease progresses.",
    icon: FaVirusSlash,
  },
  {
    id: "05",
    theme: "teal",
    tape: "amber",
    title: "Continuing the Journey",
    image: about5,
    alt: "Ariantika in graduation cap and gown at the Universitas Sumatera Utara Faculty of Public Health commencement ceremony, April 2025",
    caption: "Graduation Ceremony",
    body: "Today, I continue learning with the same curiosity that first guided me years ago. Every experience, from clinical exposure to epidemiology and research, has shaped how I understand health and disease. I remain interested in exploring the connections between people, data, and public health while continuing to grow through research and learning. Looking ahead, I hope to continue this journey through a PhD abroad, not only to deepen my knowledge but also to learn from different perspectives and build meaningful collaborations. For me, this journey has never been only about studying illness; it has always been about understanding people.",
    icon: FaSeedling,
  },
];

export const aboutCarousel = aboutSteps.map(({ image, alt, caption }) => ({
  src: image,
  alt,
  caption,
}));
