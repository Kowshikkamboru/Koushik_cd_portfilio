"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { profile } from "../data/portfolio";
import { ArrowUpRightIcon, MailIcon, SendIcon } from "./Icons";

export default function Footer() {
  const [note, setNote] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = note.trim();
    const subject = encodeURIComponent("Portfolio Inquiry - Amboru Koushik");
    const body = encodeURIComponent(
      trimmed || "Hi Koushik, I reviewed your portfolio and would like to connect."
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFeedback(`Opening mail client to ${profile.email}...`);
    setNote("");
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-row">
          <h2>Lets Connect there</h2>
          <a href={`mailto:${profile.email}`} className="btn-orange-pill">
            <span>Email me</span>
            <ArrowUpRightIcon />
          </a>
        </div>

        <div className="footer-divider" />

        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <div className="nav-brand-center" style={{ paddingLeft: 0 }}>
              <span className="brand-circle-badge">
                <Image
                  src="/assets/ak-logo.png"
                  alt=""
                  width={44}
                  height={44}
                  className="brand-circle-img"
                />
              </span>
              <span className="brand-wordmark">Koushik</span>
            </div>
            <p>
              {profile.name} - production-minded software engineer for mobile,
              web, data, and AI systems.
            </p>
            <div className="footer-socials">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.16 8.22C14.37 8.22 13.48 9.2 13.02 9.93V8.5H9.65C9.7 9.48 9.65 19.5 9.65 19.5H13.02V13.36C13.02 13.02 13.05 12.69 13.15 12.45C13.42 11.78 14.03 11.09 15.07 11.09C16.41 11.09 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z" />
                </svg>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z" />
                </svg>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="footer-social-btn"
                aria-label="Email"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#positioning">Positioning</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#approach">Approach</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#research">Research</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-col-title">Contact</h3>
            <ul className="footer-nav-list">
              <li>
                <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
                  {profile.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-col-title">Quick Message</h3>
            <form className="footer-note-form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write a quick note..."
                aria-label="Write a quick note for Amboru Koushik"
              />
              <button
                type="submit"
                className="footer-note-submit"
                aria-label="Send email note"
              >
                <SendIcon />
              </button>
            </form>
            {feedback && <p className="footer-note-feedback">{feedback}</p>}
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-row">
          <span>© 2026 {profile.name}. All Rights Reserved.</span>
          <span>{profile.location} · Mobile, Web &amp; AI Engineering</span>
        </div>
      </div>
    </footer>
  );
}
