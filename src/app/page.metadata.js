// SEO and OpenGraph metadata for the Home page
export const metadata = {
  metadataBase: new URL("https://anindita.dev"),
  title: "Anindita Anindita | Student Researcher | AI & Healthcare | UX/UI Design",
  description:
    "Anindita is a Student Researcher developing AI-driven solutions for healthcare and social impact. Passionate about UX/UI design. Based in Jakarta, Indonesia.",
  openGraph: {
    title: "Anindita Anindita | AI & Healthcare Research | UX/UI Design",
    description:
      "Student Researcher developing AI-driven solutions for healthcare and social impact. Passionate about UX/UI design. Jakarta, Indonesia.",
    url: "https://anindita.dev/",
    siteName: "Anindita Anindita Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Anindita Anindita Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anindita Anindita | AI & Healthcare Research | UX/UI Design",
    description:
      "Student Researcher developing AI-driven solutions for healthcare and social impact. Jakarta, Indonesia.",
    images: ["/opengraph-image.png"],
  },
};
