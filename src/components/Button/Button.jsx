"use client";

import { forwardRef } from "react";
import { Button as RACButton } from "react-aria-components";
import "./Button.scss";

const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "default",
    loading = false,
    disabled = false,
    icon,
    iconPosition = "left",
    type = "button",
    onPress,
    className = "",
    ...rest
  },
  ref,
) {
  const isDisabled = disabled || loading;
  const showLeftIcon = icon && iconPosition === "left";
  const showRightIcon = icon && iconPosition === "right";

  return (
    <RACButton
      ref={ref}
      type={type}
      isDisabled={isDisabled}
      onPress={onPress}
      className={["btn", `btn--${variant}`, `btn--${size}`, className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {loading ? (
        <span className="btn__loading" aria-hidden="true">
          <span className="btn__spinner" />
        </span>
      ) : null}

      <span className={`btn__content${loading ? " is-hidden" : ""}`}>
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
    </RACButton>
  );
});

export default Button;
