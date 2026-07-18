"use client";

import { forwardRef } from "react";
import { Link as RACLink } from "react-aria-components";

import "./Button.scss";

const ButtonDownload = forwardRef(function ButtonDownload(
  {
    children,
    variant = "primary",
    size = "default",
    disabled = false,
    icon,
    iconPosition = "left",
    href,
    download = true,
    target,
    rel,
    className = "",
    ...rest
  },
  ref,
) {
  const downloadAttr =
    typeof download === "string" ? download : download ? "" : undefined;
  const showLeftIcon = icon && iconPosition === "left";
  const showRightIcon = icon && iconPosition === "right";

  return (
    <RACLink
      ref={ref}
      href={href}
      download={downloadAttr}
      target={target}
      rel={rel}
      isDisabled={disabled}
      className={["btn", `btn--${variant}`, `btn--${size}`, className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      <span className="btn__content">
        {showLeftIcon ? (
          <span className="btn__icon" aria-hidden="true">
            {icon}
          </span>
        ) : null}

        {children ? <span className="btn__label">{children}</span> : null}

        {showRightIcon ? (
          <span className="btn__icon" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </span>
    </RACLink>
  );
});

export default ButtonDownload;
