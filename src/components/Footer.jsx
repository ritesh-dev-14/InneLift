// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../assets/Logo1.png';

// const Footer = () => {
//   const quickLinks = [
//     { label: 'Home', path: '/' },
//     { label: 'Products', path: '/products' },
//     { label: 'Testimonials', path: '/testimonials' },
//     { label: 'How We Work', path: '/how-we-work' },
//   ];

//   const supportLinks = [
//     { label: 'Contact Us', path: '/contact' },
//     { label: 'Privacy Policy', path: '/privacy' },
//     { label: 'Terms of Service', path: '/legal' },
//   ];

//   const SOCIAL = {
//     instagram: 'https://www.instagram.com/inne_lifts?igsh=MWw0ZWthM2xiajRlbg==',
//     youtube: 'https://youtube.com/@innelifts?si=METuIPXN65vDJCv_',
//   };

//   // Helper function to scroll to top
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="w-full bg-[#020406] pt-24 pb-10 px-6 sm:px-12 lg:px-20 font-['Albert Sans',_sans-serif] antialiased text-white select-none relative border-t border-white/[0.06]">
      
//       {/* High-Tech Background Ambient Grid Underlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
      
//       <div className="max-w-7xl mx-auto flex flex-col relative z-10">

//         {/* UPPER MAIN GRID LEVEL CONTAINER */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.06]">

//           {/* COLUMN 1: BRAND INFORMATION */}
//           <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6">
//             <div className="flex items-center gap-3">
//               <img src={Logo} alt="Inne Lifts" className="h-9 w-auto object-contain brightness-110" />
//               <div className="text-xl font-black uppercase tracking-tight text-white font-['Albert Sans']">
//                 INNE<span className="text-[#00b4af] font-black">LIFTS</span>
//               </div>
//             </div>

//             <p className="text-gray-400 font-light text-sm leading-relaxed max-w-sm">
//               We design, build, and modernize ultra-reliable vertical transit architectures and smart people flow solutions across India.
//             </p>

//             <div className="flex items-center gap-2.5 pt-2">
//               <a
//                 href={SOCIAL.instagram}
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="w-9 h-9 bg-white/[0.02] border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-[#00b4af] hover:border-[#00b4af]/40 hover:bg-[#00b4af]/5"
//                 aria-label="Instagram"
//               >
//                 <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><circle cx="17.5" cy="6.5" r="0.5"/></svg>
//               </a>

//               <a
//                 href={SOCIAL.youtube}
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="w-9 h-9 bg-white/[0.02] border border-white/10 rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-red-500 hover:border-red-500/40 hover:bg-red-500/5"
//                 aria-label="YouTube"
//               >
//                 <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12s0-2.2-.2-3.2c-.2-1-.8-1.8-1.8-2C17.4 6 12 6 12 6s-5.4 0-6.9.8c-1 .2-1.6 1-1.8 2C3 9.8 3 12 3 12s0 2.2.2 3.2c.2 1 .8 1.8 1.8 2C6.6 18 12 18 12 18s5.4 0 6.9-.8c1-.2 1.6-1 1.8-2 .2-1 .2-3.2.2-3.2z"/><path d="M10 14.5l4-2.5-4-2.5v5z"/></svg>
//               </a>
//             </div>
//           </div>

