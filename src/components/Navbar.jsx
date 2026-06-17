import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, ShieldAlert, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Medicines', href: '#products' },
    { name: 'Health Tips', href: '#tips' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-white/85 dark:bg-[#031c15]/85 backdrop-blur-md shadow-lg shadow-green-primary/5 border-b border-green-primary/10'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-white/20 shadow-md shadow-green-primary/10 transition-transform duration-300 group-hover:scale-105">
            <img
              src="/assets/Logo.png"
              alt="OM Pharmacy Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={`font-serif text-2xl font-black tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-green-primary dark:text-[#7dddbc]' : 'text-white'
              }`}
            >
              OM
            </span>
            <span
              className={`text-[10px] tracking-[0.2em] uppercase font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray dark:text-green-pale' : 'text-white/70'
              }`}
            >
              Pharmacy
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[2px] after:h-[2px] after:bg-green-light after:transition-all after:duration-300 hover:after:w-full ${
                    isScrolled
                      ? 'text-dark dark:text-white hover:text-green-light'
                      : 'text-white/95 hover:text-green-light'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className={`flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-full shadow-md transition-all duration-300 hover:scale-105 ${
              isScrolled
                ? 'bg-green-primary text-white hover:bg-green-light hover:shadow-green-light/30'
                : 'bg-white text-green-primary hover:bg-green-pale hover:shadow-white/20'
            }`}
          >
            <Phone className="w-4 h-4" />
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled
              ? 'text-dark dark:text-white hover:bg-green-pale/25'
              : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-[#031c15] border-t border-green-primary/10 px-6 py-4 shadow-xl"
          >
            <ul className="flex flex-col gap-4 py-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-semibold text-dark dark:text-white hover:text-green-light py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-green-primary text-white font-bold py-3 rounded-xl hover:bg-green-light shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
