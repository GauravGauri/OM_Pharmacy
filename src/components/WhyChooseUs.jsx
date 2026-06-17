import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Landmark, PhoneCall } from 'lucide-react';

const WhyChooseUs = () => {
  const whyItems = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: '100% Genuine Medicines',
      desc: 'Every medicine sourced directly from licensed manufacturers — no counterfeits, no compromises.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Open 8AM to 10PM Daily',
      desc: "We're here when you need us — 7 days a week including holidays and festivals.",
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: 'Best Price Guarantee',
      desc: 'Competitive pricing on all medicines with special discounts for senior citizens and regular patients.',
    },
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: 'Emergency Medicine Support',
      desc: 'Call us anytime for urgent medicine queries — our team is always just a phone call away.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="why"
      className="relative py-20 bg-gradient-to-br from-[#011913] to-[#074735] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#7dddbc]/10 blur-[80px] rounded-full z-0" />
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80&auto=format&fit=crop"
                alt="Health, meditation and wellness lifestyle"
                className="w-full h-auto object-cover max-h-[500px] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Column: Benefits list */}
          <div className="flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7dddbc] mb-3"
            >
              <span className="w-6 h-[2px] bg-[#7dddbc] block" />
              Why Choose OM Pharmacy
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-8"
            >
              Why Thousands Choose <span className="bg-gradient-to-r from-[#7dddbc] to-gold bg-clip-text text-transparent">Us Every Day</span>
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col gap-6"
            >
              {whyItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={slideUp}
                  className="relative group p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/10 flex gap-5"
                >
                  {/* Top Grow Line border animation */}
                  <span className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#7dddbc] to-green-light transition-all duration-500 group-hover:w-full" />

                  {/* Vertical left border animation */}
                  <span className="absolute top-0 left-0 w-[3px] h-0 bg-green-light transition-all duration-500 group-hover:h-full" />

                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-[#7dddbc]/10 text-[#7dddbc] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col text-left">
                    <h4 className="text-lg font-bold text-white mb-1 transition-colors duration-300 group-hover:text-[#7dddbc]">
                      {item.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
