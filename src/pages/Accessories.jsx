import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardAccess from "../assets/Accessories/CardAccess.jpeg";
import FireAlarm from "../assets/Accessories/FireAlarm.png";
import Floor1 from "../assets/Accessories/Floor1.jpeg";
import Floor2 from "../assets/Accessories/Floor2.jpeg";
import Floor3 from "../assets/Accessories/Floor3.jpeg";
import Floor4 from "../assets/Accessories/Floor4.jpeg";
import Floor5 from "../assets/Accessories/Floor5.jpeg";
import Floor6 from "../assets/Accessories/Floor6.jpeg";
import Floor12 from "../assets/Accessories/Floor12.png";
import Black1 from "../assets/Accessories/Black1.png";
import Black2 from "../assets/Accessories/Black2.png";
import Silver1 from "../assets/Accessories/Silver1.png";
import Silver2 from "../assets/Accessories/Silver2.png";
import Pink1 from "../assets/Accessories/Pink1.png";
import Pink2 from "../assets/Accessories/Pink2.png";
import Gold1 from "../assets/Accessories/Gold1.png";
import Gold2 from "../assets/Accessories/Gold2.png";
import RoundBlack from "../assets/Accessories/RoundBlack.png";
import RoundGold from "../assets/Accessories/RoundGold.png";
import RoundPink from "../assets/Accessories/RoundPink.png";
import RoundSilver from "../assets/Accessories/RoundSilver.png";
import Intercom from "../assets/Accessories/Intercom.png";


gsap.registerPlugin(ScrollTrigger);

// Shared placeholder pool — replace each imgs() call with real accessory photos
const pool = [
  CardAccess,
  FireAlarm,
  Floor1,
  Floor2,
  Floor3,
  Floor4,
  Floor5,
  Floor6,
  Floor12,
  Black1,
  Black2,
  Silver1,
  Silver2,
  Pink1,
  Pink2,
  Gold1,
  Gold2,
  RoundBlack,
  RoundGold,
  RoundPink,
  RoundSilver,
  Intercom
];

const imgs = (...indices) => indices.map((i) => pool[i % pool.length]);

// ─── Gallery categories ────────────────────────────────────────────────────────
const categories = [
  {
    name: "Card Access System",
    subs: [
      { name: "Card Access System", images: imgs(0) },
    //   { name: "Fireman Switch",    images: imgs(1) },
    ],
  },
  {
    name: "Fireman Switch",
    subs: [
    //   { name: "Card Access System", images: imgs(0) },
      { name: "Fireman Switch",    images: imgs(1) },
    ],
  },
  {
    name: "Intercom System",
    subs: [
      { name: "Intercom", images: imgs(21) },
    ],
  },
];

// ─── HyLine specs ─────────────────────────────────────────────────────────────
const hylineUnits = [
  {
    name: "HyLine M",
    desc: "Main unit built-in with GSM/GPRS module and battery.",
  },
  {
    name: "HyLine-S-COP",
    desc: "Non-enclosed alarm unit used in the car operating panel.",
  },
  {
    name: "HyLine-S-TP",
    desc: "Enclosed alarm unit used in the car roof well, under the car.",
  },
  {
    name: "HyLine-S-INT",
    desc: "Intercom unit used in the machine room or the lift control room.",
  },
];

const hylineSpecs = [
  "Intercom system included",
  "Automatic communication test and failure notification",
  "Alarm filtering functions",
  "Instant error notification sent through SMS or E-mail",
  "Instant monitoring of error codes and alarm status",
  "Easy connection with 4 cables",
  "Getting directions to the building with lift failures on mobile devices",
  "Programmable five inputs and two relay outputs",
];

const hyliftSpecs = [
  "The Internet of Lifts — remote monitoring",
  "Remote diagnostics of failures, live view of controller status screen",
  "Remote control for emergency calls, floor locking, parking mode, locking doors, collection mode & more",
  "Error notifications through SMS & email",
  "Navigation route data to the mobile phone",
  "Statistical reports",
  "Past travel logs",
  "Access to electrical diagrams of the lift",
];

