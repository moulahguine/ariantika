export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
      crawlDelay: 1,
    },
    sitemap: "https://ariantika.me/sitemap.xml",
  };
}
