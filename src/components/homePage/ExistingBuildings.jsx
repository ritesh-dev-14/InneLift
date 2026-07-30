// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import video1 from '../../assets/video1.mp4';

// gsap.registerPlugin(ScrollTrigger);

// const ExistingBuildings = () => {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const headerCardRef = useRef(null);
//   const cardsWrapperRef = useRef(null);

//   const services = [
//     {
//       title: "Maintenance",
//       desc: "We maintain all makes and models of elevators and escalators with proactive diagnostic monitoring loops.",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "Elevator Modernization",
//       desc: "Boost your elevator's reliability, eco-efficiency, comfort, and safety layout appearance with engineered modern fixtures.",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//         </svg>
//       )
//     },
//     {
//       title: "Enhancement Solutions",
//       desc: "Smart, flexible solutions for access and destination control, as well as ecosystem communications.",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//         </svg>
//       )
//     }
//   ];

//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         id: 'existing-buildings-pin',   // Named so cleanup never kills other sections
//         trigger: containerRef.current,
//         start: 'top top',
//         end: '+=200%',
//         scrub: 1,
//         pin: true,
//         pinSpacing: true,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//         refreshPriority: -5,            // Lowest of all — runs after Hero(10), Stats(5), Solutions(0)
//       }
//     });

//     tl.fromTo(videoRef.current, { opacity: 0.1 }, { opacity: 0.25, duration: 0.5 });

//     tl.fromTo(
//       headerCardRef.current,
//       { opacity: 0, y: 60 },
//       { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
//       '-=0.2'
//     );

//     const cards = cardsWrapperRef.current.querySelectorAll('.eb-service-card'); // Scoped class name
//     tl.fromTo(
//       cards,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.2,
//         duration: 1.2,
//         ease: 'power2.out'
//       },
//       '-=0.3'
//     );
//   }, { scope: containerRef });

//   return (
//     // Stable wrapper so React keeps a clean parent while GSAP pins the inner section
//     <div id="existing-buildings-wrapper">
//       <section ref={containerRef} className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-gray-950 px-4 py-20 text-white sm:px-6 sm:py-24 md:px-12">

//         {/* Background Video */}
//         <video
//           ref={videoRef}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none opacity-10 transition-opacity duration-700"
//         >
//           <source src={video1} type="video/mp4" />
//         </video>

//         {/* Dark Ambient Layer */}
//         <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950 z-10 pointer-events-none" />

//         {/* Content */}
//         <div className="z-20 mx-auto flex w-full max-w-7xl flex-col justify-between gap-10 py-4 md:min-h-[75vh]">

//           {/* Header Card */}
//           <div className="w-full flex justify-start">
//             <div
//               ref={headerCardRef}
//               className="max-w-2xl rounded-tr-[40px] rounded-bl-[40px] rounded-tl-lg rounded-br-lg bg-white p-6 text-gray-950 shadow-2xl opacity-0 transform sm:p-8 md:p-10"
//             >
//               <span className="text-xs font-bold text-blue-600 tracking-widest uppercase block mb-2">
//                 Modernization Loop
//               </span>
//               <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
//                 Solutions for existing building
//               </h2>
//               <p className="text-sm leading-relaxed text-gray-600 font-medium">
//                 We pride ourselves on our deep understanding of both equipment and customer needs — ensuring your existing equipment is kept running smoothly throughout its lifetime.
//               </p>
//             </div>
//           </div>

//           {/* Service Cards Grid */}
//           <div
//             ref={cardsWrapperRef}
//             className="grid w-full grid-cols-1 gap-6 items-stretch sm:grid-cols-2 lg:grid-cols-4"
//           >
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="eb-service-card bg-white text-gray-950 p-6 rounded-2xl flex flex-col justify-between items-start border border-gray-100 shadow-xl opacity-0 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group cursor-pointer min-h-[220px]"
//               >
//                 <div className="p-3 bg-blue-900 text-white rounded-xl mb-5 group-hover:bg-blue-600 transition-colors duration-300">
//                   {service.icon}
//                 </div>

//                 <div className="space-y-2 flex-grow">
//                   <h3 className="text-lg font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
//                     {service.title}
//                   </h3>
//                   <p className="text-xs leading-relaxed text-gray-500 font-medium line-clamp-4">
//                     {service.desc}
//                   </p>
//                 </div>

//                 <div className="pt-4 mt-auto">
//                   <span className="text-xs font-bold text-blue-600 group-hover:text-blue-800 transition-colors flex items-center gap-1">
//                     Learn More <span className="transform group-hover:translate-x-1 transition-transform">→</span>
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// };

// export default ExistingBuildings;






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
      <section ref={containerRef} className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-gray-950 px-6 py-24 text-white sm:px-12 md:px-16 lg:px-24">

        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none opacity-10 transition-opacity duration-700"
        >
          <source src={video1} type="video/mp4" />
        </video>

        {/* Dark Ambient Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950 z-10 pointer-events-none" />

        {/* Content */}
        <div className="z-20 mx-auto flex w-full max-w-7xl flex-col justify-between gap-16 py-4 md:min-h-[75vh]">

          {/* Header Card */}
          <div className="w-full flex justify-start">
            <div
              ref={headerCardRef}
              className="max-w-2xl rounded-2xl bg-white p-8 text-gray-950 shadow-2xl opacity-0 transform sm:p-10"
            >
              <span className="text-xs font-bold text-blue-600 tracking-widest uppercase block mb-3">
                Modernization Loop
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-gray-950">
                Solutions for existing buildings
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 font-medium">
                We pride ourselves on our deep understanding of both equipment and customer needs — ensuring your existing equipment is kept running smoothly throughout its lifetime.
              </p>
            </div>
          </div>

          {/* Service Cards Grid (Optimized to 3-cols for perfect alignment) */}
          <div
            ref={cardsWrapperRef}
            className="grid w-full grid-cols-1 gap-8 items-stretch sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="eb-service-card bg-white text-gray-950 p-8 rounded-2xl flex flex-col justify-between items-start border border-gray-100 shadow-xl opacity-0 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group cursor-pointer min-h-[260px]"
              >
                <div className="w-full">
                  {/* Icon Container */}
                  <div className="inline-flex p-3 bg-blue-900 text-white rounded-xl mb-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-md">
                    {service.icon}
                  </div>

                  {/* Heading & Desc */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold tracking-tight text-gray-950 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 font-medium">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Action bar */}
                <div className="pt-6 w-full border-t border-gray-100 mt-6">
                  <span className="text-xs font-bold text-blue-600 group-hover:text-blue-800 transition-colors flex items-center gap-1.5">
                    Learn More 
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
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