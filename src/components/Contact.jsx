import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Loader2, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: 'Select a topic',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        subject: 'Select a topic',
        message: '',
      });
      // Reset back to idle after 4 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-[#eef7f3] to-[#daf0e4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col text-left"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-light mb-3">
              <span className="w-6 h-[2px] bg-green-light block" />
              Contact Us
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-dark leading-tight mb-4">
              Get In <span className="text-green-primary">Touch With Us</span>
            </h2>
            <p className="text-gray text-base leading-relaxed mb-8">
              Have a question about your medicines or need a consultation? We're always here to
              help — reach out anytime.
            </p>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Card 1: Phone */}
              <div className="flex gap-4 p-5 bg-white/70 backdrop-blur-sm border border-white rounded-2xl shadow-sm hover:shadow-md hover:border-green-light/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-green-pale flex items-center justify-center text-green-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center leading-tight">
                  <strong className="text-sm font-bold text-dark mb-1">Phone / WhatsApp</strong>
                  <a
                    href="tel:+919997103864"
                    className="text-sm text-green-primary font-semibold hover:text-green-light"
                  >
                    +91 9997103864
                  </a>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="flex gap-4 p-5 bg-white/70 backdrop-blur-sm border border-white rounded-2xl shadow-sm hover:shadow-md hover:border-green-light/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-green-pale flex items-center justify-center text-green-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center leading-tight">
                  <strong className="text-sm font-bold text-dark mb-1">Email</strong>
                  <a
                    href="mailto:iamag.ntt@gmail.com"
                    className="text-sm text-green-primary font-semibold hover:text-green-light"
                  >
                    iamag.ntt@gmail.com
                  </a>
                </div>
              </div>

              {/* Card 3: Location */}
              <div className="flex gap-4 p-5 bg-white/70 backdrop-blur-sm border border-white rounded-2xl shadow-sm hover:shadow-md hover:border-green-light/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-green-pale flex items-center justify-center text-green-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center leading-tight">
                  <strong className="text-sm font-bold text-dark mb-1">Location</strong>
                  <span className="text-sm text-gray font-medium">New Tehri, Uttarakhand</span>
                </div>
              </div>

              {/* Card 4: Working Hours */}
              <div className="flex gap-4 p-5 bg-white/70 backdrop-blur-sm border border-white rounded-2xl shadow-sm hover:shadow-md hover:border-green-light/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-green-pale flex items-center justify-center text-green-primary flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center leading-tight">
                  <strong className="text-sm font-bold text-dark mb-1">Working Hours</strong>
                  <span className="text-sm text-gray font-medium">Mon-Sun: 8 AM - 10 PM</span>
                </div>
              </div>
            </div>

            {/* Map Wrapper */}
            <div className="w-full h-64 rounded-3xl overflow-hidden shadow-lg border border-white/50 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.0831353167137!2d78.43342547473566!3d30.376997102739534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091d2eb6caecad%3A0x9d4bc533745bbd40!2sOm%20Pharmacy!5e0!3m2!1sen!2sin!4v1777871979092!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OM Pharmacy location map"
              />
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="w-full bg-white/90 backdrop-blur-md border border-white/60 p-8 sm:p-10 rounded-3xl shadow-xl text-left"
          >
            <h3 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray uppercase tracking-wider">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Rahul"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-green-primary/10 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-light focus:border-transparent text-dark"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray uppercase tracking-wider">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Sharma"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-green-primary/10 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-light focus:border-transparent text-dark"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-green-primary/10 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-light focus:border-transparent text-dark"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-green-primary/10 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-light focus:border-transparent text-dark"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray uppercase tracking-wider">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-green-primary/10 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-light focus:border-transparent text-dark appearance-none cursor-pointer"
                >
                  <option>Select a topic</option>
                  <option>Medicine Enquiry</option>
                  <option>Prescription Upload</option>
                  <option>Home Delivery</option>
                  <option>Health Consultation</option>
                  <option>Feedback / Complaint</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray uppercase tracking-wider">Your Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us how we can help you..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-green-primary/10 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-green-light focus:border-transparent text-dark resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all duration-300 ${
                  status === 'idle'
                    ? 'bg-green-primary text-white hover:bg-green-light hover:shadow-green-light/30 active:scale-[0.98]'
                    : status === 'submitting'
                    ? 'bg-[#555] text-white cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#0a9e68] to-[#12c87a] text-white shadow-[#0a9e68]/30'
                }`}
              >
                {status === 'idle' && (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
                {status === 'submitting' && (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <Check className="w-5 h-5" />
                    Message Sent! We'll call you soon.
                  </>
                )}
              </button>

              <p className="text-xs text-gray/80 leading-normal text-center pt-2">
                By contacting us you agree to our <a href="#" className="underline hover:text-green-primary">Privacy Policy</a>. We respond within 2 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
