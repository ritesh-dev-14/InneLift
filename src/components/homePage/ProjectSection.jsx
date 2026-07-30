import React, { useState } from 'react';

function ProjectsSection() {
  const projects = [
    {
      id: '01',
      title: 'Park Hyatt',
      year: '2022',
      description: 'Schindler leverages the best people and technology to deliver reliable service. Our network of service experts keeps your elevators up and callbacks down.',
      details: [
        { label: 'Building Height', value: '51 m', icon: 'height' },
        { label: 'Location', value: 'Bengaluru', icon: 'location' },
        { label: 'No. of Units Installed', value: '10', icon: 'unit' },
        { label: 'Additional Features', value: 'Access Card / Matte Finish Cop', icon: 'features' },
        { label: 'Speed', value: '1.75 m/s', icon: 'speed' },
        { label: 'Product Type', value: 'Escalator', icon: 'product' },
        { label: 'Floor', value: '11', icon: 'floor' },
      ],
      bgColor: 'bg-blue-950/40',
      borderColor: 'border-blue-900/40',
      image: 'https://images.unsplash.com/photo-1542125387-c712c4f8efb0?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: '02',
      title: 'Novotel',
      year: '2022',
      description: 'Delivering robust vertical transit systems across commercial hubs with state-of-the-art dispatch optimization intelligence.',
      details: [
        { label: 'Building Height', value: '45 m', icon: 'height' },
        { label: 'Location', value: 'Mumbai', icon: 'location' },
        { label: 'No. of Units Installed', value: '8', icon: 'unit' },
        { label: 'Additional Features', value: 'Touchless Call panels', icon: 'features' },
        { label: 'Speed', value: '2.0 m/s', icon: 'speed' },
        { label: 'Product Type', value: 'Elevator', icon: 'product' },
        { label: 'Floor', value: '14', icon: 'floor' },
      ],
      bgColor: 'bg-indigo-950/30',
      borderColor: 'border-indigo-900/40',
      image: 'https://images.unsplash.com/photo-1594142425511-d102a0149021?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: '03',
      title: 'Rupa Renaissance',
      year: '2021',
      description: 'Custom architectural elevator structural design providing unparalleled ride comforts and seamless visual integration loops.',
      details: [
        { label: 'Building Height', value: '68 m', icon: 'height' },
        { label: 'Location', value: 'Navi Mumbai', icon: 'location' },
        { label: 'No. of Units Installed', value: '12', icon: 'unit' },
        { label: 'Additional Features', value: 'Panoramic Glass Shaft', icon: 'features' },
        { label: 'Speed', value: '2.5 m/s', icon: 'speed' },
        { label: 'Product Type', value: 'High-Rise Lift', icon: 'product' },
        { label: 'Floor', value: '22', icon: 'floor' },
      ],
      bgColor: 'bg-cyan-950/20',
      borderColor: 'border-cyan-900/30',
      image: 'https://images.unsplash.com/photo-1533035350251-aa8b8e208d95?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const [hoveredCardId, setHoveredCardId] = useState('01');

  return (
    // No GSAP pin here — pure React, no ScrollTrigger conflict possible
    <section id="projects" className="bg-gray-950 px-4 py-20 text-white font-sans sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">

        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-4 border-b border-gray-900 pb-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <span className="text-xs font-semibold px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-blue-400 uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-100">Our Projects</h2>
          </div>
          <button className="w-fit rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500">
            View All Projects
          </button>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {projects.map((project) => {
            const isExpanded = hoveredCardId === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredCardId(project.id)}
                className={`w-full relative rounded-2xl overflow-hidden transition-all duration-500 ease-in-out border backdrop-blur-md cursor-pointer ${project.bgColor} ${project.borderColor} ${
                  isExpanded ? 'shadow-2xl shadow-black/50' : 'hover:bg-gray-900/30'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isExpanded ? 'scale-105 opacity-20' : 'opacity-5'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">

                    <div className="flex items-center lg:items-start gap-6 lg:gap-8 flex-none mb-6 lg:mb-0 lg:w-1/4">
                      <span className="text-xl md:text-2xl font-bold font-mono text-blue-400/80">
                        {project.id}
                      </span>
                      <div className="space-y-1">
                        <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-100">
                          {project.title}
                        </h3>
                        <div className={`transition-all duration-300 overflow-hidden ${
                          isExpanded ? 'max-h-8 opacity-100 mt-1' : 'max-h-0 opacity-0'
                        }`}>
                          <span className="text-sm font-semibold text-gray-400 tracking-wider">
                            —— {project.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={`flex-1 transition-all duration-500 ease-in-out ${
                      isExpanded ? 'opacity-100 max-h-[1200px] mt-2 lg:mt-0' : 'opacity-0 max-h-0 pointer-events-none overflow-hidden'
                    }`}>
                      <div className="space-y-8">
                        <p className="text-sm md:text-base leading-relaxed text-gray-300 max-w-3xl">
                          {project.description}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4 border-t border-gray-900/60">
                          {project.details?.map((detail, idx) => (
                            <div key={idx} className="flex gap-3 items-center">
                              <div className="p-2 border border-gray-800 rounded-lg bg-gray-900/60 text-blue-400 flex-shrink-0">
                                {detail.icon === 'height' && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5"></path><path d="M12 9v12"></path><path d="M4 3h16"></path></svg>}
                                {detail.icon === 'location' && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>}
                                {detail.icon === 'unit' && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2"></path></svg>}
                                {detail.icon === 'features' && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>}
                                {detail.icon === 'speed' && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
                                {detail.icon === 'product' && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2"></path></svg>}
                                {detail.icon === 'floor' && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 4h18M3 9h18M3 14h18M3 19h18"></path></svg>}
                              </div>
                              <div className="flex flex-col min-w-0">
                                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 truncate">{detail.label}</span>
                                <span className="text-sm font-bold text-gray-200 truncate">{detail.value}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4">
                          <button className="bg-white hover:bg-gray-200 text-gray-950 font-bold text-xs px-6 py-3 rounded-full transition-colors duration-200 shadow-md">
                            View Project Case Study
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;