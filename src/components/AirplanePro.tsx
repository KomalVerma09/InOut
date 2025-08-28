// AirplanePro.tsx
import React from "react";
import { motion } from "framer-motion";

type Props = {
  className?: string;
};

const AirplanePro: React.FC<Props> = ({ className = "w-20 h-20 md:w-32 md:h-32 rotate-[-45deg]" }) => {
  return (
    <motion.svg
      viewBox="0 0 160 160"
      className={className}
      // remove framer-motion rotation overrides
      initial={false}
      animate={{}}
      transition={{}}
    >
      <defs>
        <linearGradient id="fuselage" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E6E9EF" />
          <stop offset="45%" stopColor="#BFC7D4" />
          <stop offset="100%" stopColor="#8C96A9" />
        </linearGradient>
        <linearGradient id="wing" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9AA6BC" />
          <stop offset="100%" stopColor="#6E7A91" />
        </linearGradient>
        <radialGradient id="glass" cx="50%" cy="45%" r="70%">
          <stop offset="0%" stopColor="#BEE3FF" />
          <stop offset="100%" stopColor="#4A6B8F" />
        </radialGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* fuselage */}
      <g filter="url(#softGlow)">
        <path
          d="M20 80 C 45 60, 95 55, 135 70 L 145 74 L 135 78 C 95 93, 45 100, 20 80 Z"
          fill="url(#fuselage)"
        />
        {/* nose */}
        <path d="M135 70 Q 152 77 135 84 Z" fill="#C7CEDB" />
        {/* cockpit */}
        <ellipse cx="110" cy="74" rx="10" ry="6" fill="url(#glass)" opacity="0.9" />
        {/* main wing */}
        <path d="M65 70 L 38 52 L 22 58 L 50 82 Z" fill="url(#wing)" />
        {/* tail wing */}
        <path d="M52 86 L 36 100 L 28 98 L 44 82 Z" fill="url(#wing)" />
      </g>
      <motion.g
        initial={{ scale: 0.6, opacity: 0.7 }}
        animate={{ scale: [0.6, 1, 0.8], opacity: [0.7, 1, 0.5] }}
        transition={{ duration: 0.3, repeat: Infinity }}
      >
        <path
          d="M20 78 Q 5 80 20 82 Z"
          fill="orange"
          opacity="0.8"
        />
        <path
          d="M20 78 Q 0 80 20 84 Z"
          fill="red"
          opacity="0.6"
        />
      </motion.g>
    </motion.svg>
  );
};

export default AirplanePro;
