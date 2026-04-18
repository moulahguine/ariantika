import { aboutPreview } from "@/data/content";

import "./About.scss";

const highlightItems = [
  "Epidemiology",
  "Biostatistics",
  "Oncology Studies",
  "Infectious Diseases",
];

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about__container">
        <header className="about__header">
          <p className="about__eyebrow">About</p>
          <h2 className="about__title" id="about-heading">
            Advancing public health through rigorous research and data clarity.
          </h2>
        </header>

        <div className="about__content">
          <div className="about__summary">
            {aboutPreview.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <ul className="about__highlights" aria-label="Core domains">
            {highlightItems.map((item) => (
              <li className="about__highlights-item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
