import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import inneTestimonial from "../assets/InneTestimonial.mp4";
import inneTestimonial1 from "../assets/InneTestimonial1.mp4";

const TESTIMONIALS_DATA = [
  {
    id: "testimonial-1",
    name: "Vikram Malhotra",
    role: "Lead Architect, Skyline Developers",
    company: "Nexus Towers",
    quote: "The seamless integration of structural engineering and elite finish options made INNELIFTS our primary choices. Their full vision glass configurations completely re-engineered our lobby's architectural statement.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Sarah Jenkins",
    role: "Operations Director",
    company: "Vertex Hospitality Group",
    quote: "Unrivaled operational performance coupled with deep aesthetic customization. The Rose Gold finish matches our interior identity flawlessly while running whisper-quietly day after day.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Rajesh K. Sharma",
    role: "Chief Infrastructure Officer",
    company: "Apex Tech Park",
    quote: "Vertical transit logistics require absolute, zero-fault reliability. These elevator solutions did not just deliver stability—the custom styling options added exceptional value to our workspace aesthetics.",
    rating: 5,
  },
];

const TESTIMONIAL_VIDEOS = [
  {
    id: "instagram-1",
    label: "Instagram Reel 1",
    type: "instagram",
    link: "https://www.instagram.com/p/Dc-yauNzlsG/",
    embedUrl: "https://www.instagram.com/p/Dc-yauNzlsG/embed/?utm_source=ig_embed&ig_iframe=true",
  },
  {
    id: "instagram-2",
    label: "Instagram Reel 2",
    type: "instagram",
    link: "https://www.instagram.com/p/DcdoDO3zs0A/",
    embedUrl: "https://www.instagram.com/p/DcdoDO3zs0A/embed/?utm_source=ig_embed&ig_iframe=true",
  },
  {
    id: "video-1",
    label: "InneTestimonial",
    type: "video",
    videoSrc: inneTestimonial1,
  },
  {
    id: "video-2",
    label: "InneTestimonial1",
    type: "video",
    videoSrc: inneTestimonial,
  },
];

const AUTOPLAY_INTERVAL = 4500;

