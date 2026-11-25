"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { projects } from "../data/portfolio";
import {
  ArrowUpRightIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  ExternalLinkIcon,
} from "./Icons";

type ProjectItem = (typeof projects)[number];

function getCaseStudyPillars(project: ProjectItem) {
  return [
    { step: "01", label: "The Problem", body: project.problem },
    { step: "02", label: "System Architecture", body: project.architecture },
    { step: "03", label: "Measurable Impact", body: project.impact },
  ];
}

function ProjectLinks({ links }: { links?: ProjectItem["links"] }) {
  if (!links?.length) return null;

  return (
    <div className="project-links-row">
      {links.map((link) => (
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
  );
}

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

type CaseStudyModalProps = {
  project: ProjectItem;
  index: number;
  total: number;
  activeFilterLabel: string;
  prevProject: ProjectItem | null;
  nextProject: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (id: string) => void;
};

function CaseStudyModal({
  project,
  index,
  total,
  activeFilterLabel,
  prevProject,
  nextProject,
  onClose,
  onSelectProject,
}: CaseStudyModalProps) {
  const titleId = useId();
  const descId = useId();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.classList.add("modal-open");
    closeBtnRef.current?.focus();
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [project.id]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowLeft" && prevProject) {
        event.preventDefault();
        onSelectProject(prevProject.id);
      } else if (event.key === "ArrowRight" && nextProject) {
        event.preventDefault();
        onSelectProject(nextProject.id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onSelectProject, prevProject, nextProject]);

  if (typeof document === "undefined") return null;

  const pillars = getCaseStudyPillars(project);

  return createPortal(
    <div
      className="project-modal-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="project-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
      >
        <div className="project-modal-topbar">
          <div className="project-modal-meta">
            <span className="project-modal-counter">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              {activeFilterLabel !== "All" ? ` · ${activeFilterLabel}` : ""}
            </span>
            <span className="project-card-tag">{project.category}</span>
            <span className="project-meta-dot-item">
              <span className="orange-dot-9" />
              <span>{project.status}</span>
            </span>
          </div>

          <div className="project-modal-actions">
            {prevProject && nextProject && (
              <div className="project-modal-nav-group" role="group" aria-label="Switch case study">
                <button
                  type="button"
                  className="project-modal-icon-btn"
                  aria-label={`Previous project: ${prevProject.title}`}
                  onClick={() => onSelectProject(prevProject.id)}
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  type="button"
                  className="project-modal-icon-btn"
                  aria-label={`Next project: ${nextProject.title}`}
                  onClick={() => onSelectProject(nextProject.id)}
                >
                  <ChevronRightIcon />
                </button>
              </div>
            )}
            <button
              ref={closeBtnRef}
              type="button"
              className="project-modal-close-btn"
              aria-label="Close case study"
              onClick={onClose}
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="project-modal-scroll" ref={scrollRef}>
          <div className="project-modal-hero">
            <div className={`project-modal-visual ${getProjectThemeClass(project.id)}`}>
              {renderProjectVisual(project)}
            </div>

            <div className="project-modal-intro">
              <h2 id={titleId}>{project.title}</h2>
              <p className="project-modal-subtitle" id={descId}>
                {project.subtitle}
              </p>

              <div className="project-modal-stack-group">
                <span className="project-modal-label">Stack &amp; Systems</span>
                <div className="project-tech-row">
                  {project.stack.map((tech) => (
                    <span key={tech} className="project-tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ProjectLinks links={project.links} />
            </div>
          </div>

          <div className="project-modal-breakdown">
            {pillars.map((pillar) => (
              <section className="project-modal-pillar" key={pillar.label}>
                <div className="project-modal-pillar-head">
                  <span className="project-modal-step">{pillar.step}</span>
                  <h3>{pillar.label}</h3>
                </div>
                <p>{pillar.body}</p>
              </section>
            ))}
          </div>

          <div className="project-modal-deliverables">
            <span className="project-modal-label">Verified Deliverables</span>
            <div className="project-modal-evidence-grid">
              {project.evidence.map((item) => (
                <div className="project-modal-evidence-item" key={item}>
                  <CheckCircleIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {prevProject && nextProject && (
          <div className="project-modal-footer">
            <button
              type="button"
              className="project-modal-switch-btn"
              onClick={() => onSelectProject(prevProject.id)}
            >
              <ChevronLeftIcon />
              <span>
                <small>Previous</small>
                <strong>{prevProject.title}</strong>
              </span>
            </button>
            <button
              type="button"
              className="project-modal-switch-btn is-next"
              onClick={() => onSelectProject(nextProject.id)}
            >
              <span>
                <small>Next</small>
                <strong>{nextProject.title}</strong>
              </span>
              <ChevronRightIcon />
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSpotlightIndex, setActiveSpotlightIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [isPreviewHovered, setIsPreviewHovered] = useState(false);
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

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

  const nextFeaturedIndex = (activeSpotlightIndex + 1) % projects.length;
  const currentPair = useMemo(
    () => [
      {
        project: projects[activeSpotlightIndex],
        projectIndex: activeSpotlightIndex,
      },
      {
        project: projects[nextFeaturedIndex],
        projectIndex: nextFeaturedIndex,
      },
    ],
    [activeSpotlightIndex, nextFeaturedIndex]
  );

  const spotlightProject = projects[activeSpotlightIndex] ?? projects[0];
  const spotlightPillars = getCaseStudyPillars(spotlightProject);

  useEffect(() => {
    if (activeModalId !== null || isPreviewHovered) return;

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setSlideDirection("next");
      setActiveSpotlightIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeModalId, activeSpotlightIndex, isPreviewHovered]);

  const handlePrevProject = useCallback(() => {
    setSlideDirection("prev");
    setActiveSpotlightIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  }, []);

  const handleNextProject = useCallback(() => {
    setSlideDirection("next");
    setActiveSpotlightIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const handleSelectProjectIndex = useCallback(
    (index: number) => {
      const normalized = (index + projects.length) % projects.length;
      if (normalized === activeSpotlightIndex) return;
      setSlideDirection(normalized > activeSpotlightIndex ? "next" : "prev");
      setActiveSpotlightIndex(normalized);
    },
    [activeSpotlightIndex]
  );

  const modalList = useMemo(() => {
    if (activeModalId && visibleProjects.some((p) => p.id === activeModalId)) {
      return visibleProjects;
    }
    return projects;
  }, [activeModalId, visibleProjects]);

  const modalIndex = useMemo(
    () =>
      activeModalId
        ? modalList.findIndex((project) => project.id === activeModalId)
        : -1,
    [activeModalId, modalList]
  );

  const modalProject = modalIndex >= 0 ? modalList[modalIndex] : null;
  const prevModalProject =
    modalIndex >= 0 && modalList.length > 1
      ? modalList[(modalIndex - 1 + modalList.length) % modalList.length]
      : null;
  const nextModalProject =
    modalIndex >= 0 && modalList.length > 1
      ? modalList[(modalIndex + 1) % modalList.length]
      : null;

  const openCaseStudy = useCallback((id: string) => {
    lastFocusedRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setActiveModalId(id);
  }, []);

  const closeCaseStudy = useCallback(() => {
    setActiveModalId(null);
    requestAnimationFrame(() => {
      lastFocusedRef.current?.focus();
    });
  }, []);

  return (
    <section className="section-light" id="projects">
      <div className="container">
        <div className="section-heading-row" data-reveal>
          <div className="projects-heading-copy">
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
        </div>

        <div
          className="projects-spotlight-stage"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              handlePrevProject();
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              handleNextProject();
            }
          }}
        >
          {/* 2-Up Featured Spotlight Carousel (Figma Frame 76) */}
          <div className="featured-carousel-shell">
            <button
              type="button"
              className="featured-nav-btn is-prev"
              aria-label="Previous project"
              onClick={handlePrevProject}
            >
              <ChevronLeftIcon />
            </button>

            <div className="featured-pair-grid">
              {currentPair.map(({ project, projectIndex }, slotIdx) => {
                const isSelected = slotIdx === 0;
                return (
                  <article
                    key={`${project.id}-${slotIdx}`}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    aria-label={
                      isSelected
                        ? `Open ${project.title} case study`
                        : `Preview ${project.title} in overview`
                    }
                    className={`featured-showcase-card theme-${projectIndex % 3} ${
                      isSelected ? "is-selected" : ""
                    } slide-${slideDirection}`}
                    onClick={() => {
                      if (isSelected) {
                        openCaseStudy(project.id);
                      } else {
                        handleNextProject();
                      }
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        if (isSelected) {
                          openCaseStudy(project.id);
                        } else {
                          handleNextProject();
                        }
                      }
                    }}
                  >
                    <div className="featured-top-row">
                      <div className="featured-badges">
                        <span className="featured-cat-pill">
                          {project.category}
                        </span>
                        <span className="featured-cat-pill">
                          {project.status}
                        </span>
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
                );
              })}
            </div>

            <button
              type="button"
              className="featured-nav-btn is-next"
              aria-label="Next project"
              onClick={handleNextProject}
            >
              <ChevronRightIcon />
            </button>
          </div>

          <div
            className="featured-dots-row"
            role="tablist"
            aria-label="Featured projects"
          >
            {projects.map((project, idx) => (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={activeSpotlightIndex === idx}
                aria-label={`Show project ${idx + 1}: ${project.title}`}
                className={`dot-btn ${
                  activeSpotlightIndex === idx ? "is-active" : ""
                }`}
                onClick={() => handleSelectProjectIndex(idx)}
              />
            ))}
          </div>

          {/* Active Spotlight Summary Panel */}
          <div
            className="spotlight-panel"
            aria-live="polite"
            onMouseEnter={() => setIsPreviewHovered(true)}
            onMouseLeave={() => setIsPreviewHovered(false)}
          >
            <div className="spotlight-content" key={spotlightProject.id}>
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
                  <button
                    type="button"
                    className="spotlight-orange-btn"
                    aria-haspopup="dialog"
                    aria-label={`Open ${spotlightProject.title} case study`}
                    onClick={() => openCaseStudy(spotlightProject.id)}
                  >
                    <ArrowUpRightIcon />
                  </button>
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
                {spotlightPillars.map((pillar) => (
                  <div className="spotlight-triad-item" key={pillar.label}>
                    <span>{pillar.label}</span>
                    <p>{pillar.body}</p>
                  </div>
                ))}
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
                <ProjectLinks links={spotlightProject.links} />
              </div>
            </div>
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
          {visibleProjects.map((project) => (
            <article className="project-showcase-card" key={project.id}>
              <div
                className="project-visual-wrap"
                onClick={() => openCaseStudy(project.id)}
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
                  className="project-corner-btn"
                  aria-haspopup="dialog"
                  aria-label={`Open ${project.title} case study`}
                  onClick={(event) => {
                    event.stopPropagation();
                    openCaseStudy(project.id);
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
                <h3 className="project-card-title">
                  <button
                    type="button"
                    className="project-card-title-btn"
                    aria-haspopup="dialog"
                    onClick={() => openCaseStudy(project.id)}
                  >
                    {project.title}
                  </button>
                </h3>
                <p className="project-card-subtitle">{project.subtitle}</p>
              </div>

              <div className="project-tech-row">
                {project.stack.map((tech) => (
                  <span key={tech} className="project-tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card-footer">
                <button
                  type="button"
                  className="project-card-case-btn"
                  aria-haspopup="dialog"
                  onClick={() => openCaseStudy(project.id)}
                >
                  <span>Read case study</span>
                  <ArrowUpRightIcon />
                </button>
                {project.links?.[0] && (
                  <a
                    href={project.links[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card-ext-link"
                  >
                    <span>{project.links[0].label}</span>
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {modalProject && (
        <CaseStudyModal
          project={modalProject}
          index={modalIndex}
          total={modalList.length}
          activeFilterLabel={
            modalList === visibleProjects ? activeCategory : "All"
          }
          prevProject={prevModalProject}
          nextProject={nextModalProject}
          onClose={closeCaseStudy}
          onSelectProject={setActiveModalId}
        />
      )}
    </section>
  );
}
