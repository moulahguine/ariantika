// "use client";

// import { useEffect, useRef, useState } from "react";
// import "./Journey.scss";

// const MILESTONES = [
//   {
//     year: "2012",
//     title: "Bachelor of Public Health",
//     subtitle: "Environmental Health • USU",
//     body: "Started my undergraduate journey at Universitas Sumatera Utara, Medan, building the foundation in public health.",
//     place: "Medan, Indonesia",
//     icon: "🎓",
//   },
//   {
//     year: "2017",
//     title: "Into Research",
//     subtitle: "Research Assistant • USU",
//     body: "Graduated and stepped straight into supporting epidemiological and environmental health research at the Faculty of Public Health.",
//     place: "Medan, Indonesia",
//     icon: "🔬",
//   },
//   {
//     year: "2021",
//     title: "Hospital Experience",
//     subtitle: "Adam Malik General Hospital",
//     body: "Took on administrative work in a hospital setting alongside research — sharpening organization and gaining clinical exposure.",
//     place: "Medan, Indonesia",
//     icon: "🏥",
//   },
//   {
//     year: "2022",
//     title: "Back to University",
//     subtitle: "Master's in Epidemiology",
//     body: "Returned to USU to formalize the methods behind the questions I had been asking through every research project.",
//     place: "Medan, Indonesia",
//     icon: "📚",
//   },
//   {
//     year: "2024",
//     title: "First Publication",
//     subtitle: "Quality of Life in Lung Cancer",
//     body: "Master's thesis published in Jurnal Respirologi Indonesia (SINTA 2 Accredited). Graduated with a 3.85 GPA.",
//     place: "Medan, Indonesia",
//     icon: "📄",
//   },
//   {
//     year: "2025",
//     title: "Scopus & Beyond",
//     subtitle: "Q1–Q3 manuscripts • Genomics Dojo",
//     body: "Multiple Scopus-indexed manuscripts under review (Health & Place, CTRC, Iranian J. Public Health). Selected for the Genomics & Science Dojo, supported by the British Embassy.",
//     place: "Jakarta, Indonesia",
//     icon: "🧬",
//   },
//   {
//     year: "Soon",
//     title: "PhD on the Horizon",
//     subtitle: "The next chapter",
//     body: "Preparing for doctoral research — turning years of fieldwork and publications into a focused, long-form research program.",
//     place: "Coming next",
//     icon: "🚀",
//   },
// ];

// const SPACING = 460;
// const PADDING_X = 260;
// const ROAD_HEIGHT = 320;
// const AMPLITUDE = 90;
// // Each pair of milestones spans one full road bend.
// const PERIOD = SPACING * 2;
// // Phase so the road crosses the midline at every milestone position.
// const PHASE = -(2 * Math.PI * PADDING_X) / PERIOD;

// function buildRoadPath(totalWidth, amplitude, period, phase) {
//   const cy = ROAD_HEIGHT / 2;
//   const step = 6;
//   const startY = cy + amplitude * Math.sin(phase);
//   let d = `M 0 ${startY.toFixed(2)}`;
//   for (let x = step; x <= totalWidth; x += step) {
//     const y = cy + amplitude * Math.sin((2 * Math.PI * x) / period + phase);
//     d += ` L ${x} ${y.toFixed(2)}`;
//   }
//   return d;
// }

// // Closed-form: point + tangent on the road at a given x position.
// // More reliable than SVGPathElement.getPointAtLength which can return stale
// // values during transitions.
// function sampleRoad(x) {
//   const cy = ROAD_HEIGHT / 2;
//   const k = (2 * Math.PI * x) / PERIOD + PHASE;
//   const y = cy + AMPLITUDE * Math.sin(k);
//   // Slope of the road at this x: dy/dx
//   const slope = AMPLITUDE * ((2 * Math.PI) / PERIOD) * Math.cos(k);
//   // Tangent angle in degrees, in [-90, 90]. Always in path's forward direction
//   // because dx > 0 by construction.
//   const angle = (Math.atan(slope) * 180) / Math.PI;
//   return { x, y, angle };
// }

// export default function Journey() {
//   const sectionRef = useRef(null);
//   const trackRef = useRef(null);
//   const carRef = useRef(null);
//   const [isInteractive, setIsInteractive] = useState(false);

//   const trackWidth = MILESTONES.length * SPACING + PADDING_X * 2;

//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     const mq = window.matchMedia(
//       "(min-width: 769px) and (prefers-reduced-motion: no-preference)"
//     );
//     const update = () => setIsInteractive(mq.matches);
//     update();
//     mq.addEventListener("change", update);
//     return () => mq.removeEventListener("change", update);
//   }, []);

//   useEffect(() => {
//     if (!isInteractive) return;
//     const section = sectionRef.current;
//     const track = trackRef.current;
//     const car = carRef.current;
//     if (!section || !track || !car) return;

