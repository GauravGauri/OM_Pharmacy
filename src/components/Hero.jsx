import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Heart, Calendar, Stethoscope, Phone, ShieldCheck, Activity } from 'lucide-react';
import MultiverseCanvas from './MultiverseCanvas';

const Hero = () => {
  const tickerItems = [
    'Prescription Medicines',
    'Cardiac Care',
    'Paediatric Medicines',
    'Ayurvedic Products',
    'Vaccines & Injections',
    'Diagnostic Kits',
    'Respiratory Care',
    'Orthopaedic Supplies',
    'Eye Drops & Lenses',
    'Lab Reagents',
  ];

  // We duplicate the items to make the ticker animation seamless
  const duplicatedTickerItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#062e20] via-[#0a5238] to-[#0d7a57]"
      >
        {/* Background Multiverse Canvas */}
        <MultiverseCanvas />

        {/* Ambient floating circles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <span className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-white/3 top-[-100px] right-[-100px] blur-3xl animate-float-1" />
          <span className="absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full bg-white/2 bottom-[-50px] left-[-50px] blur-2xl animate-float-2" />
          <span className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full bg-white/3 top-[40%] left-[15%] blur-xl animate-float-3" />
        </div>

        {/* Floating green cross shapes */}
        <div className="absolute top-[15%] right-[8%] text-white/4 text-6xl md:text-8xl select-none pointer-events-none font-light animate-spin-[20s_linear_infinite]">
          ✚
        </div>
        <div className="absolute top-[20%] left-[5%] text-white/5 text-4xl select-none pointer-events-none animate-float-1">
          ✚
        </div>
        <div className="absolute bottom-[25%] right-[10%] text-white/6 text-5xl select-none pointer-events-none animate-float-2">
          ✚
        </div>

        {/* Content wrapper */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-start text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 shadow-md"
            >
              <ShieldCheck className="w-4 h-4 text-gold" />
              Trusted For Years
            </motion.div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-6 drop-shadow-sm">
              Your Health Is <br />
              <span className="bg-gradient-to-r from-[#7dddbc] to-gold bg-clip-text text-transparent italic font-normal">
                Our Sacred Commitment
              </span>
            </h1>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-lg mb-8">
              OM Pharmacy delivers premium medicines, expert pharmaceutical care, and
              personalised health guidance — all under one roof in your community.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-light to-[#0a9e68] text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-lg shadow-green-light/30 hover:scale-105 hover:shadow-green-light/40 transition-all duration-300"
              >
                <Stethoscope className="w-5 h-5" />
                Our Services
              </a>
              <a
                href="tel:+919997103864"
                className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white/40 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base hover:bg-white/10 hover:border-white/60 hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-md">
              {/* Outer soft glow behind image */}
              <div className="absolute inset-0 bg-green-light/10 blur-[80px] rounded-full z-0" />
              
              <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/45">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80&auto=format&fit=crop"
                  alt="Pharmacist at work consulting pills"
                  className="w-full h-auto object-cover max-h-[420px]"
                />
              </div>

              {/* Floating Pill Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-[-15px] left-[-15px] z-20 bg-white dark:bg-[#031c15] border border-green-primary/15 shadow-xl rounded-2xl p-4 flex items-center gap-3 animate-float-1 max-w-[210px]"
              >
                <div className="w-10 h-10 rounded-xl bg-green-pale flex items-center justify-center text-green-primary flex-shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <strong className="text-sm font-bold text-dark dark:text-white">5000+ Medicines</strong>
                  <span className="text-[10px] text-gray dark:text-green-pale/75">Always in stock</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute top-[-15px] right-[-15px] z-20 bg-white dark:bg-[#031c15] border border-green-primary/15 shadow-xl rounded-2xl p-4 flex items-center gap-3 animate-float-2 max-w-[210px]"
              >
                <div className="w-10 h-10 rounded-xl bg-green-pale flex items-center justify-center text-green-primary flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <strong className="text-sm font-bold text-dark dark:text-white">Open 8AM - 10PM</strong>
                  <span className="text-[10px] text-gray dark:text-green-pale/75">All 7 days</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ticker Scrolling Banner */}
      <div className="bg-green-primary py-3.5 overflow-hidden border-y border-green-light/20 relative z-20">
        <div className="flex w-max gap-12 whitespace-nowrap animate-ticker">
          {duplicatedTickerItems.map((item, idx) => (
            <span
              key={idx}
              className="text-white/85 text-sm font-semibold flex items-center gap-2 tracking-wide"
            >
              <span className="text-gold">✚</span> {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
