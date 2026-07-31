import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import video1 from '../../assets/video1.mp4';

gsap.registerPlugin(ScrollTrigger);

const ExistingBuildings = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const headerCardRef = useRef(null);
  const cardsWrapperRef = useRef(null);

  const services = [
    {
      title: "Maintenance",
      desc: "We maintain all makes and models of elevators and escalators with proactive diagnostic monitoring loops.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Elevator Modernization",
      desc: "Boost your elevator's reliability, eco-efficiency, comfort, and safety layout appearance with engineered modern fixtures.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )
    },
    {
      title: "Enhancement Solutions",
      desc: "Smart, flexible solutions for access and destination control, as well as ecosystem communications.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    }
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        id: 'existing-buildings-pin',
        trigger: containerRef.current,
        start: 'top top',
        end: '+=200%',
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: -5,
      }
    });

    tl.fromTo(videoRef.current, { opacity: 0.1 }, { opacity: 0.25, duration: 0.5 });

    tl.fromTo(
      headerCardRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.2'
    );

    const cards = cardsWrapperRef.current.querySelectorAll('.eb-service-card');
    tl.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power2.out'
      },
      '-=0.3'
    );
  }, { scope: containerRef });

  return (
    <div id="existing-buildings-wrapper">
      <section ref={containerRef} className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#05070b] px-6 py-24 text-white sm:px-12 md:px-16 lg:px-24">

        {/* Ambient background glows */}
        <div className="pointer-events-none absolute -top-40 -left-40 z-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none opacity-20 mix-blend-screen transition-opacity duration-700"
        >
          <source src={video1} type="video/mp4" />
        </video>

        {/* Dark Ambient Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070b] via-[#05070b]/70 to-[#05070b] z-10 pointer-events-none" />

        {/* Content */}
        <div className="z-20 mx-auto flex w-full max-w-7xl flex-col justify-between gap-16 py-4 md:min-h-[75vh]">

          {/* Header Card */}
          <div className="w-full flex justify-start">
            <div
              ref={headerCardRef}
              className="max-w-2xl rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 sm:p-10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.5)] opacity-0 transform relative overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
              
              <span className="text-xs font-bold text-cyan-400 tracking-[0.2em] uppercase block mb-3 relative z-10">
                Modernization Loop
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5 text-white drop-shadow-md relative z-10 leading-tight">
                Solutions for existing buildings
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-300 font-medium relative z-10">
                We pride ourselves on our deep understanding of both equipment and customer needs — ensuring your existing equipment is kept running smoothly throughout its lifetime.
              </p>
            </div>
          </div>

          {/* Service Cards Grid (Optimized to 3-cols for perfect alignment) */}
          <div
            ref={cardsWrapperRef}
            className="grid w-full grid-cols-1 gap-6 items-stretch sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="eb-service-card relative bg-white/[0.03] backdrop-blur-xl text-white p-8 rounded-3xl flex flex-col justify-between items-start border border-white/10 shadow-2xl opacity-0 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-500 group cursor-pointer min-h-[280px] overflow-hidden"
              >
                <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-full relative z-10">
                  {/* Icon Container */}
                  <div className="inline-flex p-3.5 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl mb-6 shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-500">
                    {service.icon}
                  </div>

                  {/* Heading & Desc */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Action bar */}
                <div className="pt-6 w-full border-t border-white/10 mt-8 relative z-10">
                  <span className="text-xs uppercase tracking-widest font-bold text-cyan-500 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    Explore Solution 
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ExistingBuildings;