//     let frame = 0;
//     let lastProgress = -1;
//     let lastDirection = 1; // 1 = forward (right), -1 = reverse (left)

//     const update = () => {
//       const rect = section.getBoundingClientRect();
//       const sectionHeight = section.offsetHeight;
//       const viewportH = window.innerHeight;
//       const max = sectionHeight - viewportH;
//       if (max <= 0) {
//         track.style.transform = "translate3d(0,0,0)";
//         return;
//       }
//       const scrolled = -rect.top;
//       const progress = Math.max(0, Math.min(1, scrolled / max));

//       // Detect direction (keep last when scroll is essentially still)
//       if (lastProgress >= 0) {
//         const dx = progress - lastProgress;
//         if (Math.abs(dx) >= 0.0005) {
//           lastDirection = dx > 0 ? 1 : -1;
//         }
//       }
//       lastProgress = progress;

//       // Translate the horizontal track
//       const distance = Math.max(trackWidth - window.innerWidth, 0);
//       track.style.transform = `translate3d(${(-progress * distance).toFixed(
//         2
//       )}px, 0, 0)`;

//       // Position the car along the road using closed-form sampling
//       const carX = progress * trackWidth;
//       const sample = sampleRoad(carX);
//       // 🚗 emoji defaults to facing LEFT, so add 180° when driving right.
//       const angle =
//         lastDirection === 1 ? sample.angle + 180 : sample.angle;
//       car.setAttribute(
//         "transform",
//         `translate(${sample.x.toFixed(2)} ${sample.y.toFixed(
//           2
//         )}) rotate(${angle.toFixed(2)})`
//       );
//     };

//     const onScroll = () => {
//       cancelAnimationFrame(frame);
//       frame = requestAnimationFrame(update);
//     };

//     update();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onScroll);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//       cancelAnimationFrame(frame);
//     };
//   }, [isInteractive, trackWidth]);

//   const roadPath = buildRoadPath(trackWidth, AMPLITUDE, PERIOD, PHASE);

//   return (
//     <section
//       ref={sectionRef}
//       className={`journey ${
//         isInteractive ? "journey--horizontal" : "journey--stacked"
//       }`}
//       aria-labelledby="journey-heading"
//       style={isInteractive ? { height: `${trackWidth}px` } : undefined}
//     >
//       <div className="journey__sticky">
//         <header className="journey__header">
//           <p className="journey__eyebrow">Experience &amp; Education</p>
//           <h2 id="journey-heading" className="journey__title">
//             My <span className="journey__title-accent">Journey</span>.
//           </h2>
//           <p className="journey__lead">
//             Following the strand of a research career — from undergrad to PhD
//             plans. Scroll to walk through it.
//           </p>
//         </header>

//         <div className="journey__viewport">
//           <div
//             ref={trackRef}
//             className="journey__track"
//             style={{ width: `${trackWidth}px` }}
//           >
//             <svg
//               className="journey__road"
//               viewBox={`0 0 ${trackWidth} ${ROAD_HEIGHT}`}
//               width={trackWidth}
//               height={ROAD_HEIGHT}
//               preserveAspectRatio="none"
//               aria-hidden="true"
//             >
//               {/* Road body (asphalt) */}
//               <path d={roadPath} className="journey__road-asphalt" />
//               {/* Center dashed line */}
//               <path d={roadPath} className="journey__road-line" />

//               {/* Car driving along the road */}
//               <g ref={carRef} className="journey__car">
//                 <text
//                   className="journey__car-emoji"
//                   textAnchor="middle"
//                   dominantBaseline="central"
//                 >
//                   🚗
//                 </text>
//               </g>
//             </svg>

//             <ol
//               className="journey__milestones"
//               aria-label="Career milestones in chronological order"
//             >
//               {MILESTONES.map((m, i) => {
//                 const cx = PADDING_X + i * SPACING;
//                 const above = i % 2 === 0;
//                 return (
//                   <li
//                     key={m.year + m.title}
//                     className={`journey__milestone journey__milestone--${
//                       above ? "top" : "bottom"
//                     }`}
//                     style={{ left: `${cx}px` }}
//                   >
//                     <span className="journey__node" aria-hidden="true">
//                       <span className="journey__node-icon">{m.icon}</span>
//                     </span>
//                     <article className="journey__card">
//                       <p className="journey__card-year">{m.year}</p>
//                       <h3 className="journey__card-title">{m.title}</h3>
//                       <p className="journey__card-subtitle">{m.subtitle}</p>
//                       <p className="journey__card-body">{m.body}</p>
//                       <p className="journey__card-place">{m.place}</p>
//                     </article>
//                   </li>
//                 );
//               })}
//             </ol>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
