import { Inter, Sour_Gummy, Caveat_Brush } from "next/font/google";
import "@/assets/styles/main.scss";

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
      <body className="site-body">{children}</body>
    </html>
  );
}
