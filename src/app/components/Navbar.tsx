"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";

const leftNavItems = [
  { href: "#home", label: "Home" },
  { href: "#positioning", label: "Positioning" },
  { href: "#capability", label: "Capability" },
  { href: "#approach", label: "Approach" },
];

const rightNavItems = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

const allNavItems = [...leftNavItems, ...rightNavItems];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const tickingRef = useRef(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const syncNav = useCallback(() => {
    setIsScrolled(window.scrollY > 30);
    const sections = allNavItems
      .map((item) => item.href.slice(1))
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) {
      tickingRef.current = false;
      return;
    }

    const nearBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 24;

    if (nearBottom) {
      setActive(sections[sections.length - 1].id);
      tickingRef.current = false;
      return;
    }

    const triggerOffset = 160;
    let current = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= triggerOffset) {
        current = section.id;
      }
    }

    setActive(current);
    tickingRef.current = false;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(syncNav);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [syncNav]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeMenu]);

  const goTo = (href: string) => {
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      const top = Math.max(
        0,
        target.getBoundingClientRect().top + window.scrollY - 112
      );
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="nav-pill-bar" aria-label="Primary navigation">
        <div className="nav-group nav-group-left">
          {leftNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-pill-link ${active === item.href.slice(1) ? "is-active" : ""}`}
              onClick={(event) => {
                event.preventDefault();
                goTo(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="nav-brand-center"
          onClick={() => goTo("#home")}
          aria-label="Go to home"
        >
          <span className="brand-circle-badge">{profile.initials}</span>
          <span className="brand-wordmark">Koushik Amboru</span>
        </button>

        <div className="nav-group nav-group-right">
          {rightNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-pill-link ${active === item.href.slice(1) ? "is-active" : ""}`}
              onClick={(event) => {
                event.preventDefault();
                goTo(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-mobile-actions">
          <a className="nav-mobile-cta" href={`mailto:${profile.email}`}>
            Email
          </a>
          <button
            type="button"
            className="menu-toggle-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <>
          <div className="mobile-backdrop" onClick={closeMenu} aria-hidden="true" />
          <div id="mobile-nav-drawer" className="mobile-drawer" role="navigation">
            {allNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={active === item.href.slice(1) ? "is-active" : ""}
                onClick={(event) => {
                  event.preventDefault();
                  goTo(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </>
      )}
    </header>
  );
}
