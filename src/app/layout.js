import { shadows, inter, playfair, roboto } from "./font";
import "@/assets/style/main.scss";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${roboto.variable} ${playfair.variable} ${inter.variable} ${shadows.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
