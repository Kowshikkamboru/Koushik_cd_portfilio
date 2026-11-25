"use client";

import { useMemo, useState } from "react";
import { projects } from "../data/portfolio";
import {
  ArrowUpRightIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
} from "./Icons";

type ProjectItem = (typeof projects)[number];

function getProjectThemeClass(id: string) {
  switch (id) {
    case "shata-apps":
      return "pv-theme-violet";
    case "shata-web":
      return "pv-theme-emerald";
    case "alpr":
      return "pv-theme-amber";
    case "patent":
      return "pv-theme-obsidian";
    case "jarvis":
      return "pv-theme-indigo";
    case "rag":
      return "pv-theme-slate-light";
    case "poze":
      return "pv-theme-teal";
    case "dump-them-all":
      return "pv-theme-steel";
    case "kings-portal":
      return "pv-theme-charcoal";
    case "apnagaadi":
    default:
      return "pv-theme-sky";
  }
}

function renderProjectVisual(project: ProjectItem) {
  if (project.id === "shata-apps") {
    return (
      <div className="pv-scene pv-dual-phones">
        <div className="pv-glow-ring" aria-hidden="true" />
        <div className="pv-phone pv-phone-back">
          <span className="pv-mini-badge">Customer App</span>
          <strong>Shata</strong>
          <div className="pv-stat-pill">4.5 ★ Rating</div>
          <div className="pv-bar-stack">
            <span />
            <span />
          </div>
          <small>Maps · Razorpay</small>
        </div>
        <div className="pv-phone pv-phone-front">
          <span className="pv-mini-badge is-accent">Partner App</span>
          <strong>28+ Releases</strong>
          <div className="pv-stat-pill is-dark">0 Rollbacks</div>
          <div className="pv-bar-stack">
            <span />
            <span />
          </div>
          <small>FCM · DLT OTP</small>
        </div>
      </div>
    );
  }

  if (project.id === "shata-web") {
    return (
      <div className="pv-scene pv-brand-laptop">
        <div className="pv-brand-head">
          <span className="pv-brand-word">shata</span>
          <span className="pv-brand-chip">6 web surfaces</span>
        </div>
        <div className="pv-laptop-frame">
          <div className="pv-laptop-bar">
            <span />
            <span />
            <span />
            <small>theshata.com</small>
          </div>
          <div className="pv-laptop-body">
            <div className="pv-kpi-row">
              <div>
                <strong>Admin</strong>
                <span>Operations</span>
              </div>
              <div>
                <strong>Partner</strong>
                <span>Self-service</span>
              </div>
            </div>
            <svg viewBox="0 0 220 46" className="pv-sparkline" aria-hidden="true">
              <path
                d="M4 38 C 36 34, 48 18, 78 24 C 108 30, 124 10, 156 16 C 180 20, 198 6, 216 8"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === "alpr") {
    return (
      <div className="pv-scene pv-vertical-showcase">
        <div className="pv-device-card">
          <div className="pv-device-notch" aria-hidden="true" />
          <span className="pv-device-kicker">IEEE ICICCS 2025</span>
          <div className="pv-plate-scanner">
            <span>CNN + PSO</span>
            <div className="pv-plate-box">91%+</div>
            <small>ALPR Detection</small>
          </div>
          <div className="pv-device-pills">
            <span>TensorFlow</span>
            <span>OpenCV</span>
          </div>
        </div>
        <span className="pv-side-wordmark" aria-hidden="true">
          ICICCS 25
        </span>
      </div>
    );
  }

  if (project.id === "patent") {
    return (
      <div className="pv-scene pv-hud-showcase">
        <div className="pv-hud-top">
          <span className="pv-hud-pill">Patent 202541110844</span>
          <span className="pv-hud-dot">Edge AI</span>
        </div>
        <div className="pv-hud-panel">
          <strong>AI + IoT Accident Telemetry</strong>
          <svg viewBox="0 0 240 54" className="pv-waveform" aria-hidden="true">
            <path
              d="M4 28 H52 L66 10 L80 46 L94 18 L108 38 L120 28 H236"
              fill="none"
              stroke="#fd853a"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="pv-hud-metrics">
            <span>Camera Vision</span>
            <span>Impact Sensor</span>
            <span>Alert Routing</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === "jarvis") {
    return (
      <div className="pv-scene pv-hud-showcase">
        <div className="pv-hud-top">
          <span className="pv-hud-pill">JARVIS / FRIDAY</span>
          <span className="pv-hud-dot">Voice + Tools</span>
        </div>
        <div className="pv-hud-panel">
          <div className="pv-route-nodes">
            <span>Whisper</span>
            <span>→</span>
            <span>FastAPI</span>
            <span>→</span>
            <span>Claude / Gemini</span>
          </div>
          <div className="pv-voice-bars" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <small>Electron · VS Code Extension</small>
        </div>
      </div>
    );
  }

  if (project.id === "rag") {
    return (
      <div className="pv-scene pv-pipeline-showcase">
        <div className="pv-pipe-header">
          <strong>RAG Pipeline</strong>
          <span>Docker Compose</span>
        </div>
        <div className="pv-pipe-steps">
          <div className="pv-pipe-node">
            <strong>01 · Ingest</strong>
            <span>Pathway docs</span>
          </div>
          <div className="pv-pipe-node">
            <strong>02 · Index</strong>
            <span>Vector search</span>
          </div>
          <div className="pv-pipe-node">
            <strong>03 · Query</strong>
            <span>PostgreSQL SQL</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === "poze") {
    return (
      <div className="pv-scene pv-vertical-showcase">
        <div className="pv-device-card is-dark">
          <span className="pv-device-kicker">MediaPipe · LLaVA</span>
          <svg viewBox="0 0 120 120" className="pv-pose-svg" aria-hidden="true">
            <circle cx="60" cy="24" r="9" fill="#5eead4" />
            <path
              d="M60 35 V72 M32 50 L60 44 L88 50 M42 104 L60 72 L78 104"
              stroke="#5eead4"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <div className="pv-device-pills">
            <span>Live Pose</span>
            <span>Workers AI</span>
          </div>
        </div>
        <span className="pv-side-wordmark" aria-hidden="true">
          POZE AI
        </span>
      </div>
    );
  }

  if (project.id === "dump-them-all") {
    return (
      <div className="pv-scene pv-hud-showcase">
        <div className="pv-hud-top">
          <span className="pv-hud-pill">Geospatial Matrix</span>
          <span className="pv-hud-dot">Next.js + SQL</span>
        </div>
        <div className="pv-hud-panel">
          <div className="pv-map-grid">
            <span className="pv-pin">Seller</span>
            <span className="pv-route-line" />
            <span className="pv-pin is-orange">Vendor</span>
          </div>
          <div className="pv-hud-metrics">
            <span>Relational Model</span>
            <span>Pickup Slots</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === "kings-portal") {
    return (
      <div className="pv-scene pv-brand-laptop">
        <div className="pv-brand-head">
          <span className="pv-brand-word is-sm">King&apos;s Portal</span>
          <span className="pv-brand-chip">Auth.js · Vercel</span>
        </div>
        <div className="pv-laptop-frame">
          <div className="pv-laptop-bar">
            <span />
            <span />
            <span />
            <small>Community Platform</small>
          </div>
          <div className="pv-laptop-body">
            <div className="pv-kpi-row">
              <div>
                <strong>Members</strong>
                <span>Role Dashboards</span>
              </div>
              <div>
                <strong>Spaces</strong>
                <span>Moderation UI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pv-scene pv-brand-laptop">
      <div className="pv-brand-head">
        <span className="pv-brand-word is-sm">ApnaGaadi</span>
        <span className="pv-brand-chip">6 page site</span>
      </div>
      <div className="pv-laptop-frame">
        <div className="pv-laptop-bar">
          <span />
          <span />
          <span />
          <small>apnagaadi.vercel.app</small>
        </div>
        <div className="pv-laptop-body">
          <div className="pv-kpi-row">
            <div>
              <strong>Booking</strong>
              <span>Rental &amp; Sales</span>
            </div>
            <div>
              <strong>Sync</strong>
              <span>Google Sheets API</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [spotlightId, setSpotlightId] = useState(projects[0].id);
  const [openProject, setOpenProject] = useState("");
  const [featuredPage, setFeaturedPage] = useState(0);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(projects.map((project) => project.category))),
    ],
    []
  );

  const visibleProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  const featuredPairs = useMemo(() => {
    const pairs: (typeof projects)[] = [];
    for (let i = 0; i < projects.length; i += 2) {
      pairs.push(projects.slice(i, i + 2));
    }
    return pairs;
  }, []);

  const currentPair = featuredPairs[featuredPage] ?? featuredPairs[0];
  const spotlightProject =
    projects.find((p) => p.id === spotlightId) ?? projects[0];

  const handleSelectProject = (id: string) => {
    setSpotlightId(id);
    setOpenProject((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="section-light" id="projects">
      <div className="container">
        <div className="section-heading-row" data-reveal>
          <div>
            <span className="eyebrow-orange">Proof of work</span>
            <h2 className="section-title-lg">
              Case studies with the problem, architecture, and{" "}
              <span className="text-orange">impact visible.</span>
            </h2>
            <p className="section-subtitle">
              These projects are written for technical and business readers: what
              was difficult, how I designed around it, and what the work proves
              about my engineering judgment.
            </p>
          </div>

          <button
            type="button"
            className="btn-orange-pill"
            onClick={() => setActiveCategory("All")}
          >
            <span>All ({projects.length})</span>
            <ArrowUpRightIcon />
          </button>
        </div>

        {/* 2-Up Featured Spotlight Carousel (Figma Frame 76) */}
        <div className="featured-pair-grid">
          {currentPair.map((project, idx) => (
            <article
              key={project.id}
              className={`featured-showcase-card theme-${(featuredPage * 2 + idx) % 3} ${
                spotlightProject.id === project.id ? "is-selected" : ""
              }`}
              onClick={() => setSpotlightId(project.id)}
            >
              <div className="featured-top-row">
                <div className="featured-badges">
                  <span className="featured-cat-pill">{project.category}</span>
                  <span className="featured-cat-pill">{project.status}</span>
                </div>
                <span className="featured-arrow-circle" aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
              </div>

              <div className="featured-bottom">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="featured-dots-row"
          role="tablist"
          aria-label="Featured project pairs"
        >
          {featuredPairs.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={featuredPage === idx}
              aria-label={`Show featured projects page ${idx + 1}`}
              className={`dot-btn ${featuredPage === idx ? "is-active" : ""}`}
              onClick={() => {
                setFeaturedPage(idx);
                if (featuredPairs[idx]?.[0]) {
                  setSpotlightId(featuredPairs[idx][0].id);
                }
              }}
            />
          ))}
        </div>

        {/* Active Spotlight Summary Panel */}
        <div className="spotlight-panel">
          <div className="spotlight-header">
            <h3>{spotlightProject.title}</h3>
            {spotlightProject.links?.[0] ? (
              <a
                href={spotlightProject.links[0].href}
                target="_blank"
                rel="noreferrer"
                className="spotlight-orange-btn"
                aria-label={`Open ${spotlightProject.title}`}
              >
                <ArrowUpRightIcon />
              </a>
            ) : (
              <a
                href="#projects-grid"
                className="spotlight-orange-btn"
                aria-label={`Inspect ${spotlightProject.title}`}
              >
                <ArrowUpRightIcon />
              </a>
            )}
          </div>

          <p className="spotlight-subtitle">{spotlightProject.subtitle}</p>

          <div className="spotlight-stack-row">
            {spotlightProject.stack.map((tech) => (
              <span className="spotlight-pill" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className="spotlight-triad">
            <div className="spotlight-triad-item">
              <span>The Problem</span>
              <p>{spotlightProject.problem}</p>
            </div>
            <div className="spotlight-triad-item">
              <span>System Architecture</span>
              <p>{spotlightProject.architecture}</p>
            </div>
            <div className="spotlight-triad-item">
              <span>Measurable Impact</span>
              <p>{spotlightProject.impact}</p>
            </div>
          </div>

          <div className="spotlight-footer-bar">
            <div className="spotlight-evidence-row">
              {spotlightProject.evidence.map((item) => (
                <span className="spotlight-evidence-chip" key={item}>
                  <CheckCircleIcon />
                  <span>{item}</span>
                </span>
              ))}
            </div>
            {spotlightProject.links && (
              <div className="project-links-row">
                {spotlightProject.links.map((link) => (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    key={link.href}
                    className="project-link-pill"
                  >
                    <span>{link.label}</span>
                    <ExternalLinkIcon />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div
          id="projects-grid"
          className="filter-pills-bar"
          aria-label="Project category filters"
          role="toolbar"
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`filter-pill-btn ${
                activeCategory === category ? "is-active" : ""
              }`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 3-Column Showcase Cards (Figma Frame 325) */}
        <div className="project-cards-grid">
          {visibleProjects.map((project) => {
            const isOpen = openProject === project.id;
            return (
              <article className="project-showcase-card" key={project.id}>
                <div
                  className="project-visual-wrap"
                  onClick={() => handleSelectProject(project.id)}
                >
                  <div
                    className={`project-visual-box ${getProjectThemeClass(
                      project.id
                    )}`}
                  >
                    {renderProjectVisual(project)}
                  </div>

                  <button
                    type="button"
                    className={`project-corner-btn ${isOpen ? "is-open" : ""}`}
                    aria-expanded={isOpen}
                    aria-label={
                      isOpen
                        ? `Collapse ${project.title} details`
                        : `Expand ${project.title} details`
                    }
                    onClick={(event) => {
                      event.stopPropagation();
                      handleSelectProject(project.id);
                    }}
                  >
                    <ArrowUpRightIcon />
                  </button>
                </div>

                <span className="project-card-tag">{project.category}</span>

                <div className="project-meta-dots">
                  <span className="project-meta-dot-item">
                    <span className="orange-dot-9" />
                    <span>{project.status}</span>
                  </span>
                  <span className="project-meta-dot-item">
                    <span className="orange-dot-9" />
                    <span>{project.stack.length} technologies</span>
                  </span>
                </div>

                <div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-subtitle">{project.subtitle}</p>
                </div>

                <div className="project-tech-row">
                  {project.stack.map((tech) => (
                    <span key={tech} className="project-tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {isOpen && (
                  <div className="project-detail-drawer">
                    <div className="project-detail-block">
                      <strong>The Problem</strong>
                      <p>{project.problem}</p>
                    </div>

                    <div className="project-detail-block">
                      <strong>System Architecture</strong>
                      <p>{project.architecture}</p>
                    </div>

                    <div className="project-detail-block">
                      <strong>Measurable Impact</strong>
                      <p>{project.impact}</p>
                    </div>

                    <div className="project-detail-block">
                      <strong>Verified Deliverables</strong>
                      <ul className="project-evidence-list">
                        {project.evidence.map((item) => (
                          <li key={item}>
                            <CheckCircleIcon />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.links && (
                      <div className="project-links-row">
                        {project.links.map((link) => (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            key={link.href}
                            className="project-link-pill"
                          >
                            <span>{link.label}</span>
                            <ExternalLinkIcon />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
