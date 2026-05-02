const SITE_URL = "https://ariantika.me";

const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ariantika • Epidemiology & Biostatistics Researcher",
    template: "%s | Ariantika",
  },
  description:
    "I'm Ariantika, an Epidemiology & Biostatistics Researcher. Explore my research, publications, and work in public health and data analysis.",
  keywords: [
    "Ariantika",
    "Ariantika researcher",
    "epidemiology researcher",
    "biostatistics researcher",
    "public health researcher",
    "public health Indonesia",
    "cancer research",
    "infectious disease research",
    "non-communicable disease research",
    "SPSS statistical analysis",
    "research design",
    "health data analysis",
    "researcher North Sumatra",
    "researcher Indonesia",
  ],
  authors: [{ name: "Ariantika" }],
  creator: "Ariantika",
  publisher: "Ariantika",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  other: {
    "theme-color": "#1563a7",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Ariantika • Epidemiology & Biostatistics Researcher",
    title:
      "Ariantika | Epidemiology & Biostatistics Researcher | Portfolio Website",
    description:
      "Portfolio of Ariantika, an Epidemiology & Biostatistics researcher focused on public health and disease research.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ariantika | Epidemiology & Biostatistics Researcher | Portfolio Website",
    description:
      "Explore Ariantika's research, publications, and work in public health and data analysis.",
    site: SITE_URL,
    creator: "Ariantika",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export async function generateMetadata() {
  return metadata;
}
