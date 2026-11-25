import { operatingModel, roleLenses } from "../data/portfolio";
import { ArrowUpRightIcon, CheckCircleIcon } from "./Icons";

export default function Approach() {
  return (
    <section className="approach-section" id="approach">
      <div className="dark-wavy-band">
        <div className="dark-wavy-orb-left" aria-hidden="true" />
        <div className="dark-wavy-orb-right" aria-hidden="true" />

        <div className="container dark-wavy-inner">
          <div className="dark-header-split" data-reveal>
            <div>
              <span className="eyebrow-orange">Role Lenses &amp; Engineering Method</span>
              <h2 className="section-title-lg inverse">
                My approach is to turn uncertainty into a{" "}
                <span className="text-orange">system that can ship.</span>
              </h2>
            </div>
            <p>
              Good engineering is not only syntax. It is framing the problem,
              choosing the right constraint, finding the first complete slice, and
              designing the parts that keep working after launch.
            </p>
          </div>

          <div className="lens-deck-grid" aria-label="Role fit areas">
            {roleLenses.map((role, idx) => (
              <article className="lens-deck-card" key={role.title} data-reveal>
                <div className="lens-card-surface">
                  <div className="lens-card-header">
                    <h3>{role.title}</h3>
                    <span className="lens-index-pill">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="lens-stack-body">
                    <div className="lens-back-layer-2" aria-hidden="true" />
                    <div className="lens-back-layer-1" aria-hidden="true" />
                    <div className="lens-front-panel">
                      <p className="lens-fit-copy">{role.fit}</p>
                      <ul className="lens-proof-list">
                        {role.proof.map((item) => (
                          <li key={item}>
                            <CheckCircleIcon />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <a
                  href="#projects"
                  className="corner-circle-arrow"
                  aria-label={`Explore ${role.title} projects`}
                >
                  <ArrowUpRightIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="container method-subblock">
        <div className="dark-header-split" data-reveal>
          <div>
            <span className="eyebrow-orange">Operating Model</span>
            <h3 className="section-title-lg">
              Five stages from ambiguity to{" "}
              <span className="text-orange">production reliability.</span>
            </h3>
          </div>
        </div>

        <div className="method-track">
          {operatingModel.map((step, index) => (
            <article className="method-step" key={step.title} data-reveal>
              <span className="method-step-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>

        <div className="ai-principles-card" data-reveal>
          <div>
            <span className="eyebrow-orange">AI-assisted development</span>
            <h3>I use AI like a senior review surface, not as autopilot.</h3>
          </div>
          <ul className="ai-principles-list">
            <li>
              Architecture review: ask the model to find fragile assumptions
              before I implement.
            </li>
            <li>
              Edge-case generation: pressure-test auth, API, state, and
              failure flows.
            </li>
            <li>
              Component scaffolding: generate structure, then write and verify
              the actual logic.
            </li>
            <li>
              Security and release checks: review token handling, CORS,
              injection risk, and deployment steps.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
