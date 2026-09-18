import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Door1 from "../assets/Doors/Door1.jpeg";
import Door2 from "../assets/Doors/Door2.jpeg";
import Door3 from "../assets/Doors/Door3.jpeg";
import Door4 from "../assets/Doors/Door4.jpeg";
import Door5 from "../assets/Doors/Door5.jpeg";
import Door6 from "../assets/Doors/Door6.jpeg";
import Door7 from "../assets/Doors/Door7.jpeg";
import Door8 from "../assets/Doors/Door8.jpeg";
import Door9 from "../assets/Doors/Door9.jpeg";
import Door10 from "../assets/Doors/Door10.jpeg";
import Door11 from "../assets/Doors/Door11.jpeg";
import Door12 from "../assets/Doors/Door12.jpeg";
import Door13 from "../assets/Doors/Door13.jpeg";
import Door14 from "../assets/Doors/Door14.jpeg";
import Door15 from "../assets/Doors/Door15.jpeg";
import Door16 from "../assets/Doors/Door16.jpeg";
import Door17 from "../assets/Doors/Door17.png";
import Rose from "../assets/Doors/Gold.png";
import Gold from "../assets/Doors/Rose.png";
import HalfBlack from "../assets/Doors/HalfBlack.png";

// Shared placeholder image pool — replace each imgs() call with real door photos
const pool = [
  Door1,
  Door2,
  Door3,
  Door4,
  Door5,
  Door6,
  Door7,
  Door8,
  Door9,
  Door10,
  Door11,
  Door12,
  Door13,
  Door14,
  Door15,
  Door16,
  Door17,
  Rose,
  Gold,
  HalfBlack,
];

const imgs = (...indices) => indices.map((i) => pool[i % pool.length]);

// const categories = [
//   {
//     name: "No Vision Door",
//     subs: [
//       { name: "Silver", images: imgs(0) },
//       { name: "Gold",   images: imgs(1) },
//       { name: "Rose Gold", images: imgs(2) },
//       { name: "Black", images: imgs(3) },
//     ],
//   },
//   {
//     name: "Small Vision Glass Door",
//     subs: [
//       { name: "Silver",   images: imgs(4) },
//       { name: "Gold",     images: imgs(5) },
//       { name: "Rose Gold",images: imgs(6) },
//       { name: "Black",    images: imgs(7) },
//     ],
//   },
//   {
//     name: "Full Vision Glass Door",
//     subs: [
//       { name: "Silver",   images: imgs(8) },
//       { name: "Gold",     images: imgs(9) },
//       { name: "Rose Gold",images: imgs(10) },
//       { name: "Black",    images: imgs(11) },
//     ],
//   },
//   {
//     name: "Random Radiance Glass Door",
//     subs: [
//       { name: "Silver",   images: imgs(12) },
//       { name: "Gold",     images: imgs(13) },
//       { name: "Rose Gold",images: imgs(14) },
//       { name: "Black",    images: imgs(15) },
//     ],
//   },
//   {
//     name: "Swing Door",
//     subs: [
//       { name: "Silver",   images: imgs(16) },
//     //   { name: "Gold",     images: imgs(1, 0, 2) },
//     //   { name: "Rose Gold",images: imgs(2, 3) },
//     //   { name: "Black",    images: imgs(8, 7) },
//     ],
//   },
// ];


const categories = [
  {
    name: "Solid Door",
    subs: [
      { name: "Silver", images: imgs(0) },
      { name: "Gold",   images: imgs(1) },
      { name: "Rose Gold", images: imgs(2) },
      { name: "Black", images: imgs(3) },
    ],
  },
  {
    name: "Half Vision Door",
    subs: [
      { name: "Silver",   images: imgs(4) },
      { name: "Gold",     images: imgs(17) },
      { name: "Rose Gold",images: imgs(18) },
      { name: "Black",    images: imgs(19) },
    ],
  },
  // {
  //   name: "Clear Vision Door",
  //   subs: [
  //     { name: "Silver",   images: imgs(8) },
  //     { name: "Gold",     images: imgs(9) },
  //     { name: "Rose Gold",images: imgs(10) },
  //     { name: "Black",    images: imgs(11) },
  //   ],
  // },
  {
    name: "Designer Glass Door",
    subs: [
      { name: "Silver",   images: imgs(12) },
      { name: "Gold",     images: imgs(13) },
      { name: "Rose Gold",images: imgs(14) },
      { name: "Black",    images: imgs(15) },
    ],
  },
];

const Doors = () => {
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
              door finish
            </span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Explore our door collections and preview every finish and variant
            before you decide.
          </p>
        </div>

        {/* Door Type Tabs */}
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

        {/* Variant Tabs */}
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

export default Doors;