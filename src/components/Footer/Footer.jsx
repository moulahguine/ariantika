import { footer } from "@/data";

import "./Footer.scss";

export default function Footer() {
  const { copyrightText, roleText } = footer.legal;

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">{copyrightText}</p>
        <p className="footer__role">{roleText}</p>
      </div>
    </footer>
  );
}
