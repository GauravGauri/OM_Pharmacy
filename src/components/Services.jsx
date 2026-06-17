import React from 'react';
import { motion } from 'framer-motion';
import { Pill, HeartHandshake, Activity, PawPrint, Truck, Leaf, ArrowRight } from 'lucide-react';

const Services = () => {
  const servicesData = [
    {
      num: '01',
      icon: <Pill className="w-8 h-8" />,
      title: 'Prescription Dispensing',
      desc: 'Accurate and fast dispensing of all doctor-prescribed medicines. Our pharmacists verify every prescription with care to ensure your safety.',
      link: '#contact',
    },
    {
      num: '02',
      icon: <HeartHandshake className="w-8 h-8" />,
      title: 'Free Pharmacist Consultation',
      desc: 'Get expert guidance on medicine usage, side effects, interactions, and dosage — completely free, in-store or over the phone.',
      link: '#contact',
    },
    {
      num: '03',
      icon: <Activity className="w-8 h-8" />,
      title: 'Blood Pressure & Sugar Check',
      desc: 'Regular monitoring of blood pressure, blood glucose, and SpO₂ at our in-store health corner — quick, accurate, no appointment needed.',
      link: '#contact',
    },
    {
      num: '04',
      icon: <PawPrint className="w-8 h-8" />,
      title: 'Veterinary Care & Vaccines',
      desc: 'Dog, cat, cattle & other animal medicines, vaccines, Anti-rabies vaccines & feed supplements.',
      link: '#contact',
    },
    {
      num: '05',
      icon: <Truck className="w-8 h-8" />,
      title: 'Home Medicine Delivery',
      desc: 'Get your medicines delivered to your doorstep quickly. Just share your prescription via WhatsApp and we handle the rest.',
      link: '#contact',
    },
    {
      num: '06',
      icon: <Leaf className="w-8 h-8" />,
      title: 'Ayurveda & Cosmetics',
      desc: 'A curated range of ayurvedic, herbal, and cosmetic products sourced from trusted manufacturers for holistic wellbeing.',
      link: '#contact',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-br from-[#e3f2ec] to-[#c7e8dc] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-green-light mb-3">
            What We Offer
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-dark leading-tight mb-4">
            Complete <span className="text-green-primary">Healthcare Services</span>
          </h2>
          <p className="text-gray text-base leading-relaxed">
            From prescription dispensing to health monitoring — we provide end-to-end
            pharmaceutical and wellness services for you and your family.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((svc, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 text-left shadow-lg shadow-green-primary/5 relative overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:shadow-green-primary/10 hover:border-green-light/30"
            >
              {/* Background badge number */}
              <div className="absolute top-4 right-6 text-6xl font-black text-green-pale/60 select-none font-serif tracking-tighter transition-colors duration-300 group-hover:text-green-pale">
                {svc.num}
              </div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-green-pale flex items-center justify-center text-green-primary mb-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed mb-6">
                  {svc.desc}
                </p>
              </div>

              <a
                href={svc.link}
                className="inline-flex items-center gap-2 text-sm font-bold text-green-primary group-hover:text-green-light transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
