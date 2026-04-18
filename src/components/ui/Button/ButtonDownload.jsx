"use client";

import { forwardRef, useRef } from "react";
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
 * ButtonDownload
 *
 * Renders a native <a download> styled like a button — for file downloads
 * (resume PDF, assets, etc.). Uses a plain anchor instead of next/link so
 * the browser actually triggers a download instead of client-side routing.
 *
 * `download` may be:
 *   - true            → use the server-suggested filename
 *   - "filename.ext"  → override the filename
 */
const ButtonDownload = forwardRef(function ButtonDownload(
  {
    children,
    variant = "primary",
    size = "default",
    loading = false,
    disabled = false,
    icon,
    iconPosition = "left",
    href,
    download = true,
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

  const downloadAttr = typeof download === "string" ? download : "";

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
    <a
      ref={ref}
      href={href}
      download={downloadAttr}
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
    </a>
  );
});

export default ButtonDownload;
