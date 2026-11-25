import { certifications, researchAndRecognition } from "../data/portfolio";
import { CheckIcon, ExternalLinkIcon, QuoteUpIcon } from "./Icons";

export default function Publications() {
  return (
    <section className="dark-wavy-band" id="research">
      <div className="dark-wavy-orb-left" aria-hidden="true" />
      <div className="dark-wavy-orb-right" aria-hidden="true" />

      <div className="container dark-wavy-inner">
        <div className="section-heading-center" data-reveal>
          <span className="eyebrow-orange">Research and recognition</span>
          <h2 className="section-title-lg inverse">
            Academic credibility that connects back to{" "}
            <span className="text-orange">engineering practice.</span>
          </h2>
          <p className="section-subtitle inverse">
            The research, patent work, and certifications are not decoration.
            They show how I learn deeply, document clearly, and keep expanding
            the systems I can build.
          </p>
        </div>

        <div className="recognition-glass-grid">
          {researchAndRecognition.map((item) => (
            <article
              className="recognition-glass-card"
              key={item.title}
              data-reveal
            >
              <QuoteUpIcon className="recognition-watermark" />
              <span className="recognition-label-pill">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className="recognition-card-footer">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="recognition-doi-btn"
                  >
                    <span>{item.meta}</span>
                    <ExternalLinkIcon />
                  </a>
                ) : (
                  <span className="recognition-meta-badge">{item.meta}</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="certifications-glass-box" data-reveal>
          <div>
            <span className="eyebrow-orange">Certifications</span>
            <h3>Signals of structured learning</h3>
            <p>Verified programs and technical milestones.</p>
          </div>
          <div className="cert-glass-chips">
            {certifications.map((certification) => (
              <span key={certification} className="cert-glass-chip">
                <CheckIcon />
                <span>{certification}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
