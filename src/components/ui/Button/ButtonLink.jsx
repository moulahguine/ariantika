"use client";

import { forwardRef, useRef } from "react";
import Link from "next/link";
import { mergeProps } from "react-aria";
import ButtonContent from "./ButtonContent";
import {
  useInteractiveBase,
  mergeRefs,
  buildButtonClassName,
  buildDataState,
} from "./useButtonBase";
import "./Button.scss";

/**
 * ButtonLink
 *
 * Renders a Next.js <Link> styled like a button — for in-app navigation.
 *
 * Does NOT use useButton (anchors already handle activation natively).
 * When disabled, we render a non-interactive <span role="link"> instead of
 * neutering an <a href="#">, which is a common a11y anti-pattern.
 */
const ButtonLink = forwardRef(function ButtonLink(
  {
    children,
    variant = "primary",
    size = "default",
    loading = false,
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
  forwardedRef
) {
  const internalRef = useRef(null);
  const ref = mergeRefs(internalRef, forwardedRef);

  const isDisabled = disabled || loading;

  const { mergedProps, state } = useInteractiveBase({ onPress, isDisabled });

  const classes = buildButtonClassName({ variant, size, className });
  const dataState = buildDataState({
    variant,
    size,
    state,
    isDisabled,
    loading,
  });

  if (isDisabled) {
    return (
      <span
        ref={ref}
        role="link"
        aria-disabled="true"
        className={classes}
        {...dataState}
      >
        <ButtonContent
          icon={icon}
          iconPosition={iconPosition}
          loading={loading}
        >
          {children}
        </ButtonContent>
      </span>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={classes}
      {...mergeProps(mergedProps, rest)}
      {...dataState}
    >
      <ButtonContent
        icon={icon}
        iconPosition={iconPosition}
        loading={loading}
      >
        {children}
      </ButtonContent>
    </Link>
  );
});

export default ButtonLink;
