/**
 * Academic portfolio content — edit here.
 * Home: summaries only. Depth on /about, /research, /experience, /projects.
 */

export const site = {
  name: "Ariantika",
  shortLogo: "A. Ariantika",
  title: "Epidemiology & Biostatistics Researcher",
  location: "North Sumatra, Indonesia",
  email: "ariantika@example.com",
  linkedin: "https://www.linkedin.com/in/ariantika",
};

/** Hero — one-line impact (not LinkedIn copy) */
export const homeHero = {
  mission:
    "Improving public health outcomes through rigorous epidemiology, biostatistics, and evidence-based research.",
  /** Replace with your own photo in /public when ready */
  portrait:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85&auto=format&fit=crop",
};

export const expertise = [
  { id: "epi", title: "Epidemiological Research", icon: "chart" },
  { id: "bio", title: "Biostatistics & Data Analysis", icon: "data" },
  { id: "cid", title: "Cancer & Infectious Diseases", icon: "cell" },
  { id: "phs", title: "Public Health Surveillance", icon: "radar" },
];

/** Featured studies — impact-forward */
export const featuredResearch = [
  {
    slug: "lung-cancer-qol",
    title: "Quality of life in advanced-stage lung cancer",
    summary:
      "Hospital-based assessment of patient-reported outcomes and care pathways.",
    impact:
      "Informed clinical discussion on supportive care priorities in oncology settings.",
    href: "/projects#lung-cancer-qol",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=85&auto=format&fit=crop",
  },
  {
    slug: "hai-surveillance",
    title: "Healthcare-associated infection surveillance",
    summary:
      "Design and analysis of institutional surveillance data for infection control.",
    impact:
      "Supported data-driven decisions for prevention and reporting standards.",
    href: "/projects#hai-surveillance",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=85&auto=format&fit=crop",
  },
  {
    slug: "methods-writing",
    title: "Methods & publication support",
    summary:
      "Research design, SPSS analysis, and manuscripts for Scopus / WoS–indexed journals.",
    impact:
      "Strengthened reproducibility and reporting for multi-site health studies.",
    href: "/projects#methods-writing",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=85&auto=format&fit=crop",
  },
];

/** Home about preview — max ~3 short lines */
export const aboutPreview = {
  image:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=85&auto=format&fit=crop",
  lines: [
    "MPH in Epidemiology; adjunct researcher and assistant lecturer affiliated with Universitas Sumatera Utara and its hospital network.",
    "Work spans oncology-related outcomes, healthcare-associated infections, and rigorous study design with statistical analysis (including SPSS).",
    "Committed to transparent methods, teaching, and collaborations that translate data into better health decisions.",
  ],
};

export const experienceSnapshot = [
  {
    role: "Adjunct Researcher",
    institution: "Universitas Sumatera Utara Hospital",
    period: "Present",
  },
  {
    role: "Assistant Lecturer",
    institution: "Universitas Sumatera Utara",
    period: "Present",
  },
  {
    role: "Research & analysis",
    institution: "Hospital-based public health studies",
    period: "Ongoing",
  },
];

/** Sample publications — replace with real DOIs when available */
export const publications = [
  {
    title:
      "Quality of life and supportive care needs in advanced lung cancer: a cross-sectional study",
    journal: "Journal placeholder — update with indexed title",
    year: "2024",
    doi: "https://doi.org/10.0000/placeholder",
  },
  {
    title:
      "Healthcare-associated infection surveillance in a tertiary hospital: trends and risk factors",
    journal: "Journal placeholder — update with indexed title",
    year: "2023",
    doi: "https://doi.org/10.0000/placeholder",
  },
  {
    title:
      "Statistical approaches to patient-reported outcome measures in oncology research",
    journal: "Journal placeholder — update with indexed title",
    year: "2022",
    doi: "https://doi.org/10.0000/placeholder",
  },
];

export const homeCta = {
  text: "Open to research collaborations, academic partnerships, and public health projects with measurable impact.",
};

