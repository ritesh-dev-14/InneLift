import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  { label: "Contact", path: "/contact" },
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
      // hero-wrapper is the stable outer div wrapping the Hero <section>
      // When the user scrolls past it, flip to glassy
      const heroWrapper = document.getElementById("hero-wrapper");
      if (heroWrapper) {
        const heroBottom = heroWrapper.getBoundingClientRect().bottom;
        // heroBottom <= 0 means the hero has fully scrolled off the top of the viewport
        setIsPastHero(heroBottom <= 0);
      } else {
        // Fallback: use 100vh if hero-wrapper isn't found
        setIsPastHero(window.scrollY > window.innerHeight * 0.9);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Run once on mount to set correct initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      role="navigation"
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-out border-b ${isPastHero
          ? "h-20 bg-[#05070b]/70 backdrop-blur-md border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "h-28 bg-transparent border-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-full">
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick} className="flex items-center w-32 md:w-48">
          {!isLoading && (
            <motion.img
              src={Logo}
              alt="INNE LIFTS"
              className={`w-auto object-contain transition-all duration-500 ${isPastHero ? "h-14" : "h-24"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          )}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-wider md:flex">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setIsAestheticsOpen(true)}
              onMouseLeave={() => link.dropdown && setIsAestheticsOpen(false)}
            >
              {link.dropdown ? (
                <>
                  <button className="group relative inline-flex items-center gap-1.5 py-2 text-gray-300 transition-colors duration-200 hover:text-cyan-400">
                    <span>{link.label}</span>
                    <span className={`text-[9px] transition-transform duration-300 ${isAestheticsOpen ? "rotate-180 text-cyan-400" : "text-gray-500"}`}>▼</span>
                  </button>
                  <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 min-w-[200px] overflow-hidden rounded-xl border border-white/10 bg-[#070a10]/95 backdrop-blur-xl transition-all duration-300 p-1.5 ${isAestheticsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                    {link.dropdown.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={handleLinkClick}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-xs font-medium rounded-lg ${isActive ? "bg-cyan-500/10 text-cyan-300" : "text-gray-400 hover:bg-white/5 hover:text-white"}`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `group relative inline-block py-2 ${isActive ? "text-cyan-400 font-bold" : "text-gray-300 hover:text-cyan-400"}`
                  }
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 ease-out group-hover:w-full" />
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-md text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="relative block h-5 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? "top-2 rotate-45 text-cyan-400" : "top-0"}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? "top-2 -rotate-45 text-cyan-400" : "top-4"}`} />
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-white/5 ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <ul className="flex flex-col gap-1 bg-[#05070b]/90 px-5 py-4 backdrop-blur-xl">
          {navLinks.map((link) => (
            <li key={link.label} className="transition-all duration-300">
              {link.dropdown ? (
                <div className="my-1 py-1 bg-white/[0.02] rounded-xl border border-white/5">
                  <div className="px-4 py-2 text-xs font-bold tracking-widest text-cyan-400 uppercase">{link.label}</div>
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={handleLinkClick}
                      className={({ isActive }) =>
                        `block rounded-lg pl-8 pr-4 py-2.5 text-xs uppercase tracking-wider ${isActive ? "text-cyan-300 font-semibold" : "text-gray-400 hover:text-white"}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `flex items-center rounded-lg px-4 py-3 text-xs uppercase tracking-wider font-medium transition-all ${isActive ? "bg-cyan-500/10 text-cyan-300 font-bold" : "text-gray-300 hover:bg-white/5 hover:text-cyan-400"}`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;