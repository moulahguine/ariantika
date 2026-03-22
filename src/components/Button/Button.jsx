"use client";

import { motion } from "framer-motion";
import styles from "./Button.module.scss";

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  const classes = `${variants[variant] || variants.primary} ${className}`.trim();

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${styles.button} ${classes}`}
        {...motionProps}
        {...props}
      >
        <span className={styles.inner}>{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${classes}`}
      {...motionProps}
      {...props}
    >
      <span className={styles.inner}>{children}</span>
    </motion.button>
  );
}
