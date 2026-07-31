import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./assets/Logo1.png";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cabin from "./pages/Cabin";
import Doors from "./pages/Doors";
import Accessories from "./pages/Accessories";
import Testimonials from "./pages/Testimonial";
import ContactForm from "./pages/ContactForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
    exit: { opacity: 0, y: -10, transition: { duration: 0.4 } },
  };

  const text = "INNE LIFTS".split("");

  return (
    <BrowserRouter>
      <CustomCursor />
      
      {/* Background Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader-bg"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9998] bg-[#05070b]"
          />
        )}
      </AnimatePresence>

      {/* Centered Logo & Animated Text Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            key="preloader-content"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none"
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            <motion.img
              src={Logo}
              alt="INNE LIFTS"
              className="h-32 md:h-48 object-contain mb-4"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                opacity: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            <motion.div className="flex space-x-1">
              {text.map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className={`text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase text-white drop-shadow-md ${char === " " ? "w-4" : ""}`}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar isLoading={isLoading} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cabin" element={<Cabin />} />
        <Route path="/doors" element={<Doors />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;