import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo1.png';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'How We Work', path: '/how-we-work' },
  ];

  const supportLinks = [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/legal' },
  ];

  const SOCIAL = {
    instagram: 'https://www.instagram.com/inne_lifts?igsh=MWw0ZWthM2xiajRlbg==',
    facebook: 'https://www.facebook.com/profile.php?id=61580663333170',
    youtube: 'https://youtube.com/@innelifts?si=METuIPXN65vDJCv_',
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#05070b] pt-20 pb-10 px-6 sm:px-12 lg:px-24 font-['Albert Sans',_sans-serif] antialiased text-white select-none relative overflow-hidden border-t border-white/5">
      
      {/* High-Tech Background Ambient Grid Underlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-0 left-1/4 z-0 h-[20rem] w-[20rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 z-0 h-64 w-64 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto flex flex-col relative z-10">

        {/* UPPER MAIN GRID LEVEL CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">

          {/* COLUMN 1: BRAND INFORMATION (Span 4) */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col items-start space-y-6">
            <div 
              onClick={scrollToTop} 
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="relative p-2 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-cyan-500/50 group-hover:bg-white/[0.05] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <img src={Logo} alt="Inne Lifts" className="h-9 w-auto object-contain brightness-125" />
              </div>
              <div className="text-xl font-black uppercase tracking-widest text-white drop-shadow-md">
                INNE<span className="text-cyan-400">LIFTS</span>
              </div>
            </div>

            <p className="text-gray-400 font-medium text-sm leading-relaxed max-w-sm tracking-wide">
              We design, build, and modernize ultra-reliable vertical transit architectures and smart people flow solutions across India.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="w-11 h-11 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:-translate-y-1 shadow-lg"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><circle cx="17.5" cy="6.5" r="0.5"/></svg>
              </a>

              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="w-11 h-11 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-blue-500 hover:border-blue-400/50 hover:bg-blue-500/10 hover:-translate-y-1 shadow-lg"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.5l.5-3h-3V7.5c0-.9.4-1.5 1.5-1.5H16V3.1c-.3-.1-1.4-.2-2.7-.2-2.7 0-4.3 1.5-4.3 4.4V11H7v3h2V22h4.5z"/></svg>
              </a>

              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noreferrer noopener"
                className="w-11 h-11 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 hover:-translate-y-1 shadow-lg"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12s0-2.2-.2-3.2c-.2-1-.8-1.8-1.8-2C17.4 6 12 6 12 6s-5.4 0-6.9.8c-1 .2-1.6 1-1.8 2C3 9.8 3 12 3 12s0 2.2.2 3.2c.2 1 .8 1.8 1.8 2C6.6 18 12 18 12 18s5.4 0 6.9-.8c1-.2 1.6-1 1.8-2 .2-1 .2-3.2.2-3.2z"/><path d="M10 14.5l4-2.5-4-2.5v5z"/></svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: NAVIGATION (Span 2) */}
          <div className="md:col-span-6 lg:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-[0.2em] block">
                Navigation
              </span>
            </div>
            <ul className="flex flex-col gap-3.5 w-full">
              {quickLinks.map((link, idx) => (
                <li key={idx} className="relative group flex items-center">
                  <span className="absolute left-0 w-1 h-0 bg-cyan-400 rounded-r-md transition-all duration-300 ease-out group-hover:h-full" />
                  <Link 
                    to={link.path} 
                    onClick={scrollToTop}
                    className="text-gray-400 font-medium text-sm tracking-wide pl-0 group-hover:pl-4 group-hover:text-cyan-300 transition-all duration-300 ease-out"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: LEGAL & SUPPORT (Span 2) */}
          <div className="md:col-span-6 lg:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-[0.2em] block">
                Support
              </span>
            </div>
            <ul className="flex flex-col gap-3.5 w-full">
              {supportLinks.map((link, idx) => (
                <li key={idx} className="relative group flex items-center">
                  <span className="absolute left-0 w-1 h-0 bg-cyan-400 rounded-r-md transition-all duration-300 ease-out group-hover:h-full" />
                  <Link 
                    to={link.path} 
                    onClick={scrollToTop}
                    className="text-gray-400 font-medium text-sm tracking-wide pl-0 group-hover:pl-4 group-hover:text-cyan-300 transition-all duration-300 ease-out"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: QUICK CONTACT CARD (Span 4) */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-[0.2em] block">
                Quick Contact
              </span>
            </div>

            <div className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-900/10 via-white/[0.02] to-blue-900/10 backdrop-blur-xl border border-white/10 p-6 group transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="space-y-5 relative z-10">
                {/* Email Row */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-0.5">Email Us</span>
                    <a href="mailto:lifts.works@gmail.com" className="text-xs sm:text-sm text-gray-200 font-semibold hover:text-cyan-400 transition-colors">
                      lifts.works@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Row */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-0.5">Call Us</span>
                    <a href="tel:+919875991350" className="text-sm sm:text-base text-white font-bold hover:text-cyan-400 transition-colors">
                      +91 98759 91350 , +91 81238 13000                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* COPYRIGHT BAR */}
        <div className="pt-8 flex flex-col gap-4 sm:flex-row items-center justify-between text-center sm:text-left">
          <span className="text-gray-500 font-medium text-xs tracking-wide">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-gray-300 font-bold uppercase tracking-widest">Inne Lifts</span>. 
            All rights reserved.
          </span>
          <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-500/50 select-none">
            ENGINEERED FOR ABSOLUTE SCALE
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;