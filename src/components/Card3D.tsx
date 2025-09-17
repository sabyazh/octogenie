import React, { useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Bot } from 'lucide-react';

const Card3D = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();

  const handleHover = (hovering: boolean) => {
    setIsPaused(hovering);
    if (hovering) {
      controls.stop();
    } else {
      controls.start("rotate");
    }
  };

  return (
    <div className="card-wrapper perspective-1000 p-4">
      <motion.div
        className="card w-[300px] h-[400px] relative cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        initial="initial"
        animate={controls}
        variants={{
          initial: { rotateY: 0 },
          rotate: {
            rotateY: 360,
            transition: {
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }
          }
        }}
        onHoverStart={() => handleHover(true)}
        onHoverEnd={() => handleHover(false)}
        whileHover={{ scale: 1.02 }}
      >
        {/* Front face */}
        <div 
          className="card-front absolute inset-0 backface-hidden bg-gradient-to-br 
            from-blue-500 to-purple-600 rounded-xl p-6 flex flex-col items-center 
            justify-center text-white shadow-[0_8px_32px_rgba(31,41,55,0.2)]
            border border-white/10"
        >
          <div className="mb-6 p-4 bg-white/10 rounded-full">
            <Bot className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
          <p className="text-center text-white/80">
            Transform your business with cutting-edge artificial intelligence
          </p>
        </div>

        {/* Back face */}
        <div 
          className="card-back absolute inset-0 backface-hidden bg-gradient-to-br 
            from-purple-600 to-blue-500 rounded-xl p-6 flex flex-col items-center 
            justify-center text-white shadow-[0_8px_32px_rgba(31,41,55,0.2)]
            border border-white/10"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <ul className="space-y-4 text-center">
            <li className="border-b border-white/10 pb-2">Machine Learning</li>
            <li className="border-b border-white/10 pb-2">Natural Language Processing</li>
            <li className="border-b border-white/10 pb-2">Computer Vision</li>
            <li>Predictive Analytics</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Card3D;