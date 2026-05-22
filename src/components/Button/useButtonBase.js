"use client";

import {
  mergeProps,
  useButton,
  useFocusRing,
  useHover,
  usePress,
} from "react-aria";

// logic hook for a real <button>
export function useButtonBase({ onPress, isDisabled, type = "button" }, ref) {
  const { buttonProps, isPressed } = useButton(
    { onPress, isDisabled, elementType: "button", type },
    ref
  );
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing();

  return {
    mergedProps: mergeProps(buttonProps, hoverProps, focusProps),
    state: { isHovered, isPressed, isFocusVisible },
  };
}

// logic hook for non-button interactive elements (<a>, Next <Link>)
export function useInteractiveBase({ onPress, isDisabled } = {}) {
  const { pressProps, isPressed } = usePress({ onPress, isDisabled });
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing();

  return {
    mergedProps: mergeProps(pressProps, hoverProps, focusProps),
    state: { isHovered, isPressed, isFocusVisible },
  };
}

// combine multiple refs (callback or object) into a single callback ref
export function mergeRefs(...refs) {
  return (node) => {
    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === "function") ref(node);
      else ref.current = node;
    }
  };
}

// shared classname builder so Button / ButtonLink / ButtonDownload all produce identical class lists and can share Button.scss
export function buildButtonClassName({
  variant = "primary",
  size = "default",
  className = "",
}) {
  return ["btn", `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(" ");
}

// translate interaction state into the data-* attributes consumed by Button.scss
export function buildDataState({ variant, size, state, isDisabled, loading }) {
  return {
    "data-variant": variant,
    "data-size": size,
    "data-hovered": state.isHovered || undefined,
    "data-focus-visible": state.isFocusVisible || undefined,
    "data-pressed": state.isPressed || undefined,
    "data-disabled": isDisabled || undefined,
    "data-loading": loading || undefined,
    "aria-busy": loading || undefined,
  };
}