/** ——— Full About page ——— */
export const aboutFull = {
  title: "About",
  bio: [
    "I am a Master of Public Health graduate specializing in Epidemiology, with academic and research experience in public health, oncology, and hospital-based studies.",
    "My work focuses on epidemiological research, quality of life assessment in advanced-stage lung cancer patients, and healthcare-associated infection surveillance. I contribute to research design, data collection, statistical analysis using SPSS, and scientific writing for Scopus and WoS indexed journals.",
    "As an Assistant Lecturer, I support teaching, student mentoring, and academic publications. I am particularly interested in evidence-based public health interventions, sound methodology, and improving healthcare outcomes through data-driven approaches.",
  ],
  researchInterests: [
    "Oncology-related epidemiology and patient-reported outcomes",
    "Healthcare-associated infections and institutional surveillance",
    "Biostatistics, study design, and reproducible reporting",
    "Evidence synthesis and publication quality in indexed journals",
  ],
  education: [
    {
      degree: "Master of Public Health (MPH), Epidemiology",
      school: "Universitas Sumatera Utara",
      note: "Thesis and coursework focused on applied epidemiology and biostatistics.",
    },
  ],
  teaching:
    "Assistant Lecturer at Universitas Sumatera Utara: contributing to coursework, mentoring students in research methods, and supporting publication readiness.",
  goals:
    "Expand collaborative research on cancer and infectious disease burden, strengthen surveillance and methods training, and contribute to interventions evaluated with transparent, reproducible data.",
};

/** ——— Experience page (full) ——— */
export const experienceFull = [
  {
    title: "Adjunct Researcher",
    institution: "Universitas Sumatera Utara Hospital",
    period: "— Present",
    bullets: [
      "Epidemiological and hospital-based studies in oncology and infection control contexts.",
      "Collaboration on data collection, analysis, and reporting for institutional research priorities.",
    ],
  },
  {
    title: "Assistant Lecturer",
    institution: "Universitas Sumatera Utara",
    period: "— Present",
    bullets: [
      "Teaching and mentoring in public health and research methods.",
      "Support for student research and academic writing.",
    ],
  },
  {
    title: "Research contributor",
    institution: "Public health & clinical research teams",
    period: "—",
    bullets: [
      "SPSS-based analysis, study documentation, and manuscript preparation for indexed outlets.",
    ],
  },
];

/** ——— Projects / case studies ——— */
export const projectsFull = [
  {
    id: "lung-cancer-qol",
    title: "Quality of life in advanced-stage lung cancer",
    problem:
      "Need for structured evidence on patient-reported outcomes and priorities in advanced disease within hospital settings.",
    methodology:
      "Cross-sectional design with validated instruments; descriptive and inferential analysis as appropriate.",
    tools: ["SPSS", "Survey instruments", "Ethics-compliant data handling"],
    results:
      "Profiles of quality-of-life domains and associations with care variables (update with your findings).",
    impact:
      "Supports clinical and policy discussion on supportive care and resource allocation.",
  },
  {
    id: "hai-surveillance",
    title: "Healthcare-associated infection surveillance",
    problem:
      "Institutions require consistent surveillance metrics and interpretable trends for infection prevention.",
    methodology:
      "Routine surveillance framework with standardized definitions and periodic reporting.",
    tools: ["SPSS", "Line lists", "Institutional protocols"],
    results:
      "Trend summaries and risk-factor signals for quality improvement (update with your outputs).",
    impact:
      "Feeds infection prevention committees and accreditation-related documentation.",
  },
  {
    id: "methods-writing",
    title: "Methods, analysis & publication pipeline",
    problem:
      "Teams need reproducible analysis plans and publication-ready reporting for indexed journals.",
    methodology:
      "Preregistered analysis plans where applicable; transparent tables and sensitivity checks.",
    tools: ["SPSS", "Reporting guidelines (STROBE, etc.)"],
    results:
      "Submitted and published work in Scopus / WoS–indexed journals (list your actual outputs).",
    impact:
      "Raises methodological rigor and visibility of institutional research.",
  },
];
