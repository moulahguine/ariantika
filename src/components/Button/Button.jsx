"use client";

import { forwardRef } from "react";
import NextLink from "next/link";
import { Button as RACButton, Link as RACLink } from "react-aria-components";
import { Tooltip, TooltipTrigger } from "@/components";

import "./Button.scss";

function isInternalHref(href) {
  return (
    typeof href === "string" && href.startsWith("/") && !href.startsWith("//")
  );
}

function getDownloadAttr(download) {
  if (download === undefined || download === false) return undefined;
  return typeof download === "string" ? download : "";
}

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
    href,
    download,
    target,
    rel,
    onPress,
    className = "",
    label,
    tooltipPlacement = "top",
    ...rest
  },
  ref,
) {
  const hasLabel = children != null && children !== false && children !== "";
  const isIconOnly = Boolean(icon) && !hasLabel;
  const tooltipText = rest["aria-label"] ?? label;

  const classNames = [
    "button",
    `button__${variant}`,
    `button__${size}`,
    isIconOnly ? "button--icon-only" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const showLeftIcon = icon && (isIconOnly || iconPosition === "left");
  const showRightIcon = icon && !isIconOnly && iconPosition === "right";

  // ---- content ----
  const content = (
    <>
      {loading ? (
        <span className="button__loading" aria-hidden="true">
          <span className="button__spinner" />
        </span>
      ) : null}

      <span className={`button__content${loading ? " is-hidden" : ""}`}>
        {showLeftIcon ? (
          <span className="button__icon" aria-hidden="true">
            {icon}
          </span>
        ) : null}

        {hasLabel ? <span className="button__label">{children}</span> : null}

        {showRightIcon ? (
          <span className="button__icon" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </span>
    </>
  );

  const a11yProps =
    isIconOnly && label && rest["aria-label"] == null
      ? { "aria-label": label }
      : {};

  let trigger;

  if (href == null) {
    trigger = (
      <RACButton
        ref={ref}
        type={type}
        isDisabled={disabled}
        isPending={loading}
        onPress={onPress}
        className={classNames}
        {...a11yProps}
        {...rest}
      >
        {content}
      </RACButton>
    );
  } else {
    const downloadAttr = getDownloadAttr(download);
    const useNextLink = isInternalHref(href) && downloadAttr === undefined;

    trigger = (
      <RACLink
        ref={ref}
        href={href}
        download={downloadAttr}
        target={target}
        rel={rel}
        isDisabled={disabled || loading}
        onPress={onPress}
        className={classNames}
        {...(useNextLink
          ? {
              render: (props) =>
                "href" in props ? <NextLink {...props} /> : <span {...props} />,
            }
          : {})}
        {...a11yProps}
        {...rest}
      >
        {content}
      </RACLink>
    );
  }

  if (isIconOnly && tooltipText) {
    return (
      <TooltipTrigger>
        {trigger}
        <Tooltip placement={tooltipPlacement}>{tooltipText}</Tooltip>
      </TooltipTrigger>
    );
  }

  return trigger;
});

export default Button;
