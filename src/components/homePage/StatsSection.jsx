import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const containerRef = useRef(null);
  const bannerRef = useRef(null);
  const textRef = useRef(null);

  const clientCountRef = useRef(null);
  const teamCountRef = useRef(null);
  const installCountRef = useRef(null);

  const formatNumber = (value) => new Intl.NumberFormat('en-US').format(value);

  useGSAP(() => {
    gsap.set('.stats-word', { color: 'rgba(255, 255, 255, 0.12)' });

    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        id: 'stats-pin',
        trigger: containerRef.current,
        start: 'top top',
        end: '+=250%',
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 5,   // After Hero (10) but before Solutions (0)
      }
    });

    masterTimeline.fromTo(
      bannerRef.current,
      { opacity: 0, y: 60, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
    );

    const countData = { clients: 0, team: 0, installations: 0 };
    masterTimeline.to(countData, {
      clients: 184,
      team: 42,
      installations: 1280,
      duration: 1.5,
      ease: 'power1.out',
      onUpdate: () => {
        if (clientCountRef.current) clientCountRef.current.innerText = formatNumber(Math.floor(countData.clients));
        if (teamCountRef.current) teamCountRef.current.innerText = formatNumber(Math.floor(countData.team));
        if (installCountRef.current) installCountRef.current.innerText = formatNumber(Math.floor(countData.installations));
      }
    }, '<');

    masterTimeline.to(bannerRef.current, {
      opacity: 0,
      y: -60,
      scale: 0.95,
      duration: 1,
      ease: 'power2.inOut'
    }, '+=0.5');

    const words = textRef.current.querySelectorAll('.stats-word');

    masterTimeline.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );

    masterTimeline.to(words, {
      color: '#ffffff',
      textShadow: '0 0 20px rgba(255,255,255,0.15)',
      stagger: 0.15,
      duration: 2,
      ease: 'none'
    });

  }, { scope: containerRef });

  const splitTextIntoWords = (text) =>
    text.split(' ').map((word, index) => (
      <span key={index} className="inline-block mr-[0.28em] stats-word will-change-transform">
        {word}
      </span>
    ));

  return (
    <div
      id="about"
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#03060d] px-6 py-20 text-white sm:px-12 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/[0.02] blur-[140px]" />

      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">

        <div
          ref={bannerRef}
          className="absolute w-full grid grid-cols-1 gap-8 rounded-2xl border border-white/[0.05] bg-gradient-to-b from-white/[0.03] to-transparent p-8 backdrop-blur-md md:grid-cols-4 lg:p-12 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.5)]"
        >
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/80">Active Clients</p>
            <div className="flex items-baseline font-mono">
              <span ref={clientCountRef} className="text-4xl lg:text-5xl font-black tracking-tight text-white">0</span>
              <span className="text-xl font-light text-cyan-400 ml-1">+</span>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400/80">Corporate Team</p>
            <div className="flex items-baseline font-mono">
              <span ref={teamCountRef} className="text-4xl lg:text-5xl font-black tracking-tight text-white">0</span>
              <span className="text-xl font-light text-indigo-400 ml-1">+</span>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400/80">Total Installations</p>
            <div className="flex items-baseline font-mono">
              <span ref={installCountRef} className="text-4xl lg:text-5xl font-black tracking-tight text-white">0</span>
              <span className="text-xl font-light text-blue-400 ml-1">+</span>
            </div>
          </div>

          <div className="flex items-center border-t border-white/[0.06] pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="text-xs leading-relaxed text-gray-400">
              As a vanguard in heavy engineering infrastructure, <span className="text-white font-medium">Inne Lifts</span> maps premium vertical transportation logic routes seamlessly.
            </p>
          </div>
        </div>

        <div ref={textRef} className="opacity-0 pointer-events-none text-center max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="text-[10px] font-extrabold tracking-[0.3em] text-gray-500 uppercase">
              Operational Scope
            </span>
          </div>

          <h2 className="flex flex-wrap justify-center text-3xl font-extrabold leading-[1.3] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
            {splitTextIntoWords("Our company offers highly skilled project management solutions for the architectural backbone of modern business enterprise infrastructures.")}
          </h2>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;