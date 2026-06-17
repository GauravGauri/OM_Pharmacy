import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Baby, Activity, Leaf, Eye, PawPrint, Syringe, Plus } from 'lucide-react';

const Lungs = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v20" />
    <path d="M16.2 8.5C18.4 9.7 20 12.2 20 15c0 3.3-2.7 6-6 6a3.9 3.9 0 0 1-2-.5" />
    <path d="M7.8 8.5C5.6 9.7 4 12.2 4 15c0 3.3 2.7 6 6 6a3.9 3.9 0 0 0 2-.5" />
    <path d="M16.2 8.5a4.5 4.5 0 0 0-8.4 0" />
  </svg>
);

const Medicines = () => {
  const medicineCategories = [
    {
      icon: <Heart className="w-10 h-10" />,
      badge: 'Cardiac',
      title: 'Cardiology Medicines',
      desc: 'Beta-blockers, statins, ACE inhibitors, antihypertensives & more.',
      bg: 'bg-emerald-500/10',
      iconColor: 'text-emerald-400',
    },
    {
      icon: <Baby className="w-10 h-10" />,
      badge: 'Paeds',
      title: 'Paediatric Care',
      desc: 'Child-safe syrups, suspensions, vitamins & ORS formulations.',
      bg: 'bg-purple-500/10',
      iconColor: 'text-purple-400',
    },
    {
      icon: <Lungs className="w-10 h-10" />,
      badge: 'Resp',
      title: 'Respiratory Care',
      desc: 'Inhalers, nebulisers, bronchodilators, antihistamines & decongestants.',
      bg: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
    },
    {
      icon: <Activity className="w-10 h-10" />,
      badge: 'Ortho',
      title: 'Orthopaedic & Pain',
      desc: 'NSAIDs, muscle relaxants, calcium supplements, gels, patches, braces & belts.',
      bg: 'bg-red-500/10',
      iconColor: 'text-red-400',
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      badge: 'Herbal',
      title: 'Ayurveda & Herbal',
      desc: 'Ashwagandha, Triphala, Chyawanprash, Brahmi & wellness supplements.',
      bg: 'bg-green-500/10',
      iconColor: 'text-green-400',
    },
    {
      icon: <Eye className="w-10 h-10" />,
      badge: 'Ophthal',
      title: 'Eye & ENT Care',
      desc: 'Eye drops, ear drops, nasal sprays, contact lens solutions.',
      bg: 'bg-amber-500/10',
      iconColor: 'text-amber-400',
    },
    {
      icon: <PawPrint className="w-10 h-10" />,
      badge: 'Veterinary',
      title: 'Veterinary Medicines',
      desc: 'Animal medicines, vaccines, Anti-rabies vaccines & feed supplements.',
      bg: 'bg-pink-500/10',
      iconColor: 'text-pink-400',
    },
    {
      icon: <Syringe className="w-10 h-10" />,
      badge: 'Diagnostic & Surgical',
      title: 'Diagnostic & Surgical',
      desc: 'Glucose meters, pregnancy kits, pulse oximeters, thermometers, bandages, IV Fluids & other surgical items.',
      bg: 'bg-gray/20',
      iconColor: 'text-white/80',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id="products"
      className="relative py-20 bg-gradient-to-br from-[#031c15] to-[#0c4d3a] overflow-hidden"
    >
      {/* Decorative vector background */}
      <div className="absolute inset-0 pointer-events-none opacity-5 overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] border border-white rounded-full animate-float-1" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] border border-white rounded-full animate-float-2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7dddbc] mb-3">
            Medicine Categories
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            What's In <span className="bg-gradient-to-r from-[#7dddbc] to-gold bg-clip-text text-transparent">Our Pharmacy</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            We stock thousands of medicines across all therapeutic categories. If we don't
            have it, we'll source it within 24 hours.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {medicineCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Icon wrapper */}
                <div className={`w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center ${cat.iconColor} mb-6 relative overflow-hidden transition-all duration-300 group-hover:scale-105`}>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {cat.icon}
                  <span className="absolute bottom-1 right-2 text-[9px] uppercase tracking-wider font-bold opacity-60">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {cat.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                  {cat.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest font-bold">
                  In Stock <span className="text-[#7dddbc] block text-[9px]">Always</span>
                </span>
                <button
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10 hover:bg-green-light hover:border-green-light hover:scale-105 transition-all duration-300"
                  aria-label="Add or consult category"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Medicines;
