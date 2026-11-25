import Image from "next/image";
import { heroMetrics, profile } from "../data/portfolio";
import {
  ArrowUpRightIcon,
  FourPointStarIcon,
  QuoteUpIcon,
  SparkBurstIcon,
  StarIcon,
} from "./Icons";

const marqueePillars = [
  "Production Mobile Apps",
  "Applied AI & ML",
  "Next.js & React",
  "REST APIs & Firebase",
  "Data & Automation",
  "IEEE & Patent Research",
];

export default function Hero() {
  const featuredMetric = heroMetrics[1];
  const supportingMetrics = [heroMetrics[0], heroMetrics[2], heroMetrics[3]];

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-inner">
          <div className="hero-hello-wrap" data-reveal>
            <span className="hero-hello-pill">Hello!</span>
            <SparkBurstIcon className="hero-spark-top" />
          </div>

          <div className="hero-headline-wrap" data-reveal>
            <h1>
              I&apos;m <span className="text-orange">{profile.name},</span>
              <br />
              Software &amp; AI Engineer
            </h1>
            <SparkBurstIcon className="hero-spark-left" />
          </div>

          <div className="hero-stage">
            <div className="hero-quote-col" data-reveal>
              <QuoteUpIcon className="hero-quote-icon" />
              <span className="eyebrow-orange">
                Production engineer. AI builder. Product problem solver.
              </span>
              <p className="hero-lead-copy">{profile.headline}</p>
              <p className="hero-sub-copy">{profile.summary}</p>
            </div>

            <div className="hero-arch-col" data-reveal>
              <div className="hero-semicircle" aria-hidden="true" />
              <div className="hero-portrait-frame">
                <Image
                  src="/assets/koushik-portrait.webp"
                  alt="Amboru Koushik portrait"
                  fill
                  preload
                  fetchPriority="high"
                  quality={85}
                  sizes="(max-width: 640px) 300px, (max-width: 1040px) 420px, 540px"
                  className="hero-portrait-img"
                />
              </div>

              <div className="hero-glass-cta">
                <a href="#projects" className="hero-cta-primary">
                  <span>Review case studies</span>
                  <ArrowUpRightIcon />
                </a>
                <a href="#approach" className="hero-cta-secondary">
                  <span>See my engineering method</span>
                </a>
              </div>
            </div>

            <div className="hero-metrics-col" data-reveal>
              <div className="hero-stars-row" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <StarIcon key={idx} />
                ))}
              </div>
              <div className="hero-metric-spotlight">
                <strong>{featuredMetric.value}</strong>
                <span>{featuredMetric.label}</span>
              </div>

              <div className="hero-metrics-mini-grid" aria-label="Portfolio proof points">
                {supportingMetrics.map((metric) => (
                  <div className="hero-mini-card" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-band" aria-hidden="true">
        <div className="marquee-strip">
          <div className="marquee-track">
            {[...marqueePillars, ...marqueePillars, ...marqueePillars].map((item, idx) => (
              <span className="marquee-item" key={`${item}-${idx}`}>
                <span>{item}</span>
                <FourPointStarIcon className="marquee-star" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
