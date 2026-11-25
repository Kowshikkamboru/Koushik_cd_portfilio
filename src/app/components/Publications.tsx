import Image from "next/image";
import {
  certifications,
  featuredCertifications,
  leadershipRoles,
  researchPublications,
  volunteeringServices,
} from "../data/portfolio";
import {
  CheckIcon,
  DocumentTextIcon,
  ExternalLinkIcon,
  ShieldCheckIcon,
  SparkHandsIcon,
  UsersGroupIcon,
} from "./Icons";

const communityGroups = [
  {
    eyebrow: "Leadership",
    heading: "E-Cell & Student Leadership",
    subtitle: "Entrepreneurship outreach and technical association governance.",
    icon: UsersGroupIcon,
    items: leadershipRoles,
  },
  {
    eyebrow: "Volunteering",
    heading: "NSS & Community Services",
    subtitle: "Social service initiatives and student developer coordination.",
    icon: SparkHandsIcon,
    items: volunteeringServices,
  },
];

export default function Publications() {
  return (
    <section className="dark-wavy-band research-band" id="research">
      <div className="container dark-wavy-inner">
        <div className="section-heading-center" data-reveal>
          <span className="eyebrow-orange">Research &amp; recognition</span>
          <h2 className="section-title-lg inverse">
            Academic credibility that connects back to{" "}
            <span className="text-orange">engineering practice.</span>
          </h2>
          <p className="section-subtitle inverse">
            Peer-reviewed IEEE research, patent innovation, student leadership,
            community service, and verified technical credentials.
          </p>
        </div>

        <div className="research-showcase-stack">
          {/* Tier 1: Flagship Peer-Reviewed Research & Patent IP */}
          <div className="research-ip-grid" data-reveal>
            {researchPublications.map((item) => {
              const Icon =
                item.kind === "paper" ? DocumentTextIcon : ShieldCheckIcon;
              return (
                <article className="research-ip-card" key={item.title}>
                  <div className="research-ip-top">
                    <div className="research-ip-id-group">
                      <span className="research-ip-icon">
                        <Icon />
                      </span>
                      <div>
                        <span className="research-ip-kicker">{item.badge}</span>
                        <span className="research-ip-venue">{item.venue}</span>
                      </div>
                    </div>
                    <span className="research-ip-tag">{item.tag}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>

                  <div className="research-ip-footer">
                    <span className="research-ip-code">{item.meta}</span>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="research-doi-cta"
                      >
                        <span>View IEEE Paper</span>
                        <ExternalLinkIcon />
                      </a>
                    ) : (
                      <span className="research-status-chip">
                        {item.statusLabel}
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Tier 2: Unified Leadership & Volunteering Split */}
          <div className="community-bento-grid" data-reveal>
            {communityGroups.map((group) => {
              const GroupIcon = group.icon;
              return (
                <section
                  className="community-column-card"
                  key={group.eyebrow}
                  aria-label={group.heading}
                >
                  <div className="community-column-head">
                    <div>
                      <span className="eyebrow-orange">{group.eyebrow}</span>
                      <h3>{group.heading}</h3>
                      <p className="community-col-sub">{group.subtitle}</p>
                    </div>
                    <span className="community-icon-badge" aria-hidden="true">
                      <GroupIcon />
                    </span>
                  </div>

                  <div className="community-role-list">
                    {group.items.map((item) => (
                      <article
                        className={`community-role-item ${
                          item.featured ? "is-featured" : ""
                        }`}
                        key={`${item.role}-${item.org}`}
                      >
                        <div className="community-role-top">
                          <div className="community-role-title-wrap">
                            <h4>{item.role}</h4>
                            {item.featured && (
                              <span className="community-featured-tag">
                                Featured
                              </span>
                            )}
                          </div>
                          <span className="community-period-pill">
                            {item.period}
                          </span>
                        </div>
                        <p className="community-role-org">{item.org}</p>
                        <p className="community-role-detail">{item.detail}</p>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Tier 3: Verified Credentials & Technical Programs */}
          <div className="credentials-showcase-card" data-reveal>
            <div className="credentials-head">
              <div>
                <span className="eyebrow-orange">Certifications</span>
                <h3>Signals of structured learning</h3>
                <p className="credentials-head-sub">
                  Verified industry credentials in Redis and Postman API
                  fundamentals alongside structured technical coursework.
                </p>
              </div>
              <span className="credentials-count-pill">
                {featuredCertifications.length} Verified Badges ·{" "}
                {certifications.length} Programs
              </span>
            </div>

            <div className="cert-featured-grid">
              {featuredCertifications.map((cert) => (
                <article className="cert-featured-card" key={cert.credentialId}>
                  <div className="cert-featured-badge-wrap">
                    <Image
                      src={cert.badge}
                      alt={`${cert.title} badge`}
                      width={68}
                      height={68}
                      className="cert-featured-badge-img"
                    />
                  </div>
                  <div className="cert-featured-body">
                    <div className="cert-featured-top">
                      <span className="cert-featured-pill">
                        Verified Credential
                      </span>
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="cert-verify-link"
                          aria-label={`Verify ${cert.title} credential`}
                        >
                          <span>Verify</span>
                          <ExternalLinkIcon />
                        </a>
                      )}
                    </div>
                    <h4>{cert.title}</h4>
                    <p className="cert-featured-issuer">
                      {cert.issuer} · {cert.period}
                    </p>
                    <p className="cert-featured-id">
                      Credential ID {cert.credentialId} · {cert.domain}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="cert-programs-wrap">
              <span className="cert-programs-label">
                Completed Technical Programs &amp; Milestones
              </span>
              <div className="cert-programs-grid">
                {certifications.map((certification) => (
                  <span key={certification} className="cert-program-tile">
                    <CheckIcon />
                    <span>{certification}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
