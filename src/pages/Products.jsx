import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Capsule from "../assets/Products/Capsule.png";
import Streacher from "../assets/Products/Streacher.png"
import Waiter from "../assets/Products/Waiter.webp"
import Freight from "../assets/Products/Freight.webp"
import Machineless from "../assets/Products/Machineless.webp"
import Automobile from "../assets/Products/Automobile.webp"
import Homehydrolic from "../assets/Products/Homehydrolic.webp"
import Homegeliftgearless from "../assets/Products/Homeliftgearless.webp"

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    index: "01",
    title: "Capsule Elevator",
    tag: "Panoramic / Luxury",
    description:
      "Our capsule elevators turn everyday vertical movement into a statement. Fully transparent glass cabins flood the ride with natural light and open views, making them a centerpiece for malls, hotel atriums, and corporate lobbies where first impressions matter.",
    secondary:
      "Each cabin is engineered with reinforced laminated glass and a slim structural frame, so the elevator feels almost weightless while still meeting full safety and load standards. Cabin finishes, handrails, and lighting can be tailored to match your building's interior identity.",
    specs: [
      { label: "Capacity", value: "Up to 1000 kg" },
      { label: "Speed", value: "1.0 - 2.5 m/s" },
      { label: "Ideal For", value: "Malls, Hotels, Lobbies" },
    ],
    features: [
      "360° glass cabin",
      "LED ambient lighting",
      "Custom cabin finishes",
      "Reinforced laminated glass",
    ],
    image:
      Capsule,
  },
  {
    index: "02",
    title: "Stretcher Elevator",
    tag: "Healthcare",
    description:
      "Purpose-built for hospitals, diagnostic centers, and care facilities, our stretcher elevators are designed around patient comfort and clinical efficiency. Oversized cabins accommodate full-size beds, stretchers, and accompanying medical staff without compromise.",
    secondary:
      "Anti-bacterial wall panels, rounded corners, and vibration-free leveling minimize discomfort during transit, while wide automatic doors allow quick, safe movement during emergencies. Backup power systems keep critical transport running during outages.",
    specs: [
      { label: "Capacity", value: "Up to 1600 kg" },
      { label: "Door Width", value: "1200 mm +" },
      { label: "Ideal For", value: "Hospitals, Clinics" },
    ],
    features: [
      "Wide-door bed access",
      "Anti-bacterial cabin panels",
      "Ultra-smooth ride control",
      "Emergency backup power",
    ],
    image:
      Streacher,
  },
  {
    index: "03",
    title: "Dumbwaiter Lift",
    tag: "Commercial / Service",
    description:
      "Dumbwaiter lifts quietly move food, linen, documents, and supplies between floors so staff don't have to. Compact enough to fit into tight service shafts, they're a staple in restaurants, hotels, hospitals, and multi-storey commercial kitchens.",
    secondary:
      "Built with food-grade stainless steel interiors, these lifts are easy to clean and resistant to corrosion and odors. Multiple landing call stations and automatic doors make daily operation simple for any staff member.",
    specs: [
      { label: "Capacity", value: "Up to 100 kg" },
      { label: "Shaft Size", value: "Compact / Modular" },
      { label: "Ideal For", value: "Kitchens, Hotels" },
    ],
    features: [
      "Space-saving footprint",
      "Stainless steel interiors",
      "Multi-floor service stops",
      "Easy-clean surfaces",
    ],
    image:
      Waiter,
  },
  {
    index: "04",
    title: "Freight / Goods Elevator",
    tag: "Industrial",
    description:
      "When your operation depends on moving heavy pallets, machinery, or raw materials between floors, our freight elevators deliver consistent, dependable performance. Reinforced cabins and robust drive systems are built for daily industrial use.",
    secondary:
      "Available in multiple configurations to suit warehouses, factories, and distribution centers, these elevators support continuous duty cycles with minimal downtime, and can be customized with platform sizes to match your largest loads.",
    specs: [
      { label: "Capacity", value: "Up to 5000 kg" },
      { label: "Duty Cycle", value: "Continuous / Heavy" },
      { label: "Ideal For", value: "Warehouses, Factories" },
    ],
    features: [
      "High load capacity",
      "Reinforced cabin frame",
      "Built for continuous duty",
      "Custom platform sizes",
    ],
    image:
      Freight,
  },
  {
    index: "05",
    title: "Machine Room Less Elevator",
    tag: "Energy Efficient",
    description:
      "MRL elevators integrate the drive system directly into the shaft, eliminating the need for a dedicated machine room above or beside the shaft. This frees up valuable floor space and reduces construction costs for new and retrofit projects alike.",
    secondary:
      "Gearless permanent-magnet motors run quieter and consume significantly less energy than traditional systems, making MRL elevators a smart choice for modern, sustainability-focused buildings without sacrificing ride quality.",
    specs: [
      { label: "Capacity", value: "Up to 1350 kg" },
      { label: "Energy Use", value: "Up to 40% lower" },
      { label: "Ideal For", value: "Modern Buildings" },
    ],
    features: [
      "No machine room required",
      "Lower energy consumption",
      "Gearless motor technology",
      "Reduced construction cost",
    ],
    image:
      Machineless,
  },
  {
    index: "06",
    title: "Automobile Elevator",
    tag: "Automotive",
    description:
      "Automobile elevators safely transport cars between floors in residential towers, showrooms, and multi-level parking structures, making the most of limited land area without long, sloping ramps.",
    secondary:
      "Precision platform leveling ensures vehicles drive on and off smoothly, while reinforced safety locks and load sensors keep both the vehicle and structure secure during every trip, even with heavier SUVs and luxury cars.",
    specs: [
      { label: "Capacity", value: "Up to 3000 kg" },
      { label: "Platform Size", value: "Custom to vehicle" },
      { label: "Ideal For", value: "Parking, Showrooms" },
    ],
    features: [
      "Heavy vehicle capacity",
      "Precision platform leveling",
      "Reinforced safety locks",
      "Load sensor monitoring",
    ],
    image:
      Automobile,
  },
  {
    index: "07",
    title: "Home Lift Gearless",
    tag: "Residential / Premium",
    description:
      "Designed for modern homes and villas, our gearless home lifts bring effortless multi-floor access with a footprint small enough to fit into existing staircases or compact shafts, without the noise of traditional elevator machinery.",
    secondary:
      "A whisper-quiet gearless motor combined with smooth acceleration and deceleration creates a premium ride experience, while a wide range of cabin finishes lets the lift complement your home's interior design rather than interrupt it.",
    specs: [
      { label: "Capacity", value: "Up to 400 kg" },
      { label: "Stops", value: "Up to 6 floors" },
      { label: "Ideal For", value: "Villas, Duplexes" },
    ],
    features: [
      "Whisper-quiet motor",
      "Compact shaft design",
      "Sleek modern finishes",
      "Smooth start & stop",
    ],
    image:
      Homegeliftgearless,
  },
  {
    index: "08",
    title: "Home Lift Hydraulic",
    tag: "Residential",
    description:
      "Our hydraulic home lifts offer a dependable, budget-friendly way to add accessibility to any home. Powered by a self-contained hydraulic unit, they require minimal structural changes and are quick to install.",
    secondary:
      "The hydraulic system provides a naturally smooth, gentle ride with reliable performance even after years of daily use, and its straightforward mechanics mean maintenance is simple and cost-effective over the life of the lift.",
    specs: [
      { label: "Capacity", value: "Up to 400 kg" },
      { label: "Install Time", value: "Faster than MRL" },
      { label: "Ideal For", value: "Retrofits, Homes" },
    ],
    features: [
      "Cost-effective install",
      "Smooth hydraulic ride",
      "Low maintenance design",
      "Minimal structural change",
    ],
    image:
      Homehydrolic,
  },
];

