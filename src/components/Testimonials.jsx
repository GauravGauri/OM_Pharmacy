import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonialsData = [
    {
      stars: 5,
      quote: "The pharmacist took 10 full minutes to explain my mother's cardiac medicines and potential side effects. No other pharmacy does this. Truly exceptional service.",
      author: 'Jishan Khan',
      tag: 'Regular Customer',
      avatar: 'JK',
      avatarBg: 'bg-emerald-600',
    },
    {
      stars: 5,
      quote: "I rely on OM Pharmacy for all my family's medicines. They always have everything in stock and their home delivery is super fast. The staff are always polite and helpful.",
      author: 'Himanshu Singh',
      tag: '2 Years Patient',
      avatar: 'HS',
      avatarBg: 'bg-amber-600',
    },
    {
      stars: 5,
      quote: "Got my blood sugar checked at their health corner and the pharmacist flagged a concern about my medication timing. That small advice made a huge difference to my control.",
      author: 'Gaurav Bhatt',
      tag: 'Diabetic Patient',
      avatar: 'GB',
      avatarBg: 'bg-teal-600',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-gradient-to-br from-[#022419] to-[#063c2c] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7dddbc] mb-3">
            Testimonials
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            What Our <span className="text-[#7dddbc]">Patients Say</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            Real words from real people whose lives we've touched with quality care.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, info) => {
                if (info.offset.x < -80) {
                  handleNext();
                } else if (info.offset.x > 80) {
                  handlePrev();
                }
              }}
              className="w-full max-w-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl shadow-black/20 flex flex-col items-center select-none cursor-grab active:cursor-grabbing text-center"
            >
              {/* Star Ratings */}
              <div className="flex gap-1 text-gold mb-6">
                {[...Array(currentTestimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Quote Mark */}
              <Quote className="w-12 h-12 text-[#7dddbc]/25 mb-4" />

              {/* Review Text */}
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-white/90 font-medium leading-relaxed italic mb-8 max-w-lg">
                "{currentTestimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 text-left border-t border-white/10 pt-6 w-full max-w-sm justify-center">
                <div className={`w-12 h-12 rounded-full ${currentTestimonial.avatarBg} flex items-center justify-center font-bold text-white shadow-md shadow-black/20`}>
                  {currentTestimonial.avatar}
                </div>
                <div className="flex flex-col leading-tight">
                  <strong className="text-white font-bold text-base">
                    {currentTestimonial.author}
                  </strong>
                  <span className="text-xs text-[#7dddbc] font-medium tracking-wide">
                    {currentTestimonial.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] sm:left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/75 hover:bg-[#7dddbc]/20 hover:text-white hover:border-[#7dddbc]/30 active:scale-95 transition-all duration-300 z-20"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[-20px] sm:right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/75 hover:bg-[#7dddbc]/20 hover:text-white hover:border-[#7dddbc]/30 active:scale-95 transition-all duration-300 z-20"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2.5 mt-8 relative z-20">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-[#7dddbc] w-6' : 'bg-white/20 hover:bg-white/45'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
