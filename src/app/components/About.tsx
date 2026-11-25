import Image from "next/image";
import {
  education,
  executiveSignals,
  heroMetrics,
  profile,
  skillGroups,
} from "../data/portfolio";
import {
  ArrowUpRightIcon,
  CheckIcon,
  ExternalLinkIcon,
  MailIcon,
} from "./Icons";

function getSkillGroupIcon(title: string) {
  switch (title.toLowerCase()) {
    case "build":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "systems":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="2"
            y="3"
            width="20"
            height="7"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="2"
            y="14"
            width="20"
            height="7"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="6" cy="6.5" r="1" fill="currentColor" />
          <circle cx="6" cy="17.5" r="1" fill="currentColor" />
        </svg>
      );
    case "ai and data":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "ship":
      return (
        <Image
          src="/rocket.png"
          alt=""
          width={20}
          height={20}
          className="skill-icon-img"
        />
      );
    case "foundation":
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <polyline
            points="4 17 10 11 4 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="12"
            y1="19"
            x2="20"
            y2="19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

function getSkillGroupSummary(title: string) {
  switch (title.toLowerCase()) {
    case "build":
      return "Mobile apps & responsive web interfaces";
    case "systems":
      return "APIs, databases, auth, maps & payments";
    case "ai and data":
      return "Computer vision, ML models & RAG flows";
    case "ship":
      return "Store releases, deploys & automation";
    case "foundation":
    default:
      return "Core CS, networking, Linux & docs";
  }
}

function getSignalIcon(index: number) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="2"
          y="7"
          width="20"
          height="14"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polyline
          points="16 18 22 12 16 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="8 6 2 12 8 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section className="section-light" id="positioning">
      <div className="container">
        <div className="about-showcase">
          <div className="about-visual-card" data-reveal>
            <div className="about-badge-orange">
              <div className="about-badge-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="about-badge-text">
                <strong>{heroMetrics[1].value}</strong>
                <span>Mobile Releases</span>
              </div>
            </div>

            <div className="about-orange-squircle" aria-hidden="true" />
            <div className="about-photo-wrap">
              <Image
                src="/assets/koushik-laptop.webp"
                alt="Amboru Koushik holding laptop"
                fill
                quality={85}
                sizes="(max-width: 768px) 92vw, 460px"
                className="about-photo-img"
              />
            </div>

            <div className="about-badge-white">
              <div className="about-badge-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="about-badge-text">
                <strong>{heroMetrics[0].value} Live Apps</strong>
                <span>App Store &amp; Play</span>
              </div>
            </div>
          </div>

          <div className="about-copy-col" data-reveal>
            <span className="eyebrow-orange">Positioning · Core Profile</span>
            <h2>
              Clear signal for leaders who need{" "}
              <span className="text-orange">ownership</span>, not only effort.
            </h2>

            <div className="about-narrative">
              <p>
                I am not presenting myself as a desperate generalist. I am
                presenting evidence: production releases, applied AI, data
                thinking, and the habit of solving the whole problem around the
                code.
              </p>
              <p>
                <strong>What I bring into a team:</strong> I work best where
                there is ambiguity, pressure, and a real user at the end. My
                strongest pattern is connecting the pieces that often get
                separated: UI, API contracts, data quality, auth, deployment,
                business constraints, and user trust.
              </p>
              <p>
                I use AI tools seriously, but not blindly. They help me review
                architecture, generate edge cases, document faster, and close
                knowledge gaps. The final engineering judgment stays mine.
              </p>
            </div>

            <div className="about-pill-row">
              <a href={`mailto:${profile.email}`} className="about-pill-chip">
                <MailIcon />
                <span>{profile.email}</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="about-pill-chip"
              >
                <span>LinkedIn</span>
                <ExternalLinkIcon />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="about-pill-chip"
              >
                <span>GitHub</span>
                <ExternalLinkIcon />
              </a>
            </div>

            <div className="about-cta-row">
              <a href={`mailto:${profile.email}`} className="btn-orange-pill">
                <span>Email me</span>
                <ArrowUpRightIcon />
              </a>
              <a href="#projects" className="btn-outline-pill">
                <span>View Case Studies</span>
              </a>
            </div>
          </div>
        </div>

        <div className="signal-grid">
          {executiveSignals.map((signal, idx) => (
            <article className="signal-card" key={signal.title} data-reveal>
              <div className="signal-top">
                <div className="signal-icon-box">{getSignalIcon(idx)}</div>
                <div>
                  <span className="signal-target">{signal.title}</span>
                  <span className="signal-pill">Executive Brief</span>
                </div>
              </div>
              <p className="signal-body">{signal.point}</p>
            </article>
          ))}
        </div>

        <div className="education-wrap" id="education">
          <div className="section-heading-center education-heading" data-reveal>
            <span className="eyebrow-orange">Education</span>
            <h2 className="section-title-lg">
              Academic foundation in{" "}
              <span className="text-orange">CS and AIML.</span>
            </h2>
            <p className="section-subtitle">
              Formal engineering education combining computer science
              fundamentals, applied AI/ML research, and technical leadership.
            </p>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.degree} data-reveal>
                <div className="edu-top">
                  <span className="edu-period">{item.period}</span>
                  <span className="edu-grade">{item.result}</span>
                </div>
                <h3>{item.degree}</h3>
                <p className="edu-school">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item.school}</span>
                </p>
                <ul className="edu-notes-list">
                  {item.notes.map((note) => (
                    <li key={note}>
                      <CheckIcon />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="capability-container">
        <div className="capability-wrap" id="capability">
          <div className="section-heading-center capability-heading" data-reveal>
            <span className="eyebrow-orange">Capability map</span>
            <h2 className="section-title-lg">
              Skills organized by how{" "}
              <span className="text-orange">products actually ship.</span>
            </h2>
            <p className="section-subtitle">
              From mobile application frontends to production deployment
              pipelines and applied AI models.
            </p>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group, idx) => (
              <article className="skill-card" key={group.title} data-reveal>
                <div className="skill-card-top">
                  <div className="skill-card-id">
                    <div className="skill-icon-badge">
                      {getSkillGroupIcon(group.title)}
                    </div>
                    <span className="skill-stage-tag">
                      Stage {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="skill-count-badge">
                    {group.skills.length} skills
                  </span>
                </div>

                <div className="skill-card-head">
                  <h3>{group.title}</h3>
                  <p className="skill-card-summary">
                    {getSkillGroupSummary(group.title)}
                  </p>
                </div>

                <div className="skill-chips-wrap">
                  {group.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      <span className="skill-chip-dot" />
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
