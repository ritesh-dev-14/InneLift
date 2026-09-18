import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = ({ isLoading }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  useEffect(() => {
    const headingLetters = headingRef.current.querySelectorAll('.letter');
    const paragraphWords = paragraphRef.current.querySelectorAll('.word');

    gsap.fromTo(
      headingLetters,
      { opacity: 0, y: 30, rotateX: -60 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.8, ease: 'power3.out', stagger: 0.02, delay: 0.2 }
    );

    gsap.fromTo(
      paragraphWords,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, stagger: 0.015, duration: 0.8, ease: 'power2.out', delay: 0.4 }
    );

    const video = videoRef.current;
    const startVideo = () => video?.play().catch(() => {});

    if (isLoading) return undefined;

    if (video?.readyState >= 3) startVideo();
    else video?.addEventListener('canplay', startVideo, { once: true });

    return () => video?.removeEventListener('canplay', startVideo);
  }, [isLoading]);

  const splitTextIntoLetters = (text) =>
    text.split(/\s+/).filter(Boolean).map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
        {word.split('').map((char, charIndex) => (
          <span key={charIndex} className="letter inline-block opacity-0">{char}</span>
        ))}
      </span>
    ));

  const splitTextIntoWords = (text) =>
    text.split(/\s+/).filter(Boolean).map((word, index) => (
      <span key={index} className="word mx-[0.12em] my-[0.05em] inline-block opacity-0">{word}</span>
    ));

  return (
    <div id="hero-wrapper">
      <section id="home" ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#05070b]">
        <style>{`
          @keyframes cableMove {
            0% { background-position-y: 0; }
            100% { background-position-y: -200px; }
          }
          .lift-cable {
            background-image: repeating-linear-gradient(
              to bottom,
              rgba(56,189,248,0.15) 0px,
              rgba(56,189,248,0.15) 2px,
              transparent 2px,
              transparent 28px
            );
            animation: cableMove 6s linear infinite;
          }
          @media (max-width: 767px) {
            #home {
              background-image: linear-gradient(
                to bottom,
                rgba(5, 7, 11, 0.2) 0%,
                rgba(5, 7, 11, 0.5) 50%,
                rgba(5, 7, 11, 0.9) 100%
              );
              background-size: cover;
              background-position: 85% center;
            }
          }
        `}</style>

        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute -top-40 -right-40 z-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

        {/* Tech Wire Gutters */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-[10%] overflow-hidden md:block lg:w-[12.5%]">
          <div className="lift-cable absolute left-1/4 top-0 h-[200%] w-px" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[10%] overflow-hidden md:block lg:w-[12.5%]">
          <div className="lift-cable absolute left-2/3 top-0 h-[200%] w-px" />
        </div>

        {/* Phone Video */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative h-full w-full overflow-hidden md:w-[80%] lg:w-[75%]">
            <video
              ref={videoRef}
              className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-100"
              src="/PhoneAnimation.mp4"
              muted
              playsInline
              preload="auto"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070b] via-transparent to-transparent opacity-40" />
          </div>
        </div>

        {/* Floating Side Labels */}
        <div className="pointer-events-none absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rotate-[-90deg] flex-row items-center gap-4 text-[clamp(0.7rem,1vw,1rem)] font-medium uppercase tracking-[0.5em] text-white/30 md:flex">
          <span className="w-12 h-[1px] bg-white/20" />
          <span>INNE LIFT</span>
          <span className="w-12 h-[1px] bg-white/20" />
        </div>
        <div className="pointer-events-none absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rotate-[90deg] flex-row items-center gap-4 text-[clamp(0.7rem,1vw,1rem)] font-medium uppercase tracking-[0.5em] text-white/30 md:flex">
          <span className="w-12 h-[1px] bg-white/20" />
          <span>INNE LIFT</span>
          <span className="w-12 h-[1px] bg-white/20" />
        </div>

        {/* Content */}
        <div className="relative z-20 flex min-h-screen w-full flex-col items-start text-left justify-start md:items-center md:text-center md:justify-center px-6 sm:px-12 md:px-16 pt-36 pb-16 text-white select-none box-border">

          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-cyan-400/90 mb-3 block md:hidden">
            Next Generation Elevator Solutions
          </span>

          <h1
            ref={headingRef}
            className="flex flex-wrap justify-start md:justify-center text-4xl font-black uppercase tracking-[0.05em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.75)] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.15] w-full max-w-[320px] sm:max-w-xl md:max-w-none"
          >
            {splitTextIntoLetters('INNE Lifts')}
          </h1>

          <div className="w-10 h-[3px] bg-cyan-500 my-5 md:hidden rounded-full" />

          <p
            ref={paragraphRef}
            className="mt-2 flex max-w-[280px] sm:max-w-md flex-wrap justify-start md:justify-center text-[13px] sm:text-base font-medium leading-relaxed text-gray-300/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-lg lg:text-xl md:max-w-3xl"
          >
            {splitTextIntoWords(
              'Cutting-edge technology. Unmatched safety. Seamless experiences. Redefine vertical mobility with Elevate.'
            )}
          </p>

        </div>
      </section>
    </div>
  );
};

export default Hero;