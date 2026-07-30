import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const leftLabelRef = useRef(null);
  const rightLabelRef = useRef(null);

  const frameConfigRef = useRef({ frameCount: 0, extension: 'jpg' });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetch('/manifest.json')
      .then((res) => res.json())
      .then((data) => {
        frameConfigRef.current = data;
        setReady(true);
      })
      .catch((err) => console.error('manifest.json load error:', err));
  }, []);

  const framePath = (index) => {
    const { extension } = frameConfigRef.current;
    const assetFolder = window.innerWidth >= 768 ? '/Images' : '/PhoneImages';
    return `${assetFolder}/ezgif-frame-${String(index).padStart(3, '0')}.${extension}`;
  };

  useGSAP(() => {
    if (!ready) return;

    const { frameCount } = frameConfigRef.current;
    if (!frameCount) return;

    // Kill only THIS component's ScrollTriggers, not all of them globally
    // (killing all breaks Stats and Solutions sections)
    ScrollTrigger.getAll()
      .filter((st) => st.vars?.id === 'hero-pin')
      .forEach((st) => st.kill());

    const canvas = canvasRef.current;
    const context2D = canvas?.getContext('2d');

    if (!canvas || !context2D || !headingRef.current || !paragraphRef.current) return;

    context2D.imageSmoothingEnabled = true;
    context2D.imageSmoothingQuality = 'high';

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const sizeCanvas = () => {
      const { clientWidth, clientHeight } = canvas;
      canvas.width = Math.round(clientWidth * dpr);
      canvas.height = Math.round(clientHeight * dpr);
      context2D.setTransform(dpr, 0, 0, dpr, 0, 0);
      context2D.imageSmoothingEnabled = true;
      context2D.imageSmoothingQuality = 'high';
    };

    sizeCanvas();

    const sequence = { frame: 1 };
    let images = [];

    const isMobile = window.innerWidth < 768;
    const actualFrameCount = isMobile ? Math.min(frameCount, 177) : frameCount;

    gsap.set(canvasRef.current, { opacity: 0 });
    images = Array.from({ length: actualFrameCount }, (_, index) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = framePath(index + 1);
      return img;
    });

    const renderFrame = () => {
      const targetIndex = Math.max(1, Math.min(actualFrameCount, Math.round(sequence.frame)));
      const img = images[targetIndex - 1];
      if (!img || !img.naturalWidth) return;

      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const canvasWidth = canvas.clientWidth || window.innerWidth;
      const canvasHeight = canvas.clientHeight || window.innerHeight;

      const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const newWidth = Math.floor(imgWidth * ratio);
      const newHeight = Math.floor(imgHeight * ratio);
      const x = Math.floor((canvasWidth - newWidth) / 2);
      const y = Math.floor((canvasHeight - newHeight) / 2);

      context2D.clearRect(0, 0, canvasWidth, canvasHeight);
      context2D.drawImage(img, x, y, newWidth, newHeight);
    };

    images.forEach((img) => { img.onload = renderFrame; });

    if (images[0]) {
      if (images[0].complete) renderFrame();
      else images[0].addEventListener('load', renderFrame);
    }

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

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          id: 'hero-pin',             // Named ID so we only kill THIS trigger on cleanup
          trigger: containerRef.current,
          start: 'top top',
          end: '+=450%',
          scrub: 2,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 10,        // Hero calculates FIRST — higher = earlier
        },
      });

      scrollTimeline.to(canvasRef.current, { opacity: 1, duration: 0.2 }, 0);
      scrollTimeline.to(headingRef.current, { opacity: 0, y: -40, scale: 0.97, duration: 0.8 }, 0.05);
      scrollTimeline.to(paragraphRef.current, { opacity: 0, y: -25, duration: 0.8 }, 0.08);

      scrollTimeline.to(
        sequence,
        { frame: frameCount, duration: 4, ease: 'none', onUpdate: renderFrame },
        0
      );

      scrollTimeline.to(leftLabelRef.current, { x: 30, y: -10, opacity: 0.8, duration: 1.2 }, 0.1);
      scrollTimeline.to(rightLabelRef.current, { x: -30, y: 10, opacity: 0.8, duration: 1.2 }, 0.1);

      return () => { scrollTimeline.kill(); };
    });

    mm.add('(max-width: 767px)', () => {
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          id: 'hero-pin-mobile',
          trigger: containerRef.current,
          start: 'top top',
          end: '+=450%',
          scrub: 2,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 10,
        },
      });

      scrollTimeline.to(canvasRef.current, { opacity: 1, duration: 0.2 }, 0);
      scrollTimeline.to(headingRef.current, { opacity: 0, y: -24, scale: 0.98, duration: 0.8 }, 0.04);
      scrollTimeline.to(paragraphRef.current, { opacity: 0, y: -18, duration: 0.8 }, 0.08);
      scrollTimeline.to(sequence, { frame: frameCount, duration: 4, ease: 'none', onUpdate: renderFrame }, 0);

      return () => { scrollTimeline.kill(); };
    });

    const handleResize = () => { sizeCanvas(); };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mm.revert();
    };
  }, { scope: containerRef, dependencies: [ready] });

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
          .crisp-canvas {
            transform: translateZ(0);
            backface-visibility: hidden;
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

        {/* Canvas Container */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative h-full w-full overflow-hidden md:w-[80%] lg:w-[75%]">
            <canvas ref={canvasRef} className="crisp-canvas block h-full w-full opacity-100" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070b] via-transparent to-transparent opacity-40" />
          </div>
        </div>

        {/* Floating Side Labels */}
        <div ref={leftLabelRef} className="pointer-events-none absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 rotate-[-90deg] text-[clamp(0.8rem,1.2vw,1.2rem)] font-semibold uppercase tracking-[0.5em] text-white/20 md:block">
          INNE LIFT
        </div>
        <div ref={rightLabelRef} className="pointer-events-none absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 rotate-[90deg] text-[clamp(0.8rem,1.2vw,1.2rem)] font-semibold uppercase tracking-[0.5em] text-white/20 md:block">
          INNE LIFT
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