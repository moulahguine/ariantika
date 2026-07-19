"use client";

import {
  Focusable,
  Tooltip as RACTooltip,
  TooltipTrigger as RACTooltipTrigger,
} from "react-aria-components";

import "./Tooltip.scss";

export { Focusable };

export function Tooltip({ children, className = "", offset = 5, ...props }) {
  return (
    <RACTooltip
      {...props}
      offset={offset}
      className={["tooltip", className].filter(Boolean).join(" ")}
    >
      {children}
    </RACTooltip>
  );
}

export function TooltipTrigger({ delay = 100, closeDelay = 0, ...props }) {
  return <RACTooltipTrigger delay={delay} closeDelay={closeDelay} {...props} />;
}
