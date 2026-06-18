"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  CAROUSEL_PERSPECTIVE,
  carouselDotProgress,
  carouselDotProgressTransition,
  carouselSlideTransition,
  getCarouselSlideStates,
} from "@/lib";

import "./ImageCarousel.scss";

const AUTOPLAY_MS = 3000;
const SWIPE_THRESHOLD = 75;

function getSlideRole(index, active, total) {
  if (index === active) return "active";
  if (index === (active - 1 + total) % total) return "prev";
  return "next";
}

// Image Carousel Component
export default function ImageCarousel({ images = [], ariaLabel }) {
  const slides = images.slice(0, 3);
  const total = slides.length;
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const slideStates = getCarouselSlideStates(reduceMotion);

  // Go to the next or previous slide
  const goTo = useCallback(
    (next) => setActive(((next % total) + total) % total),
    [total],
  );

  // Autoplay the carousel
  useEffect(() => {
    if (isPaused || total <= 1) return undefined;
    const id = window.setTimeout(() => goTo(active + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, isPaused, total, goTo]);

  // Handle the drag end event
  const handleDragEnd = (_event, info) => {
    const projected = info.offset.x + info.velocity.x * 0.2;
    if (projected < -SWIPE_THRESHOLD) goTo(active + 1);
    else if (projected > SWIPE_THRESHOLD) goTo(active - 1);
  };

  // Handle the key down event
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(active + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(active - 1);
    }
  };

  // If there are no images, return null
  if (total === 0) return null;

  return (
    // Image Carousel Component
    <div
      className="image-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
    >
      <div className="image-carousel__stage">
        {slides.map((img, idx) => {
          const role = getSlideRole(idx, active, total);
          const isActive = role === "active";

          return (
            <motion.figure
              key={img.alt ?? `slide-${idx}`}
              className={`image-carousel__card image-carousel__card--${role}${
                isActive ? " image-carousel__card--active" : ""
              }`}
              style={{ transformPerspective: CAROUSEL_PERSPECTIVE }}
              animate={slideStates[role]}
              transition={carouselSlideTransition}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0}
              onDragStart={() => setIsPaused(true)}
              onDragEnd={handleDragEnd}
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
              {img.caption ? (
                <figcaption className="image-carousel__caption">
                  {img.caption}
                </figcaption>
              ) : null}
            </motion.figure>
          );
        })}
      </div>

      {total > 1 && (
        <div
          className="image-carousel__dots"
          role="tablist"
          aria-label="Select slide"
        >
          {slides.map((img, idx) => {
            const isCurrent = idx === active;
            return (
              <button
                key={img.alt ?? `dot-${idx}`}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                aria-label={`Image ${idx + 1} of ${img.alt}`}
                className={`image-carousel__dot${
                  isCurrent ? " image-carousel__dot--active" : ""
                }`}
                onClick={() => goTo(idx)}
              >
                {isCurrent && !isPaused && (
                  <motion.span
                    key={`progress-${active}`}
                    className="image-carousel__dot-progress"
                    initial={carouselDotProgress.initial}
                    animate={carouselDotProgress.animate}
                    transition={carouselDotProgressTransition(AUTOPLAY_MS)}
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
