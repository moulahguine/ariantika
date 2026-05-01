const SITE_URL = "https://ariantika.com";

const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ariantika • Epidemiology & Biostatistics Researcher",
    template: "%s | Ariantika",
  },
  description:
    "Portfolio of Ariantika, an Epidemiology & Biostatistics Researcher based in North Sumatra, Indonesia. Research in cancer, infectious, and non-communicable diseases, with expertise in research design, SPSS statistical analysis, and translating data into public health insights.",
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
      "Epidemiology & Biostatistics researcher focused on cancer, infectious, and non-communicable diseases. Research design, SPSS analysis, and public health insights from North Sumatra, Indonesia.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ariantika | Epidemiology & Biostatistics Researcher | Portfolio Website",
    description:
      "Research in cancer, infectious, and non-communicable diseases. Research design, SPSS analysis, and public health insights.",
    site: "@ms.ariantikaef",
    creator: "@ms.ariantikaef",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export async function generateMetadata() {
  return metadata;
}
