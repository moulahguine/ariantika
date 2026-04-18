import Link from "next/link";
import Image from "next/image";
import logoSrc from "@/assets/images/logo/logo.png";
import "./Logo.scss";

export default function Logo() {
  return (
    <Link href="/" className="logo__wrapper" title="Home" aria-label="Home">
      <Image
        src={logoSrc}
        alt="logo "
        width={150}
        height={55}
        priority
        className="logo__wrapper-image"
      />
    </Link>
  );
}
