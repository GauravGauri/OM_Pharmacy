import React, { useState } from 'react';
import { ChevronRight, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-[#031c15] text-white pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col items-start text-left">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden border border-white/10 shadow-md">
                <img
                  src="/assets/Logo.png"
                  alt="OM Pharmacy Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-black tracking-wide text-white">
                  OM
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/40">
                  Pharmacy
                </span>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted health partner for over the years. Quality medicines, expert
              advice, and genuine care — because your health matters most.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-light hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/919997103864"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-light hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.498 1.456 5.421 1.458 5.404 0 9.8-4.386 9.803-9.771.002-2.607-1.012-5.059-2.859-6.91C17.167 2.08 14.72 1.066 12.11 1.066c-5.398 0-9.794 4.386-9.797 9.773-.001 1.892.493 3.74 1.431 5.37l-.982 3.582 3.676-.963zm10.748-7.71c-.295-.147-1.748-.862-2.019-.96-.272-.099-.47-.147-.668.147-.197.295-.765.96-.938 1.157-.173.197-.346.223-.64.076-.295-.147-1.248-.46-2.378-1.467-.88-.785-1.474-1.754-1.648-2.05-.173-.295-.018-.454.129-.601.133-.133.295-.346.444-.519.148-.173.197-.295.295-.494.099-.197.05-.371-.025-.519-.074-.148-.668-1.609-.914-2.203-.242-.581-.487-.502-.668-.511-.173-.008-.371-.01-.569-.01-.197 0-.519.074-.791.371-.272.296-1.039 1.014-1.039 2.471 0 1.458 1.063 2.868 1.211 3.066.148.197 2.092 3.194 5.069 4.479.708.306 1.26.489 1.691.626.711.226 1.359.194 1.871.118.571-.085 1.748-.713 1.995-1.402.247-.689.247-1.28.173-1.402-.073-.123-.271-.197-.568-.345z" />
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:iamag.ntt@gmail.com"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-light hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm.406.33l4.971 4.027 4.971-4.027 4.978 4.026h-19.902l4.982-4.026zm5.371 4.351l-10.4-8.423h20.8l-10.4 8.423zm5.377-4.681l4.623-3.746v9.458l-4.623-5.712z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-light hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Medicines', href: '#products' },
                { name: 'Health Tips', href: '#tips' },
                { name: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group text-white/60 hover:text-green-light text-sm flex items-center gap-1 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-green-primary transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                'Prescription Dispensing',
                'Free Consultation',
                'Home Delivery',
                'Blood Sugar Check',
                'Vaccinations',
                'Ayurvedic Products',
              ].map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="group text-white/60 hover:text-green-light text-sm flex items-center gap-1 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-green-primary transition-transform group-hover:translate-x-1" />
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-4">
              Subscribe for health tips, medicine alerts, and exclusive offers.
            </p>
            
            <form onSubmit={handleSubscribe} className="w-full mb-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-green-light focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-green-primary hover:bg-green-light text-white text-sm font-bold shadow-md transition-all duration-300 whitespace-nowrap active:scale-[0.98]"
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>
            </form>

            <div className="border-t border-white/10 pt-4 w-full text-left">
              <strong className="text-xs text-white/40 uppercase tracking-widest font-bold block mb-1">
                Emergency? Call Us:
              </strong>
              <a
                href="tel:+919997103864"
                className="text-lg font-black text-white hover:text-green-light flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-green-light" />
                +91 9997103864
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 font-medium">
          <span>© 2026 OM Pharmacy. All rights reserved.</span>
          <span className="text-base font-extrabold flex items-center gap-2 text-white/90">
            सर्वे सन्तु निरामयाः
            <Heart className="w-4 h-4 fill-green-light stroke-green-light animate-pulse" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
