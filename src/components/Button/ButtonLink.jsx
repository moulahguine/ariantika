"use client";

import { forwardRef } from "react";
import NextLink from "next/link";
import { Link as RACLink } from "react-aria-components";
import "./Button.scss";

const ButtonLink = forwardRef(function ButtonLink(
  {
    children,
    variant = "primary",
    size = "default",
    disabled = false,
    icon,
    iconPosition = "left",
    href,
    target,
    rel,
    onPress,
    className = "",
    ...rest
  },
  ref,
) {
  const showLeftIcon = icon && iconPosition === "left";
  const showRightIcon = icon && iconPosition === "right";

  return (
    <RACLink
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      isDisabled={disabled}
      onPress={onPress}
      className={["btn", `btn--${variant}`, `btn--${size}`, className]
        .filter(Boolean)
        .join(" ")}
      render={(props) =>
        "href" in props ? <NextLink {...props} /> : <span {...props} />
      }
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

export default ButtonLink;
