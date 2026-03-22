import Image from "next/image";
import styles from "./Logo.module.scss";
import Link from "next/link";

export default function Logo({
  src,
  alt,
  href = "#",
  width = 120,
  height = 40,
  priority = false,
  className = "",
}) {
  const content = (
    <Image
      src={src}
      alt={alt || "Logo"}
      width={width}
      height={height}
      priority={priority}
      className={`${styles.logo} ${className}`.trim()}
    />
  );

  if (href) {
    return (
      <Link href={href} className={styles.link} aria-label={alt || "Home"}>
        {content}
      </Link>
    );
  }

  return content;
}
