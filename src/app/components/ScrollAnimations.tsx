"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollAnimations() {
  const [showTop, setShowTop] = useState(false);
  const showTopRef = useRef(false);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const updateScrollMetrics = () => {
      const scrollY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = total > 0 ? Math.min(Math.max(scrollY / total, 0), 1) : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }

      const shouldShowTop = scrollY > 600;
      if (shouldShowTop !== showTopRef.current) {
        showTopRef.current = shouldShowTop;
        setShowTop(shouldShowTop);
      }

      tickingRef.current = false;
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(updateScrollMetrics);
      }
    };

    updateScrollMetrics();
    window.addEventListener("scroll", onScroll, { passive: true });

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const observeElements = () => {
      document.querySelectorAll("[data-reveal]:not([data-visible])").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.setAttribute("data-visible", "true");
        } else {
          observerRef.current?.observe(el);
        }
      });
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observerRef.current?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <button
        className={`back-to-top ${showTop ? "is-visible" : ""}`}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5l-7 7 1.4 1.4 4.6-4.6V20h2V8.8l4.6 4.6L20 12l-8-7z" />
        </svg>
      </button>
    </>
  );
}