//           {/* COLUMN 2: QUICK NAVIGATION */}
//           <div className="lg:col-span-3 flex flex-col items-start text-left lg:pl-8">
//             <span className="text-[#00b4af] font-mono text-[10px] font-bold uppercase tracking-[0.25em] block mb-6">
//               // Core Navigation
//             </span>
//             <ul className="flex flex-col gap-3.5 w-full">
//               {quickLinks.map((link, idx) => (
//                 <li key={idx} className="group">
//                   <Link 
//                     to={link.path} 
//                     onClick={scrollToTop}
//                     className="inline-flex items-center text-gray-400 font-light text-sm tracking-wide transition-all duration-200 group-hover:text-white transform group-hover:translate-x-1"
//                   >
//                     <span className="text-[#00b4af] opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[20px] transition-all font-mono mr-1 text-xs">[</span>
//                     {link.label}
//                     <span className="text-[#00b4af] opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[20px] transition-all font-mono ml-1 text-xs">]</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* COLUMN 3: SUPPORT & RESOURCES */}
//           <div className="lg:col-span-4 flex flex-col items-start text-left space-y-6">
//             <div>
//               <span className="text-[#00b4af] font-mono text-[10px] font-bold uppercase tracking-[0.25em] block mb-6">
//                 // System Operations
//               </span>
//               <ul className="flex flex-col gap-3.5">
//                 {supportLinks.map((link, idx) => (
//                   <li key={idx} className="group">
//                     <Link 
//                       to={link.path} 
//                       onClick={scrollToTop}
//                       className="inline-flex items-center text-gray-400 font-light text-sm tracking-wide transition-all duration-200 group-hover:text-white transform group-hover:translate-x-1"
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="w-full pt-4 border-t border-white/[0.04] space-y-1.5">
//               <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block">Direct Communications</span>
//               <div className="text-xs text-gray-400 font-light leading-relaxed">
//                 <span className="text-gray-300 font-medium block">lifts.works@gmail.com</span>
//                 <span className="text-white font-bold tracking-wider block mt-0.5">+91 98759 91350</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* COPYRIGHT BAR */}
//         <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
//           <span className="text-gray-500 font-light text-xs tracking-wide">
//             &copy; {new Date().getFullYear()}{' '}
//             <span className="text-gray-300 font-semibold uppercase tracking-wider">Inne Lifts</span>. 
//             All infrastructure frameworks recorded.
//           </span>
//           <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/20 select-none">
//             ENGINEERED FOR ABSOLUTE SCALE // 2026
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



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
    youtube: 'https://youtube.com/@innelifts?si=METuIPXN65vDJCv_',
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#020406] pt-28 pb-10 px-6 sm:px-12 lg:px-24 font-['Albert Sans',_sans-serif] antialiased text-white select-none relative border-t border-white/[0.05] overflow-hidden">
      
      {/* High-Tech Background Ambient Grid Underlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
      
      {/* Subtle Cyan Top Edge Flare */}
      <div className="absolute top-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#00b4af]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col relative z-10">

        {/* UPPER MAIN GRID LEVEL CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8 pb-20 border-b border-white/[0.06]">

          {/* COLUMN 1: BRAND INFORMATION */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start space-y-8">
            <div 
              onClick={scrollToTop} 
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="relative p-1.5 bg-white/[0.02] border border-white/10 rounded-xl transition-all duration-500 group-hover:border-[#00b4af]/40 group-hover:bg-white/[0.05]">
                <img src={Logo} alt="Inne Lifts" className="h-8 w-auto object-contain brightness-110" />
              </div>
              <div className="text-xl font-black uppercase tracking-wider text-white">
                INNE<span className="text-[#00b4af]">LIFTS</span>
              </div>
            </div>

            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-sm tracking-wide">
              We design, build, and modernize ultra-reliable vertical transit architectures and smart people flow solutions across India.
            </p>

            {/* Premium Icon Outlines */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="w-11 h-11 bg-white/[0.01] border border-white/[0.08] rounded-xl flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-[#00b4af] hover:border-[#00b4af]/30 hover:bg-[#00b4af]/5 hover:-translate-y-0.5 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="3" width="18" height="18" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><circle cx="17.5" cy="6.5" r="0.5"/></svg>
              </a>

              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noreferrer noopener"
                className="w-11 h-11 bg-white/[0.01] border border-white/[0.08] rounded-xl flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-red-500 hover:border-red-500/30 hover:bg-red-500/5 hover:-translate-y-0.5 shadow-sm"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M21 12s0-2.2-.2-3.2c-.2-1-.8-1.8-1.8-2C17.4 6 12 6 12 6s-5.4 0-6.9.8c-1 .2-1.6 1-1.8 2C3 9.8 3 12 3 12s0 2.2.2 3.2c.2 1 .8 1.8 1.8 2C6.6 18 12 18 12 18s5.4 0 6.9-.8c1-.2 1.6-1 1.8-2 .2-1 .2-3.2.2-3.2z"/><path d="M10 14.5l4-2.5-4-2.5v5z"/></svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: CORE NAVIGATION */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col items-start lg:pl-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1 h-1 bg-[#00b4af] rounded-full animate-pulse" />
              <span className="text-[#00b4af] font-mono text-[10px] font-bold uppercase tracking-[0.25em] block">
                Core Navigation
              </span>
            </div>
            <ul className="flex flex-col gap-4 w-full">
              {quickLinks.map((link, idx) => (
                <li key={idx} className="relative group flex items-center">
                  {/* Structural Vertical Transiting Hover bar */}
                  <span className="absolute left-0 w-[2px] h-0 bg-[#00b4af] transition-all duration-300 ease-out group-hover:h-full" />
                  <Link 
                    to={link.path} 
                    onClick={scrollToTop}
                    className="text-gray-400 font-light text-sm tracking-wide pl-0 group-hover:pl-4 group-hover:text-white transition-all duration-300 ease-out"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SYSTEM OPERATIONS & COMMUNICATIONS */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col items-start space-y-8">
            <div className="w-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1 h-1 bg-[#00b4af] rounded-full animate-pulse" />
                <span className="text-[#00b4af] font-mono text-[10px] font-bold uppercase tracking-[0.25em] block">
                  System Operations
                </span>
              </div>
              <ul className="flex flex-col gap-4 w-full">
                {supportLinks.map((link, idx) => (
                  <li key={idx} className="relative group flex items-center">
                    <span className="absolute left-0 w-[2px] h-0 bg-[#00b4af] transition-all duration-300 ease-out group-hover:h-full" />
                    <Link 
                      to={link.path} 
                      onClick={scrollToTop}
                      className="text-gray-400 font-light text-sm tracking-wide pl-0 group-hover:pl-4 group-hover:text-white transition-all duration-300 ease-out"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Command Console Info Box */}
            <div className="w-full p-5 rounded-xl bg-white/[0.01] border border-white/[0.04] space-y-3 relative group">
              <div className="absolute top-0 right-4 transform -translate-y-1/2 bg-[#020406] px-2 font-mono text-[9px] tracking-widest text-gray-500 uppercase">
                HQ Terminal
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase block">Inquiries</span>
                <a 
                  href="mailto:lifts.works@gmail.com" 
                  className="text-sm text-gray-300 font-light block hover:text-[#00b4af] transition-colors duration-200"
                >
                  lifts.works@gmail.com
                </a>
              </div>
              <div className="space-y-0.5 pt-1">
                <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase block">Direct Line</span>
                <a 
                  href="tel:+919875991350" 
                  className="text-base text-white font-bold tracking-widest block hover:text-[#00b4af] transition-colors duration-200 font-sans"
                >
                  +91 98759 91350
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="pt-8 flex flex-col gap-4 sm:flex-row items-center justify-between text-center sm:text-left">
          <span className="text-gray-500 font-light text-xs tracking-wide">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-gray-300 font-normal uppercase tracking-wider">Inne Lifts</span>. 
            All engineering architectures cataloged.
          </span>
          <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-white/15 select-none">
            ENGINEERED FOR ABSOLUTE SCALE // 2026
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;