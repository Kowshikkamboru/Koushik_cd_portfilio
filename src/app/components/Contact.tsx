import Image from "next/image";
import { heroMetrics, profile } from "../data/portfolio";
import { ArrowUpRightIcon, ExternalLinkIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-hook-band">
        <div className="container" data-reveal>
          <span className="eyebrow-orange">Contact</span>
          <h2>
            For serious teams building real products,{" "}
            <span className="text-orange">I am ready to talk.</span>
          </h2>
        </div>
      </div>

      <div className="contact-card-band">
        <div className="container">
          <div className="contact-card-grid">
            <div className="contact-portrait-stage" data-reveal>
              <div className="contact-orange-backdrop" aria-hidden="true" />
              <div className="contact-portrait-wrap">
                <Image
                  src="/assets/koushik-laptop.webp"
                  alt="Amboru Koushik holding laptop"
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 88vw, 440px"
                  className="contact-portrait-img"
                />
              </div>
            </div>

            <div className="contact-content-col" data-reveal>
              <h3>
                Let&apos;s Build <span className="text-orange">Together</span>
              </h3>
              <p className="contact-lead-text">
                I am interested in software engineering, AI systems, frontend,
                mobile, and data-focused roles where the work rewards
                ownership, learning speed, and clear problem solving.
              </p>

              <div className="contact-stats-pair">
                <div className="contact-stat-box">
                  <strong>{heroMetrics[1].value}</strong>
                  <span>{heroMetrics[1].label}</span>
                </div>
                <div className="contact-stat-box">
                  <strong>{heroMetrics[0].value}</strong>
                  <span>{heroMetrics[0].label}</span>
                </div>
              </div>

              <div className="contact-details-strip">
                <div className="contact-detail-card">
                  <span>Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
                <div className="contact-detail-card">
                  <span>Phone</span>
                  <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
                    {profile.phone}
                  </a>
                </div>
                <div className="contact-detail-card">
                  <span>Location</span>
                  <strong>{profile.location}</strong>
                </div>
              </div>

              <div className="contact-cta-group">
                <a
                  className="btn-orange-pill"
                  href={`mailto:${profile.email}`}
                >
                  <span>Email me</span>
                  <ArrowUpRightIcon />
                </a>
                <a
                  className="btn-dark-outlined-lg"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>LinkedIn</span>
                  <ExternalLinkIcon />
                </a>
                <a
                  className="btn-dark-outlined-lg"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GitHub</span>
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
