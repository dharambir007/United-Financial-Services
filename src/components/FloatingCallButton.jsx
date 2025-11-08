import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * A floating call button with a pulse animation.
 * @param {object} props
 * @param {string} props.phoneNumber - The phone number to dial (e.g., "+919888124060").
 */
const FloatingCallButton = ({ phoneNumber }) => {
  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      aria-label="Call us now"
      className="fixed z-50 flex items-center justify-center w-16 h-16 text-white transition-all duration-300 rounded-full shadow-xl bottom-6 right-6 bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 hover:shadow-2xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      >
        <Phone size={28} />
      </motion.div>
    </motion.a>
  );
};

export default FloatingCallButton;
