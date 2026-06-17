import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Snowflake, MessageSquarePlus } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-[#dcefe6] to-[#bfe2d3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
        >
          {/* Images Left Column */}
          <motion.div variants={slideLeft} className="relative h-[380px] sm:h-[480px] md:h-[520px]">
            {/* Main Image */}
            <div className="absolute top-0 left-0 w-[72%] h-[82%] rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-green-primary/10">
              <img
                src="/assets/Amn.png"
                alt="Inside OM Pharmacy shelves and stock"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Secondary Overlapping Image */}
            <div className="absolute bottom-0 right-0 w-[52%] h-[52%] rounded-2xl overflow-hidden border-[6px] border-white shadow-2xl shadow-green-primary/15">
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=700&q=80&auto=format&fit=crop"
                alt="Pharmacist consulting medicine bottles"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Text Right Column */}
          <motion.div variants={slideRight} className="flex flex-col text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-light mb-3">
              <span className="w-6 h-[2px] bg-green-light block" />
              About Us
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-dark leading-tight mb-6">
              Your Community <br />
              <span className="text-green-primary">Pharmacy Partner</span>
            </h2>

            <p className="text-gray text-base sm:text-lg leading-relaxed mb-8">
              OM Pharmacy has been serving the community with integrity and compassion
              for over the years. We combine pharmaceutical expertise with a personal touch —
              because every patient deserves to be treated like family.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-4">
              {/* Feature 1 */}
              <motion.div
                variants={itemFade}
                className="flex items-start gap-4 p-4 rounded-2xl border border-green-primary/10 bg-white/40 hover:bg-white/60 hover:border-green-light/45 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-green-pale flex items-center justify-center text-green-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col leading-tight">
                  <strong className="text-sm sm:text-base font-bold text-dark mb-1">
                    Licensed & Certified
                  </strong>
                  <span className="text-xs sm:text-sm text-gray leading-normal">
                    All our pharmacists are fully licensed with years of clinical training.
                  </span>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                variants={itemFade}
                className="flex items-start gap-4 p-4 rounded-2xl border border-green-primary/10 bg-white/40 hover:bg-white/60 hover:border-green-light/45 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-green-pale flex items-center justify-center text-green-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Snowflake className="w-5 h-5" />
                </div>
                <div className="flex flex-col leading-tight">
                  <strong className="text-sm sm:text-base font-bold text-dark mb-1">
                    Cold-Chain Storage
                  </strong>
                  <span className="text-xs sm:text-sm text-gray leading-normal">
                    Vaccines and sensitive medicines stored in temperature-controlled conditions.
                  </span>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                variants={itemFade}
                className="flex items-start gap-4 p-4 rounded-2xl border border-green-primary/10 bg-white/40 hover:bg-white/60 hover:border-green-light/45 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-green-pale flex items-center justify-center text-green-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <MessageSquarePlus className="w-5 h-5" />
                </div>
                <div className="flex flex-col leading-tight">
                  <strong className="text-sm sm:text-base font-bold text-dark mb-1">
                    Free Consultation
                  </strong>
                  <span className="text-xs sm:text-sm text-gray leading-normal">
                    Speak to our in-store pharmacist anytime — no appointment needed.
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
