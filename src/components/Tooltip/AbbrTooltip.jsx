"use client";

import { useState } from "react";
import { Focusable, Tooltip, TooltipTrigger } from "./Tooltip";

export function AbbrTooltip({
  children,
  content,
  className = "",
  placement = "top",
  ...triggerProps
}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <TooltipTrigger
      isOpen={isOpen}
      onOpenChange={setOpen}
      shouldCloseOnPress={false}
      {...triggerProps}
    >
      <Focusable>
        <abbr className={className} onClick={() => setOpen(true)}>
          {children}
        </abbr>
      </Focusable>
      <Tooltip placement={placement}>{content}</Tooltip>
    </TooltipTrigger>
  );
}
