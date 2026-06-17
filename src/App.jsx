import React from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import GlobalCanvas from './components/GlobalCanvas';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import About from './components/About';
import Services from './components/Services';
import Medicines from './components/Medicines';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Tips from './components/Tips';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-[#031c15] text-dark dark:text-white transition-colors duration-300 overflow-x-hidden selection:bg-green-light selection:text-white">
      {/* Lag-free trailing Custom Cursor */}
      <CustomCursor />

      {/* Global Background canvas overlay */}
      <GlobalCanvas />

      {/* Glassmorphic Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        {/* Home Section */}
        <Hero />

        {/* Trust Stats strip */}
        <TrustStats />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Medicines Section */}
        <Medicines />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Testimonials Slider Section */}
        <Testimonials />

        {/* Health Tips Section */}
        <Tips />

        {/* Contact Form & Map Section */}
        <Contact />
      </main>

      {/* Footer & Devanagari quote */}
      <Footer />

      {/* WhatsApp persistent floating FAB */}
      <WhatsAppFab />

      {/* Smooth scroll-to-top button */}
      <BackToTop />
    </div>
  );
}

export default App;