// ─── Reusable Gallery Component ───────────────────────────────────────────────
const GalleryBlock = ({ title, subtitle }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSub, setActiveSub] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const previewRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      previewRef.current,
      { opacity: 0, scale: 1.02 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [activeCategory, activeSub, activeImage]);

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setActiveSub(0);
    setActiveImage(0);
  };

  const handleSubChange = (index) => {
    setActiveSub(index);
    setActiveImage(0);
  };

  const category = categories[activeCategory];
  const sub = category.subs[activeSub];

  return (
    <div>
      {/* Section header */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="h-px w-10 bg-cyan-400/70" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            {subtitle}
          </span>
          <span className="h-px w-10 bg-cyan-400/70" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
          {title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
            {title.split(" ").slice(-1)[0]}
          </span>
        </h2>
        <p className="mt-6 text-gray-400 leading-relaxed">
          Select a category and explore every option before you decide.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat, index) => (
          <button
            key={cat.name}
            onClick={() => handleCategoryChange(index)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-widest transition-all duration-300 border ${
              activeCategory === index
                ? "bg-cyan-400 text-[#05070b] border-cyan-400 shadow-lg shadow-cyan-500/30"
                : "bg-gray-900/40 text-gray-300 border-gray-700 hover:border-cyan-400/50 hover:text-cyan-300"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Sub Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {category.subs.map((s, index) => (
          <button
            key={s.name}
            onClick={() => handleSubChange(index)}
            className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 border ${
              activeSub === index
                ? "border-cyan-400 text-cyan-300 bg-cyan-400/10"
                : "border-gray-800 text-gray-400 hover:text-gray-200 hover:border-gray-600"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Main Preview */}
      <div
        ref={previewRef}
        className="relative w-full max-w-2xl mx-auto h-[420px] sm:h-[520px] lg:h-[580px] overflow-hidden rounded-2xl border border-gray-800 shadow-2xl mb-8 bg-[#05070b]"
      >
        <img
          src={sub.images[activeImage]}
          alt={`${category.name} - ${sub.name} variant ${activeImage + 1}`}
          loading="lazy"
          className="w-full h-full object-contain p-3 sm:p-4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-transparent to-transparent" />
        <div className="absolute top-5 left-5 flex flex-col gap-1.5">
          <span className="text-xs font-mono tracking-widest text-cyan-300/90 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 w-fit">
            {category.name}
          </span>
          <span className="text-xs font-semibold tracking-widest text-white bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 w-fit">
            {sub.name}
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-4 flex-wrap">
        {sub.images.map((img, index) => (
          <button
            key={img + index}
            onClick={() => setActiveImage(index)}
            className={`relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-xl border-2 transition-all duration-300 bg-[#05070b] ${
              activeImage === index
                ? "border-cyan-400 shadow-lg shadow-cyan-500/30 scale-105"
                : "border-gray-700 opacity-70 hover:opacity-100 hover:border-cyan-400/50"
            }`}
          >
            <img
              src={img}
              alt={`${sub.name} thumbnail ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-contain p-1.5"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

// ─── Info Card ────────────────────────────────────────────────────────────────
const InfoCard = ({ title, tag, description, specs, children }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: cardRef });

  return (
    <div ref={cardRef} className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 md:p-10 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-cyan-400" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">{tag}</span>
      </div>

      <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h3>

      {description && (
        <p className="text-gray-300 leading-relaxed">{description}</p>
      )}

      {children}

      {specs && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {specs.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ─── Main Accessories Page ────────────────────────────────────────────────────
const Accessories = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".acc-header > *",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".acc-header",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0e14] text-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-28 lg:space-y-36">

        {/* ── Page Header ── */}
        <div className="acc-header text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-cyan-400/70" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Accessories
            </span>
            <span className="h-px w-10 bg-cyan-400/70" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Every detail,{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
              perfected
            </span>
          </h1>
          <p className="mt-6 text-gray-400 leading-relaxed">
            From flooring and handrails to remote monitoring systems — explore
            every accessory that makes an Inne Lift truly complete.
          </p>
        </div>

        {/* ── Gallery ── */}
        <GalleryBlock
          title="Explore Accessories"
          subtitle="Aesthetics & Fixtures"
        />

        {/* ── HyLine & HyLift ── */}
        <div>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-cyan-400/70" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Smart Systems
              </span>
              <span className="h-px w-10 bg-cyan-400/70" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Remote monitoring &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                diagnostics
              </span>
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              HyLine and HyLift keep your elevators connected, monitored, and
              instantly notified — 24/7, from anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* HyLine */}
            <InfoCard
              title="HyLine"
              tag="Alarm & Monitoring System"
              description="HyLine provides remote monitoring, alarm management, and real-time communication for your elevator fleet. It keeps both building managers and service teams instantly informed of any issues."
              specs={hylineSpecs}
            >
              {/* Unit cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hylineUnits.map((u) => (
                  <div
                    key={u.name}
                    className="bg-[#05070b] border border-gray-800 rounded-xl p-4 hover:border-cyan-500/40 transition-colors duration-300"
                  >
                    <p className="text-sm font-bold text-cyan-300 mb-1">{u.name}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{u.desc}</p>
                  </div>
                ))}
              </div>
            </InfoCard>

            {/* HyLift */}
            <InfoCard
              title="HyLift"
              tag="Internet of Lifts"
              description="HyLift takes lift connectivity further — full remote diagnostics, live controller views, and complete remote control capability, putting the entire lift system in the palm of your hand."
              specs={hyliftSpecs}
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Accessories;