"use client";

import {
  Children,
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Xarrow, { Xwrapper } from "react-xarrows";
import { useMediaQuery } from "react-responsive";

const LAPTOP_MAX_WIDTH = 1024;

const sharedArrowProps = {
  showHead: false,
  showTail: false,
  path: "smooth",
  strokeWidth: 2,
  zIndex: 0,
  divContainerProps: {
    className: "services__page-section-process-connector-layer",
  },
};

function getDesktopScurveProps(index) {
  const flip = index % 2 === 0 ? 1 : -1;
  const bend = 52;

  return {
    startAnchor: "right",
    endAnchor: "left",
    curveness: 0.42,
    _cpy1Offset: -bend * flip,
    _cpy2Offset: bend * flip,
  };
}

function getConnectionProps(index, isMobileColumn) {
  if (!isMobileColumn) {
    return getDesktopScurveProps(index);
  }

  if (index % 2 === 0) {
    return {
      startAnchor: "right",
      endAnchor: "left",
      curveness: 0.85,
    };
  }

  return {
    startAnchor: "left",
    endAnchor: "right",
    curveness: 0.85,
  };
}

function markerId(sectionId, index) {
  return `${sectionId}-process-marker-${index}`;
}

export default function ProcessConnectors({ sectionId, children }) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [started, setStarted] = useState(false);
  const isMobileColumn = useMediaQuery({ maxWidth: LAPTOP_MAX_WIDTH });
  const stepCount = Children.count(children);

  const connections = useMemo(
    () => Array.from({ length: Math.max(0, stepCount - 1) }, (_, i) => i),
    [stepCount],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setStarted(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const processClassName = [
    "services__page-section-process",
    started && "services__page-section-process--started",
    inView && "services__page-section-process--in-view",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Xwrapper>
      <div ref={containerRef} className={processClassName}>
        <ul className="services__page-section-process-items">{children}</ul>
        {connections.map((index) => {
          const start = markerId(sectionId, index);
          const end = markerId(sectionId, index + 1);
          const connectionProps = getConnectionProps(index, isMobileColumn);

          const arrowKey = `${start}-${end}-${isMobileColumn ? "col" : "row"}`;

          return (
            <Fragment key={index}>
              <Xarrow
                key={`${arrowKey}-track`}
                start={start}
                end={end}
                {...connectionProps}
                {...sharedArrowProps}
                color="rgb(from var(--accent-color) r g b / 0.28)"
                arrowBodyProps={{
                  className: "services__page-section-process-connector-track",
                }}
              />
              <Xarrow
                key={`${arrowKey}-fill`}
                start={start}
                end={end}
                {...connectionProps}
                {...sharedArrowProps}
                color="var(--accent-color)"
                arrowBodyProps={{
                  className: "services__page-section-process-connector-fill",
                  pathLength: "1",
                  style: { "--i": index },
                }}
              />
            </Fragment>
          );
        })}
      </div>
    </Xwrapper>
  );
}
