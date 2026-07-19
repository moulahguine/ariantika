import * as motion from "motion/react-client";
import { Button } from "@/components";
import { socialLinks } from "@/data";
import { scaleIn, socialLinksStagger, viewportOnce } from "@/lib";

import "./SocialLinks.scss";

function isExternalHref(href) {
  return !href.startsWith("mailto:") && !href.startsWith("tel:");
}

export default function SocialLinks({
  direction = "vertical",
  className = "",
  onItemClick,
}) {
  const tooltipPlacement = direction === "vertical" ? "left" : "top";

  return (
    <nav
      className={`social-links social-links--${direction} ${className}`.trim()}
      aria-label="Social links"
    >
      <motion.ul
        className="social-links__list"
        variants={socialLinksStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {socialLinks.map((link) => {
          const external = isExternalHref(link.href);

          return (
            <motion.li
              key={link.id}
              className="social-links__item"
              variants={scaleIn}
            >
              <Button
                className="social-links__link"
                style={{ "--color-link": link.color }}
                href={link.href}
                icon={link.icon}
                aria-label={link.label}
                tooltipPlacement={tooltipPlacement}
                variant="primary"
                size="small"
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                onPress={onItemClick}
              />
            </motion.li>
          );
        })}
      </motion.ul>
    </nav>
  );
}
