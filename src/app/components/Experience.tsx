import { experiences } from "../data/portfolio";
import { CheckCircleIcon } from "./Icons";

export default function Experience() {
  return (
    <section className="section-light" id="experience">
      <div className="container">
        <div className="section-heading-center" data-reveal>
          <span className="eyebrow-orange">Experience</span>
          <h2 className="section-title-lg">
            My <span className="text-orange">Work Experience</span>
          </h2>
          <p className="section-subtitle">
            Roles where I converted learning into delivery: production mobile
            releases, automation, frontend delivery, AI/ML foundations, and
            leadership exposure.
          </p>
        </div>

        <div className="exp-timeline">
          {experiences.map((item, idx) => (
            <article
              className="exp-row"
              key={`${item.company}-${item.role}`}
              data-reveal
            >
              <div className="exp-left-col">
                <h3 className="exp-company">{item.company}</h3>
                <p className="exp-period">{item.period}</p>
                <div className="exp-meta-tags">
                  <span className="exp-type-badge">{item.type}</span>
                  <span className="exp-location-badge">{item.location}</span>
                </div>
              </div>

              <div className="exp-node-col" aria-hidden="true">
                <div className="exp-node-ring">
                  <span
                    className={`exp-node-dot ${idx % 2 === 0 ? "is-orange" : "is-dark"}`}
                  />
                </div>
              </div>

              <div className="exp-right-col">
                <h3 className="exp-role">{item.role}</h3>
                <p className="exp-summary">{item.summary}</p>
                <ul className="exp-impact-list">
                  {item.impact.map((impact) => (
                    <li key={impact}>
                      <CheckCircleIcon />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
