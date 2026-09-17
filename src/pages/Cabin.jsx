import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Cosmopolitan from "../assets/Cabin/Cosmopolitian.jpeg";
import Golden from "../assets/Cabin/Golden.jpeg";
import SymphonyNova from "../assets/Cabin/Symphony.jpeg";
import Rose from "../assets/Cabin/Rose.jpeg";
import Su from "../assets/Cabin/Su.jpeg";
import Dazzel from "../assets/Cabin/Dazzel.jpeg";
import Moderno from "../assets/Cabin/Moderno.jpeg";
import Flute from "../assets/Cabin/Flute.jpeg";
import Coffe from "../assets/Cabin/Coffe.jpeg";
import Classic from "../assets/Cabin/Classic.jpeg";
import Bespoke from "../assets/Cabin/Bespoke.jpeg";
import Ultima from "../assets/Cabin/Ultima.jpeg";
import Royalm1 from "../assets/Cabin/Royalm1.jpeg";
import Royalm2 from "../assets/Cabin/Royalm2.jpeg";
import Royalm3 from "../assets/Cabin/Royalm3.jpeg";
import Royce1 from "../assets/Cabin/Royce1.jpeg";
import Royce2 from "../assets/Cabin/Royce2.jpeg";
import Royce3 from "../assets/Cabin/Royce3.jpeg";
import Palladium1 from "../assets/Cabin/Palladium1.jpeg";
import Palladium2 from "../assets/Cabin/Palladium2.jpeg";
import Palladium3 from "../assets/Cabin/Palladium3.jpeg";
import Palladium4 from "../assets/Cabin/Palladium4.jpeg";
import Palladium5 from "../assets/Cabin/Palladium5.jpeg";
import Platinum1 from "../assets/Cabin/Platinum1.jpeg";
import Platinum2 from "../assets/Cabin/Platinum2.jpeg";
import Platinum3 from "../assets/Cabin/Platinum3.jpeg";
import Opulent from "../assets/Cabin/Opulent.jpeg";

// Shared image pool (replace with real per-collection photos)
const pool = [
  Cosmopolitan,
  Golden,
  SymphonyNova,
  Rose,
  Su,
  Dazzel,
  Moderno,
  Flute,
  Coffe,
  Classic,
  Bespoke,
    Ultima,
    Royalm1,
    Royalm2,
    Royalm3,
    Royce1,
    Royce2,
    Royce3,
    Palladium1,
    Palladium2,
    Palladium3,
    Palladium4,
    Palladium5,
    Platinum1,
    Platinum2,
    Platinum3,
    Opulent,
];

const imgs = (...indices) => indices.map((i) => pool[i % pool.length]);

// const categories = [
//   {
//     name: "Gold",
//     subs: [
//       { name: "Cosmopolitan", images: imgs(0) },
//       { name: "Golden", images: imgs(1) },
//       { name: "Symphony Nova", images: imgs(2) },
//     ],
//   },
//   {
//     name: "Rose Gold",
//     subs: [
//       { name: "Imperial Duex", images: imgs(3) },
//       { name: "Sun & Moon", images: imgs(4) },
//     ],
//   },
//   {
//     name: "SS Hairline",
//     subs: [
//       { name: "Dazzle", images: imgs(5) },
//       { name: "Moderno", images: imgs(6) },
//       { name: "Flute", images: imgs(7) },
//     ],
//   },
//   {
//     name: "Coffee Brown",
//     subs: [{ name: "Emperor", images: imgs(8) }],
//   },
//   {
//     name: "Classic Series (SS)",
//     subs: [
//       { name: "Classic (SSHL+MIRROR)", images: imgs(9) },
//       { name: "Bespoke Ultima (CUSTOMISED)", images: imgs(10) },
//       { name: "Ultima (DESIGNER)", images: imgs(11) },
//     ],
//   },
//   {
//     name: "Royal Series (COLOURED SS)",
//     subs: [
//       { name: "Royal Majestic (SSHL+MIRROR)", images: imgs(12,13,14) },
//       { name: "Royce (DESIGNER)", images: imgs(15, 16, 17) },
//     ],
//   },
//   {
//     name: "Palladium Series (PRELAM)",
//     subs: [
//       { name: "Bespoke Palladium (CUSTOMISED)", images: imgs(18,19,20) },
//       { name: "Palladium Classic (DESIGNER)", images: imgs(21,22) },
//     ],
//   },
//   {
//     name: "Platinum Series (PREMIUM)",
//     subs: [{ name: "Platinum (DESIGNER)", images: imgs(23,24,25) }],
//   },
//   {
//     name: "Opulent Series (MS)",
//     subs: [{ name: "Opulent (DESIGNER)", images: imgs(26) }],
//   },
// ];

const categories = [
  {
    name: "Gold",
    subs: [
      { name: "Sunrise", images: imgs(0) },
      { name: "Horizon", images: imgs(2) },
    ],
  },
  {
    name: "Rose Gold",
    subs: [
      { name: "Blossom", images: imgs(3) },
      { name: "Petal", images: imgs(4) },
    ],
  },
  {
    name: "Steel Hairline",
    subs: [
      { name: "Spark", images: imgs(5) },
      { name: "Metro", images: imgs(6) },
    ],
  },
  {
    name: "Classic Series (SS)",
    subs: [
      { name: "Sterling (SSHL+MIRROR)", images: imgs(9) },
      { name: "Artisan (CUSTOMISED)", images: imgs(10) },
      { name: "Elite (DESIGNER)", images: imgs(11) },
    ],
  },
];


const CabinGallery = () => {
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
    <section className="relative bg-[#0a0e14] text-white py-24 lg:py-32 overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-cyan-400/70" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Aesthetics &amp; Fixtures
            </span>
            <span className="h-px w-10 bg-cyan-400/70" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Choose your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
              cabin finish
            </span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Explore our cabin finish collections and preview every variant
            before you decide.
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

        {/* Sub-collection Tabs */}
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
          className="relative w-full max-w-2xl mx-auto h-[420px] sm:h-[520px] lg:h-[620px] overflow-hidden rounded-2xl border border-gray-800 shadow-2xl mb-8"
        >
          <img
            src={sub.images[activeImage]}
            alt={`${category.name} - ${sub.name} variant ${activeImage + 1}`}
            loading="lazy"
            className="w-full h-full object-cover"
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
              className={`relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                activeImage === index
                  ? "border-cyan-400 shadow-lg shadow-cyan-500/30 scale-105"
                  : "border-gray-700 opacity-70 hover:opacity-100 hover:border-cyan-400/50"
              }`}
            >
              <img
                src={img}
                alt={`${sub.name} thumbnail ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CabinGallery;