"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import "./ImageCarousel.scss";

const AUTOPLAY_MS = 3000;
const SWIPE_THRESHOLD = 75;
const SPRING = { type: "spring", stiffness: 260, damping: 30, mass: 0.9 };

/**
 * Maps a slide index to its offset from the active slide, wrapping
 * around so -N/2..N/2 represents the nearest route to each card.
 */
function getRelativeOffset(index, active, total) {
  let offset = index - active;
  const half = total / 2;
  if (offset > half) offset -= total;
  if (offset < -half) offset += total;
  return offset;
}

export default function ImageCarousel({
  images = [],
  ariaLabel = "Photo carousel",
}) {
  const total = images.length;
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (next) => setActive(((next % total) + total) % total),
    [total]
  );
  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (isPaused || total <= 1) return undefined;
    const id = window.setTimeout(goNext, AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, isPaused, total, goNext]);

  const handleDragEnd = (_event, info) => {
    const projected = info.offset.x + info.velocity.x * 0.2;
    if (projected < -SWIPE_THRESHOLD) goNext();
    else if (projected > SWIPE_THRESHOLD) goPrev();
  };

  if (total === 0) return null;

  return (
    <div
      className="image-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="image-carousel__stage">
        {images.map((img, idx) => {
          const offset = getRelativeOffset(idx, active, total);
          const abs = Math.abs(offset);
          const isActive = offset === 0;
          const isVisible = abs <= 2;

          const slideKey = img.alt ?? `slide-${idx}`;

          return (
            <motion.div
              key={slideKey}
              className={`image-carousel__card${
                isActive ? " image-carousel__card--active" : ""
              }`}
              style={{ zIndex: 10 - abs }}
              animate={{
                x: `${offset * 62}%`,
                scale: isActive ? 1 : 0.7 - (abs - 1) * 0.08,
                // opacity: !isVisible ? 0 : isActive ? 1 : 1 - (abs - 1) * 0.2,
                filter: isActive
                  ? "blur(0px) brightness(1)"
                  : `blur(${3 + (abs - 1) * 3}px) brightness(0.75)`,
                rotateY: offset * -6,
                pointerEvents: isVisible ? "auto" : "none",
              }}
              transition={SPRING}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.22}
              onDragStart={() => setIsPaused(true)}
              onDragEnd={handleDragEnd}
              whileHover={isActive ? { scale: 1.02 } : undefined}
              whileTap={isActive ? { cursor: "grabbing" } : undefined}
              onClick={() => !isActive && goTo(idx)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} of ${total}`}
              aria-hidden={!isActive}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={520}
                height={640}
                className="image-carousel__image"
                draggable={false}
                sizes="(max-width: 768px) 80vw, 460px"
                priority={idx === 0}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          );
        })}
      </div>

      {total > 1 && (
        <div
          className="image-carousel__dots"
          role="tablist"
          aria-label="Select slide"
        >
          {images.map((img, idx) => {
            const isCurrent = idx === active;
            const dotKey = img.alt ?? `dot-${idx}`;
            return (
              <button
                key={dotKey}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                aria-label={`Go to slide ${idx + 1}`}
                className={`image-carousel__dot${
                  isCurrent ? " image-carousel__dot--active" : ""
                }`}
                onClick={() => goTo(idx)}
              >
                {isCurrent && !isPaused && (
                  <motion.span
                    className="image-carousel__dot-progress"
                    key={`progress-${active}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: AUTOPLAY_MS / 1000,
                      ease: "linear",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
