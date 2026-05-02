import { Inter, Sour_Gummy, Caveat_Brush } from "next/font/google";
import { generateMetadata } from "./metadata";
import "@/assets/styles/main.scss";

export { generateMetadata };

const SITE_URL = "https://ariantika.me";

// Person JSON-LD
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Ariantika",
    alternateName: "ariantika",
    jobTitle: "Epidemiology & Biostatistics Researcher",
    description:
      "Epidemiology & Biostatistics researcher focused on cancer, infectious, and non-communicable diseases. Research design, SPSS analysis, and public health insights from North Sumatra, Indonesia.",
    url: SITE_URL,
    mainEntityOfPage: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    email: "mailto:ariantikaeffendi@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/ariantikaa",
      "https://www.instagram.com/ms.ariantikaef",
      "https://mohamedoulahguine.com",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "North Sumatra",
      addressCountry: "Indonesia",
    },
    knowsAbout: [
      "Epidemiology",
      "Biostatistics",
      "Cancer",
      "Infectious Diseases",
      "Non-Communicable Diseases",
      "SPSS",
      "Research Design",
      "Public Health",
    ],
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sour-gummy",
  display: "swap",
});

const caveatBrush = Caveat_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-caveat-brush",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourGummy.variable} ${caveatBrush.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>
      <body className="site-body">{children}</body>
    </html>
  );
}