const styles = `
  .t-section {
    background: #0a0e14;
    padding: 96px 0;
    overflow: hidden;
    user-select: none;
    font-family: 'Albert Sans', sans-serif;
    position: relative;
    border-t: 1px solid #111827;
  }

  /* ── Stage ── */
  .t-stage {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
  }
  .t-track {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1360px;
    gap: clamp(12px, 2vw, 24px);
  }

  /* ── Card States ── */
  .t-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid #1f2937;
    background: rgba(17, 24, 39, 0.2);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: clamp(20px, 3vw, 48px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .t-card--center {
    width: 58%;
    min-height: 340px;
    z-index: 20;
    border-color: rgba(34, 211, 238, 0.2);
    box-shadow: 0 25px 70px rgba(0,0,0,0.5), 0 0 40px rgba(6, 182, 212, 0.03);
  }
  .t-card--side {
    width: 19%;
    min-height: 280px;
    z-index: 10;
  }
  .t-card--side:hover .t-side-dim {
    opacity: 0.15;
  }
  .t-side-dim {
    position: absolute;
    inset: 0;
    background: #0a0e14;
    opacity: 0.55;
    transition: opacity 0.4s ease;
    z-index: 5;
  }

  /* ── Signature Navigation Row ── */
  .t-progress-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 38px;
    margin-top: 40px;
    padding: 0 24px;
  }
  .t-progress-btn {
    background: none;
    border: none;
    padding: 6px 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
    min-width: 70px;
    max-width: 120px;
    flex: 1;
    outline: none;
  }
  .t-progress-name {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #4b5563;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.3s ease;
  }
  .t-progress-btn[aria-current="true"] .t-progress-name {
    color: #22d3ee;
  }
  .t-progress-track {
    width: 100%;
    height: 2px;
    background: #1f2937;
    border-radius: 2px;
    overflow: hidden;
    position: relative;
  }
  .t-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #22d3ee, #3b82f6);
    border-radius: 2px;
    transform-origin: left;
  }

  @media (max-width: 768px) {
    .t-card--center { width: 82%; min-height: 380px; padding: 24px; }
    .t-card--side   { width: 8%; min-height: 240px; padding: 12px; }
    .t-progress-name { display: none; }
    .t-progress-btn { min-width: 40px; }
  }
`;

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);
  const nextSlideRef = useRef(null);
  const len = TESTIMONIALS_DATA.length;

  nextSlideRef.current = () => setActiveIndex((i) => (i + 1) % len);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    timerRef.current = setInterval(() => nextSlideRef.current(), AUTOPLAY_INTERVAL);
  }, [stopAutoPlay]);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  const goTo = (index) => {
    stopAutoPlay();
    setActiveIndex(index);
    setTimeout(startAutoPlay, AUTOPLAY_INTERVAL * 1.5);
  };

  const goToVideo = (direction) => {
    setVideoIndex((prev) => {
      const next = (prev + direction + TESTIMONIAL_VIDEOS.length) % TESTIMONIAL_VIDEOS.length;
      return next;
    });
  };

  const getSlides = () => {
    const leftIdx = (activeIndex - 1 + len) % len;
    const rightIdx = (activeIndex + 1) % len;
    return [
      { ...TESTIMONIALS_DATA[leftIdx], pos: "side", absoluteIndex: leftIdx },
      { ...TESTIMONIALS_DATA[activeIndex], pos: "center", absoluteIndex: activeIndex },
      { ...TESTIMONIALS_DATA[rightIdx], pos: "side", absoluteIndex: rightIdx },
    ];
  };

  const padded = (n) => String(n).padStart(2, "0");

  return (
    <>
      <style>{styles}</style>
      <section
        className="t-section"
        onMouseEnter={() => { setIsHovered(true); stopAutoPlay(); }}
        onMouseLeave={() => { setIsHovered(false); startAutoPlay(); }}
        aria-label="Client testimonials"
      >
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

        {/* Header (Cyber Aesthetic Matching your Theme) */}
        <div className="text-center mb-16 max-w-2xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-cyan-400/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Client Experiences
            </span>
            <span className="h-px w-10 bg-cyan-400/50" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
            Trusted by{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
              industry leaders
            </span>
          </h2>
          <p className="mt-6 text-gray-400 leading-relaxed text-sm md:text-base">
            Discover how our custom vertical engineering solutions transform modern urban spaces and architecture globally.
          </p>
        </div>

        {/* Featured Video Reels */}
        <div className="max-w-4xl mx-auto px-6 mb-20 relative z-20">
          <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-[#080d13] shadow-[0_25px_80px_-20px_rgba(34,211,238,0.25)]">
            <div className="flex items-center justify-between absolute left-4 right-4 top-4 z-20">
              <button
                type="button"
                aria-label="Previous testimonial video"
                onClick={() => goToVideo(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-xl text-white backdrop-blur-md transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                ←
              </button>

              <button
                type="button"
                aria-label="Next testimonial video"
                onClick={() => goToVideo(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-xl text-white backdrop-blur-md transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                →
              </button>
            </div>

            <div className="relative group">
              {TESTIMONIAL_VIDEOS[videoIndex].type === "instagram" ? (
                <iframe
                  key={TESTIMONIAL_VIDEOS[videoIndex].id}
                  title={TESTIMONIAL_VIDEOS[videoIndex].label}
                  src={TESTIMONIAL_VIDEOS[videoIndex].embedUrl}
                  className="h-[620px] w-full border-0 bg-black transition duration-500 group-hover:scale-[1.01]"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  scrolling="no"
                  frameBorder="0"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                />
              ) : (
                <video
                  key={TESTIMONIAL_VIDEOS[videoIndex].id}
                  title={TESTIMONIAL_VIDEOS[videoIndex].label}
                  src={TESTIMONIAL_VIDEOS[videoIndex].videoSrc}
                  className="h-[620px] w-full bg-black object-contain transition duration-500 group-hover:scale-[1.01]"
                  controls
                  playsInline
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/5 pointer-events-none" />

            </div>
          </div>
        </div>

        {/* Dynamic Track Stage Layout */}
        <div className="t-stage">
          <div className="t-track">
            <AnimatePresence mode="popLayout" initial={false}>
              {getSlides().map((slide) => {
                const isCenter = slide.pos === "center";
                return (
                  <motion.div
                    key={slide.id}
                    layout
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: isCenter ? 1 : 0.4, scale: isCenter ? 1 : 0.96 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 160, damping: 28 }}
                    onClick={() => !isCenter && goTo(slide.absoluteIndex)}
                    className={isCenter ? "t-card t-card--center" : "t-card t-card--side"}
                  >
                    {!isCenter && <div className="t-side-dim" aria-hidden="true" />}

                    {/* Content inside center card */}
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        {/* Rating layout */}
                        {isCenter && (
                          <div className="flex gap-1 mb-6">
                            {[...Array(slide.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        )}

                        <p className={`font-light leading-relaxed text-gray-200 tracking-wide ${isCenter ? 'text-base md:text-lg lg:text-xl mb-8' : 'text-xs opacity-20 truncate'}`}>
                          "{slide.quote}"
                        </p>
                      </div>

                      {/* Footer Metadata */}
                      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${isCenter ? 'pt-6 border-t border-gray-800/60' : 'hidden'}`}>
                        <div>
                          <h4 className="text-sm font-bold tracking-wide text-white">{slide.name}</h4>
                          <p className="text-xs text-gray-400 mt-0.5">{slide.role}</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-[10px] font-mono tracking-widest text-cyan-300 bg-cyan-950/20 border border-cyan-500/20 px-4 py-1.5 rounded-full uppercase">
                            {slide.company}
                          </div>
                          <div className="text-xs font-mono text-gray-500 hidden sm:flex items-baseline gap-1">
                            <span className="text-cyan-400 font-medium">{padded(activeIndex + 1)}</span>
                            <span className="opacity-40">/</span>
                            <span>{padded(len)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Bar Dynamic Timeline Navigation */}
        <div className="t-progress-row" role="tablist" aria-label="Slider options">
          {TESTIMONIALS_DATA.map((slide, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={slide.id}
                className="t-progress-btn"
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? "true" : "false"}
                onClick={() => goTo(i)}
              >
                <span className="t-progress-name">{slide.company.split(" ")[0]}</span>
                <div className="t-progress-track">
                  <motion.div
                    className="t-progress-fill"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={
                      isActive && !isHovered
                        ? { duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }
                        : { duration: 0.25, ease: "easeOut" }
                    }
                    style={{ originX: 0 }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}