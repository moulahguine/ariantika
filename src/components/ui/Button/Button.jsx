"use client";

import { forwardRef, useRef } from "react";
import { mergeProps } from "react-aria";
import ButtonContent from "./ButtonContent";
import {
  useButtonBase,
  mergeRefs,
  buildButtonClassName,
  buildDataState,
} from "./useButtonBase";
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
  forwardedRef
) {
  const internalRef = useRef(null);
  const ref = mergeRefs(internalRef, forwardedRef);

  const isDisabled = disabled || loading;

  const { mergedProps, state } = useButtonBase(
    { onPress, isDisabled, type },
    internalRef
  );

  const classes = buildButtonClassName({ variant, size, className });
  const dataState = buildDataState({
    variant,
    size,
    state,
    isDisabled,
    loading,
  });

  return (
    <button
      ref={ref}
      className={classes}
      {...mergeProps(mergedProps, rest)}
      {...dataState}
    >
      <ButtonContent icon={icon} iconPosition={iconPosition} loading={loading}>
        {children}
      </ButtonContent>
    </button>
  );
});

export default Button;
