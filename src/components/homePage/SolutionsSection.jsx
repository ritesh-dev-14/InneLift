import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Elevator from "../../assets/Elevator.png";
import HomeElevator from "../../assets/HomeElevator.png";
import HospitalEleva from "../../assets/HospitalEleva.png";

gsap.registerPlugin(ScrollTrigger);

const SOLUTIONS_DATA = [
  {
    index: '01',
    title: 'Commercial Elevators',
    tagline: 'High-Rise Systems',
    desc: "Boost your building's vertical velocity, eco-efficiency, and structural appearance with our elite architectural transit frameworks.",
    image: Elevator,
  },
  {
    index: '02',
    title: 'Residential Luxury',
    tagline: 'Bespoke Private Elevators',
    desc: 'Unrivaled operational performance coupled with deep aesthetic customization. Quiet, energy-efficient configurations tailored for premium private villas.',
    image: HomeElevator,
  },
  // {
  //   index: '03',
  //   title: 'Healthcare Logistics',
  //   tagline: 'Precision Transit Core',
  //   desc: 'Vertical transit systems requiring absolute, zero-fault reliability. Built with sterile, spacious configurations for emergency medical deployment.',
  //   image: HospitalEleva,
  // },
];

const SolutionsSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.story-slide');
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'solutions-pin',
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${sections.length * 100}%`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1,
          invalidateOnRefresh: true,
          refreshPriority: 0,   // Lowest — calculates after Hero and Stats
        }
      });

      sections.forEach((section, index) => {
        const textBlock = section.querySelector('.slide-text');
        const imageBlock = section.querySelector('.slide-img-wrap');
        const innerImg = section.querySelector('.slide-img');

        if (index > 0) {
          tl.fromTo(section,
            { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
            { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 2, ease: 'none' },
            '+=0.5'
          );
          tl.fromTo(textBlock,
            { x: -80, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power2.out' },
            '-=1.2'
          );
          tl.fromTo(imageBlock,
            { x: 100, scale: 0.9, opacity: 0 },
            { x: 0, scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
            '-=1.2'
          );
        }

        tl.to(innerImg, {
          scale: 1.1,
          filter: 'grayscale(0%)',
          duration: 2,
          ease: 'none'
        }, '-=0.8');
      });
    });

    mm.add('(max-width: 1023px)', () => {
      sections.forEach((section) => {
        const innerImg = section.querySelector('.slide-img');

        gsap.fromTo(section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );

        gsap.to(innerImg, {
          filter: 'grayscale(0%)',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play reverse play reverse'
          }
        });
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full bg-[#030508] text-white font-['Albert Sans',_sans-serif]">

      <div className="pt-12 pb-6 px-6 sm:px-16 lg:absolute lg:top-12 lg:left-24 lg:z-30 lg:pt-0 lg:pb-0 lg:px-0 pointer-events-none select-none">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400/80 uppercase">
            Engineering Matrix
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white/40">
          SYSTEMS ARCHITECTURE
        </h2>
      </div>

      <div className="relative w-full h-auto lg:h-screen">
        {SOLUTIONS_DATA.map((item, index) => (
          <section
            key={item.index}
            className="story-slide relative lg:absolute inset-0 w-full min-h-[80vh] lg:min-h-screen lg:h-full flex items-center bg-[#05070c] px-6 sm:px-16 lg:px-24 py-12 lg:py-0 border-b border-white/[0.03] lg:border-none"
            style={{ zIndex: index + 1 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 lg:pt-20">

              <div className="slide-text order-2 lg:order-1 lg:col-span-5 space-y-4 sm:space-y-6 z-20">
                <div className="space-y-1">
                  <span className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase block">
                    {item.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-gray-400 font-light max-w-md">
                  {item.desc}
                </p>
                
              </div>

              <div className="slide-img-wrap order-1 lg:order-2 lg:col-span-7 h-[40vh] sm:h-[50vh] lg:h-[68vh] w-full relative group rounded-2xl overflow-hidden border border-white/[0.06] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] z-10">
                <div className="absolute top-4 right-4 font-mono text-[10px] sm:text-[11px] tracking-widest text-white/50 bg-black/50 border border-white/10 px-2.5 py-1 rounded-full z-20 backdrop-blur-sm">
                  SYS // {item.index}
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="slide-img w-full h-full object-cover lg:grayscale lg:scale-100 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none border border-transparent group-hover:border-cyan-500/20 transition-colors duration-500 rounded-2xl" />
              </div>

            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SolutionsSection;