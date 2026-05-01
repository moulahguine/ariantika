const PWA_ICON_192 = "/favicon/web-app-manifest-192x192.png";
const PWA_ICON_512 = "/favicon/web-app-manifest-512x512.png";

export default function manifest() {
  return {
    id: "/",
    name: "Ariantika — Epidemiology & Biostatistics Researcher",
    short_name: "Ariantika",
    description:
      "Portfolio of Ariantika, an Epidemiology & Biostatistics Researcher based in North Sumatra, Indonesia. Research in cancer, infectious, and non-communicable diseases, with experience in research design, SPSS statistical analysis, and translating data into public health insights.",
    lang: "en",
    dir: "ltr",
    start_url: "/?source=pwa",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f8fafc",
    theme_color: "#1563a7",
    prefer_related_applications: false,
    categories: ["health", "medical", "education", "science", "research"],
    icons: [
      {
        src: PWA_ICON_192,
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: PWA_ICON_512,
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    shortcuts: [
      {
        name: "About Me",
        short_name: "About",
        description:
          "Learn about Ariantika's background and research experience",
        url: "/aboutme",
        icons: [
          {
            src: PWA_ICON_192,
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      {
        name: "Services",
        short_name: "Services",
        description:
          "Research design, statistical analysis, and public health consulting",
        url: "/services",
        icons: [
          {
            src: PWA_ICON_192,
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    ],
    screenshots: [
      {
        src: "/opengraph-image.png",
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
      },
    ],
  };
}
