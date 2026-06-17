import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppFab = () => {
  return (
    <motion.a
      href="https://wa.me/919997103864"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-14 h-14 bg-[#25d366] text-white rounded-full shadow-2xl shadow-[#25d366]/40 cursor-pointer hover:bg-[#20ba5a] transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.15, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulsing ring behind the button */}
      <span className="absolute inset-0 w-full h-full rounded-full bg-[#25d366]/30 animate-ping pointer-events-none" />
      <svg
        className="w-8 h-8 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.498 1.456 5.421 1.458 5.404 0 9.8-4.386 9.803-9.771.002-2.607-1.012-5.059-2.859-6.91C17.167 2.08 14.72 1.066 12.11 1.066c-5.398 0-9.794 4.386-9.797 9.773-.001 1.892.493 3.74 1.431 5.37l-.982 3.582 3.676-.963zm10.748-7.71c-.295-.147-1.748-.862-2.019-.96-.272-.099-.47-.147-.668.147-.197.295-.765.96-.938 1.157-.173.197-.346.223-.64.076-.295-.147-1.248-.46-2.378-1.467-.88-.785-1.474-1.754-1.648-2.05-.173-.295-.018-.454.129-.601.133-.133.295-.346.444-.519.148-.173.197-.295.295-.494.099-.197.05-.371-.025-.519-.074-.148-.668-1.609-.914-2.203-.242-.581-.487-.502-.668-.511-.173-.008-.371-.01-.569-.01-.197 0-.519.074-.791.371-.272.296-1.039 1.014-1.039 2.471 0 1.458 1.063 2.868 1.211 3.066.148.197 2.092 3.194 5.069 4.479.708.306 1.26.489 1.691.626.711.226 1.359.194 1.871.118.571-.085 1.748-.713 1.995-1.402.247-.689.247-1.28.173-1.402-.073-.123-.271-.197-.568-.345z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppFab;
