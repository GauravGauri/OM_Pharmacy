import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

const Tips = () => {
  const tipsData = [
    {
      img: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&q=80&auto=format&fit=crop',
      cat: 'Medicine Safety',
      title: 'How to Store Your Medicines Correctly at Home',
      desc: 'Improper storage can reduce the effectiveness of medicines. Learn the right temperatures and conditions for your prescriptions.',
      readTime: '3 min read',
      link: '#',
    },
    {
      img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80&auto=format&fit=crop',
      cat: 'Nutrition',
      title: 'Top 10 Foods That Naturally Boost Your Immunity',
      desc: 'Strengthen your immune system with these readily available, affordable foods recommended by our health experts.',
      readTime: '4 min read',
      link: '#',
    },
    {
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&auto=format&fit=crop',
      cat: 'Diabetes Management',
      title: 'Managing Blood Sugar: Habits That Make a Difference',
      desc: 'Simple lifestyle changes and medication adherence tips from our certified pharmacists for diabetic patients.',
      readTime: '5 min read',
      link: '#',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="tips"
      className="relative py-20 bg-gradient-to-br from-[#e8f5f0] to-[#cfeada] overflow-hidden"
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
            Stay Healthy
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-dark leading-tight mb-4">
            Health <span className="text-green-primary">Tips & Wellness</span>
          </h2>
          <p className="text-gray text-base leading-relaxed">
            Expert advice from our pharmacists to help you and your family live healthier,
            happier lives.
          </p>
        </motion.div>

        {/* Tips Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tipsData.map((tip, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl overflow-hidden shadow-lg shadow-green-primary/5 hover:shadow-2xl hover:shadow-green-primary/10 transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={tip.img}
                  alt={tip.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-green-primary text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  {tip.cat}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-8 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-dark mb-3 leading-snug group-hover:text-green-primary transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed mb-6">
                    {tip.desc}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="border-t border-green-primary/10 pt-4 flex items-center justify-between">
                  <span className="text-xs text-gray/70 flex items-center gap-1.5 font-medium">
                    <Clock className="w-4 h-4 text-green-light" />
                    {tip.readTime}
                  </span>
                  <a
                    href={tip.link}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-green-primary group-hover:text-green-light transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tips;
