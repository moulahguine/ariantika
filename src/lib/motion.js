// smooth "ease-out-expo" curve for a premium, settled feel
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

// default viewport config: reveal once, when ~20% is in view
export const viewportOnce = { once: true, amount: 0.3 };

// orchestrates a staggered reveal of children
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// tighter stagger for dense lists / grids
export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// soft blur + lift reveal (default item)
export const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(16px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

// blur + lift reveal with per-item delay — pass `custom` index via the `custom` prop
export const fadeUpStagger = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE_OUT_EXPO, delay: i * 0.1 },
  }),
};

export const hoverPop = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 0, opacity: 0 },
  hover: { scale: 1, opacity: 1 },
};

// gentle fade with blur, no movement
export const fadeIn = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
};

// springy pop for buttons / cards / icons
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 220, damping: 22, mass: 0.9 },
  },
};

// springy pop with upward lift — CTA rows, action groups
export const springPopUp = {
  hidden: { opacity: 0, y: 20, scale: 0.92, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 220, damping: 22, mass: 0.9 },
  },
};

// playful rotate + scale settle for small icons (pins, markers, etc.)
export const rotateSettle = {
  hidden: { rotate: -12, scale: 0.6 },
  visible: {
    rotate: 4,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 14, delay: 0.25 },
  },
};

// delayed spring pop from zero — floating badges, overlays, labels
export const springPopDelayed = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 12, delay: 0.6 },
  },
};

// cinematic scale + blur reveal for media / images
export const mediaReveal = {
  hidden: { opacity: 0, scale: 0.4, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: EASE_OUT_EXPO },
  },
};

// directional slide reveals (great for alternating layouts)
export const slideInLeft = {
  hidden: { opacity: 0, x: -60, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE_OUT_EXPO },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE_OUT_EXPO },
  },
};

// ---- deck-of-cards spread ----
export const deckSpreadContainer = {
  hidden: {},
  visible: {},
};

// how long the center card takes to scale in before the side cards move
const DECK_CENTER_DURATION = 0.9;

// Wrapped layout (≤1279px): simple staggered fade-up per card.
const deckSpreadWrapped = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(12px)",
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: EASE_OUT_EXPO,
      delay: index * 0.1,
    },
  }),
};

export const deckSpreadCard = {
  hidden: ({ index, isDesktop }) => {
    if (!isDesktop) return deckSpreadWrapped.hidden;

    switch (index) {
      case 0:
        return {
          opacity: 0,
          x: "100%",
        };

      case 1:
        return {
          opacity: 0,
          scale: 0.5,
        };

      case 2:
        return {
          opacity: 0,
          x: "-100%",
        };

      default:
        return {};
    }
  },

  visible: ({ index, isDesktop }) => {
    if (!isDesktop) return deckSpreadWrapped.visible(index);

    switch (index) {
      case 0:
        return {
          opacity: 1,
          x: "0%",
          scale: 1,
          transition: {
            delay: DECK_CENTER_DURATION - 0.3,
            duration: 0.3,
            ease: "linear",
          },
        };

      case 1:
        return {
          opacity: 1,
          scale: 1,
          transition: {
            duration: DECK_CENTER_DURATION,
            ease: EASE_OUT_EXPO,
          },
        };

      case 2:
        return {
          opacity: 1,
          x: "0%",
          scale: 1,
          transition: {
            delay: DECK_CENTER_DURATION - 0.3,
            duration: 0.3,
            ease: "linear",
          },
        };

      default:
        return {};
    }
  },

  // lets child cursor variants respond to card hover
  hover: {},
};

// sticky bars (header, toolbar) — slide up and fade out when hidden
export const stickyBarReveal = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

export const stickyBarTransition = { duration: 0.7, ease: "easeInOut" };

// ---- 3D image carousel ----
export const CAROUSEL_SIDE_ROTATE_DEG = 52;
export const CAROUSEL_SIDE_DEPTH = -140;
export const CAROUSEL_PERSPECTIVE = 1200;

export const carouselSlideTransition = {
  type: "spring",
  stiffness: 260,
  damping: 30,
  mass: 0.9,
};

export function getCarouselSlideStates(reduceMotion = false) {
  const sideRotate = reduceMotion ? 0 : CAROUSEL_SIDE_ROTATE_DEG;
  const sideDepth = reduceMotion ? 0 : CAROUSEL_SIDE_DEPTH;

  return {
    active: {
      x: "0%",
      rotateY: 0,
      z: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px) brightness(1)",
      zIndex: 3,
    },
    prev: {
      x: "-54%",
      rotateY: sideRotate,
      z: sideDepth,
      scale: 0.78,
      opacity: 0.92,
      filter: "blur(0px) brightness(0.88)",
      zIndex: 2,
    },
    next: {
      x: "54%",
      rotateY: -sideRotate,
      z: sideDepth,
      scale: 0.78,
      opacity: 0.92,
      filter: "blur(0px) brightness(0.88)",
      zIndex: 2,
    },
  };
}

export const carouselDotProgress = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
};

export function carouselDotProgressTransition(durationMs) {
  return { duration: durationMs / 1000, ease: "linear" };
}
