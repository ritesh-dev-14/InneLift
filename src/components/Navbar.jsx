import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo1.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  {
    label: "Aesthetics",
    dropdown: [
      { label: "Cabins", path: "/cabin" },
      { label: "Doors", path: "/doors" },
      { label: "Accessories", path: "/accessories" },
    ],
  },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact Us", path: "/contact", isCTA: true },
];

const Navbar = ({ isLoading }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAestheticsOpen, setIsAestheticsOpen] = useState(false);
  // true = glassy (past hero), false = transparent (inside hero)
  const [isPastHero, setIsPastHero] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
    setIsAestheticsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroWrapper = document.getElementById("hero-wrapper");
      if (heroWrapper) {
        const heroBottom = heroWrapper.getBoundingClientRect().bottom;
        setIsPastHero(heroBottom <= 0);
      } else {
        setIsPastHero(window.scrollY > window.innerHeight * 0.9);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      role="navigation"
      className={`fixed left-0 top-0 z-[100] w-full transition-all duration-700 ease-in-out border-b ${isPastHero
          ? "h-20 bg-[#05070b]/80 backdrop-blur-xl border-white/10 shadow-[0_4px_40px_rgba(0,0,0,0.6)]"
          : "h-28 bg-gradient-to-b from-black/60 to-transparent border-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 h-full">
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick} className="flex items-center group">
          {!isLoading && (
            <motion.img
              src={Logo}
              alt="INNE LIFTS"
              className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] ${isPastHero ? "h-12 md:h-14" : "h-20 md:h-24"}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          )}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setIsAestheticsOpen(true)}
              onMouseLeave={() => link.dropdown && setIsAestheticsOpen(false)}
            >
              {link.dropdown ? (
                <>
                  <button className="group relative inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-gray-300 transition-all duration-300 hover:text-cyan-400 hover:bg-white/5">
                    <span>{link.label}</span>
                    <span className={`text-[10px] transition-transform duration-300 ${isAestheticsOpen ? "rotate-180 text-cyan-400" : "text-gray-500 group-hover:text-cyan-400"}`}>▼</span>
                  </button>
                  <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1a]/95 backdrop-blur-2xl transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.5)] ${isAestheticsOpen ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-4 scale-95"}`}>
                    <div className="p-2 flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          onClick={handleLinkClick}
                          className={({ isActive }) =>
                            `block px-4 py-3 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-300 ${isActive ? "bg-cyan-500/20 text-cyan-400" : "text-gray-400 hover:bg-white/10 hover:text-white hover:pl-5"}`
                          }
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </>
              ) : link.isCTA ? (
                <NavLink
                  to={link.path}
                  onClick={handleLinkClick}
                  className="ml-4 group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-cyan-500 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </NavLink>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `group relative inline-flex items-center px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${isActive ? "text-cyan-400 bg-cyan-500/10" : "text-gray-300 hover:text-white hover:bg-white/5"}`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="relative z-50 inline-flex h-12 w-12 items-center justify-center rounded-full text-white bg-white/5 border border-white/10 backdrop-blur-md md:hidden transition-all duration-300 hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="relative block h-5 w-6">
            <span className={`absolute left-1/2 -translate-x-1/2 h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? "top-2.5 rotate-45 text-cyan-400" : "top-0.5"}`} />
            <span className={`absolute left-1/2 -translate-x-1/2 top-2.5 h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-1/2 -translate-x-1/2 h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? "top-2.5 -rotate-45 text-cyan-400" : "top-4.5"}`} />
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-white/5 shadow-2xl ${isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <div className="bg-[#05070b]/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <div key={link.label} className="w-full">
              {link.dropdown ? (
                <div className="my-2 bg-white/[0.03] rounded-2xl border border-white/5 overflow-hidden">
                  <div className="px-5 py-3 text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase border-b border-white/5 bg-white/[0.02]">
                    {link.label}
                  </div>
                  <div className="p-2 flex flex-col gap-1">
                    {link.dropdown.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={handleLinkClick}
                        className={({ isActive }) =>
                          `block rounded-xl px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors ${isActive ? "bg-cyan-500/10 text-cyan-300" : "text-gray-400 hover:bg-white/5 hover:text-white"}`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : link.isCTA ? (
                <NavLink
                  to={link.path}
                  onClick={handleLinkClick}
                  className="mt-4 flex items-center justify-center w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all active:scale-95"
                >
                  {link.label}
                </NavLink>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `flex items-center rounded-2xl px-5 py-4 text-xs uppercase tracking-[0.15em] font-bold transition-all ${isActive ? "bg-cyan-500/10 text-cyan-400" : "text-gray-300 hover:bg-white/5 hover:text-white"}`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;