import React from 'react';
import { motion } from 'framer-motion';

interface IndustryCardProps {
  name: string;
  description: string;
  image: string;
  index: number;
  total: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ 
  name, 
  description,
  image,
  index, 
  total 
}) => {
  // Calculate the angle for each card based on its index
  const angle = (360 / total) * index;
  const radius = 400; // Increased radius for better spacing

  return (
    <motion.div
      className="absolute left-1/2 w-[280px] sm:w-[320px] -translate-x-1/2"
      style={{
        transformStyle: "preserve-3d",
        transform: `rotateY(${angle}deg) translateZ(${radius}px) translateY(-50px)`,
      }}
      initial={false}
    >
      <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 sm:p-8 rounded-xl sm:rounded-2xl 
        backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)]
        hover:shadow-[0_8px_32px_rgba(96,165,250,0.3)] transition-all duration-500 overflow-hidden">
        <div className="relative aspect-square -mx-8 -mt-8 mb-6">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{name}</h3>
        <p className="text-gray-400 text-sm sm:text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default IndustryCard;