const Products = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".products-header > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".products-header",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      const rows = gsap.utils.toArray(".product-row");
      rows.forEach((row) => {
        const image = row.querySelector(".product-image");
        const content = row.querySelectorAll(".product-content > *");
        const fromX = row.classList.contains("reverse") ? 60 : -60;

        gsap.fromTo(
          image,
          { opacity: 0, x: fromX, scale: 1.05 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          content,
          { opacity: 0, x: -fromX },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0e14] text-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="products-header text-center mb-24 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-cyan-400/70" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Our Products
            </span>
            <span className="h-px w-10 bg-cyan-400/70" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Vertical Transportation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
              Solutions
            </span>
          </h1>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Discover our complete range of elevators and lifting systems
            engineered for residential, commercial, healthcare, and
            industrial applications.
          </p>
        </div>

        {/* Product Sections */}
        <div className="space-y-28 lg:space-y-36">
          {products.map((product, index) => {
            const isReverse = index % 2 === 1;
            return (
              <div
                key={product.index}
                className={`product-row grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  isReverse ? "reverse lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`product-image group relative overflow-hidden rounded-2xl border border-gray-800 ${
                    isReverse ? "lg:col-start-2" : ""
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-[320px] sm:h-[400px] lg:h-[520px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-transparent to-transparent" />
                  <span className="absolute top-5 right-5 text-xs font-mono tracking-widest text-cyan-300/90 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                    {product.index}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`product-content space-y-6 ${
                    isReverse ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-cyan-400" />
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                      {product.tag}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {product.title}
                  </h2>

                  <p className="text-gray-300 leading-relaxed max-w-xl">
                    {product.description}
                  </p>

                  <p className="text-gray-400 leading-relaxed max-w-xl">
                    {product.secondary}
                  </p>

                  {/* Spec stats */}
                  <div className="grid grid-cols-3 gap-4 max-w-xl border-t border-gray-800 pt-5">
                    {product.specs.map((spec) => (
                      <div key={spec.label}>
                        <p className="text-sm md:text-base font-bold text-white">
                          {spec.value}
                        </p>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                          {spec.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Feature list */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;