import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UserCheck, ShieldCheck, HeartPulse, Award, Star } from 'lucide-react';

const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, to, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
};

const TrustStats = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-[#e3f2ec] to-[#cce7dd]">
      {/* Decorative patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden z-0">
        <svg className="absolute w-[200px] h-[200px] -top-10 -left-10 text-green-light" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
        </svg>
        <svg className="absolute w-[180px] h-[180px] -bottom-10 -right-10 text-green-primary" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Card 1: Experienced Pharmacists */}
          <motion.div
            variants={cardVariants}
            className="bg-white/85 backdrop-blur-md border border-white/50 rounded-2xl p-6 text-center shadow-lg shadow-green-primary/5 hover:scale-105 hover:shadow-xl hover:border-green-light/40 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-pale flex items-center justify-center text-green-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
              <UserCheck className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-green-primary mb-1">
              Experienced
            </h3>
            <p className="text-xs text-green-light font-extrabold uppercase tracking-widest mb-2">
              & Qualified
            </p>
            <p className="text-sm text-gray font-medium">Pharmacists Available</p>
          </motion.div>

          {/* Card 2: Medicines Count */}
          <motion.div
            variants={cardVariants}
            className="bg-white/85 backdrop-blur-md border border-white/50 rounded-2xl p-6 text-center shadow-lg shadow-green-primary/5 hover:scale-105 hover:shadow-xl hover:border-green-light/40 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-pale flex items-center justify-center text-green-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
              <HeartPulse className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-3xl font-black text-green-primary mb-1">
              <CountUp to={5000} duration={1.8} />+
            </h3>
            <p className="text-xs text-green-light font-extrabold uppercase tracking-widest mb-2">
              Medicines
            </p>
            <p className="text-sm text-gray font-medium">In-Store Stock</p>
          </motion.div>

          {/* Card 3: Ratings */}
          <motion.div
            variants={cardVariants}
            className="bg-white/85 backdrop-blur-md border border-white/50 rounded-2xl p-6 text-center shadow-lg shadow-green-primary/5 hover:scale-105 hover:shadow-xl hover:border-green-light/40 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-pale flex items-center justify-center text-green-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
              <Star className="w-7 h-7 fill-gold stroke-gold" />
            </div>
            <h3 className="font-serif text-3xl font-black text-green-primary mb-1">
              4.9
            </h3>
            <p className="text-xs text-green-light font-extrabold uppercase tracking-widest mb-2">
              Average Rating
            </p>
            <p className="text-sm text-gray font-medium">From 200+ Reviews</p>
          </motion.div>

          {/* Card 4: Certification */}
          <motion.div
            variants={cardVariants}
            className="bg-white/85 backdrop-blur-md border border-white/50 rounded-2xl p-6 text-center shadow-lg shadow-green-primary/5 hover:scale-105 hover:shadow-xl hover:border-green-light/40 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-pale flex items-center justify-center text-green-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-black text-green-primary mb-1">
              DLCA
            </h3>
            <p className="text-xs text-green-light font-extrabold uppercase tracking-widest mb-2">
              Certified
            </p>
            <p className="text-sm text-gray font-medium">Licensed Pharmacy</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStats;
