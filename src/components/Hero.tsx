import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onContactClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const scrollToApproach = () => {
    const element = document.getElementById('approach');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* AI-themed animated background */}
      <div className="absolute inset-0">
        {/* Pure AI/ML Mathematical Formulas */}
        {[...Array(40)].map((_, i) => {
          const symbols = [
            '∇', 'Σ', '⊗', 'λ', '∏', '∫', '∂',
            'θ', 'σ', 'π', '∆', '∞', 'μ', '∝',
            '⊕', '⊆', '∈', '∀', '∃', 'ω', '∇²',
            '⟶', '↦', '⇒', '⇔', '≈', '≠', '≤',
            '∥', '⊥', '∧', '∨', '¬', '∩', '∪'
          ];
          const symbol = symbols[Math.floor(Math.random() * symbols.length)];
          return (
          <motion.div
            key={i}
            className="absolute text-blue-500/20 font-mono flex items-center justify-center select-none"
            style={{
              fontSize: `${Math.random() * 30 + 15}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              repeatType: "mirror",
            }}
          >{symbol}</motion.div>
          );
        })}
        
        {/* Matrix and Vector Operations */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`formula-${i}`}
            className="absolute font-mono text-xs text-blue-500/40 select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.95, 1.05, 0.95], 
              x: [0, Math.random() * 15 - 7.5],
              y: [0, Math.random() * 15 - 7.5],
              rotate: [-5, 5],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          >
            <div className="text-center">
              {Math.random() > 0.5 ? (
                <>
                  W<sub>ij</sub>x<sub>j</sub> + b<sub>i</sub><br />
                  ∂E/∂w = δ<sub>j</sub>x<sub>i</sub>
                </>
              ) : (
                <>
                  σ(z) = 1/(1+e<sup>-z</sup>)<br />
                  ∥w∥² + λ∑x<sub>i</sub>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            className="inline-block mb-8"
          >
            <img 
              src="https://i.postimg.cc/YSPYg6Bj/Animation-1742051722952.gif"
              alt="AI Animation"
              className="h-24 w-24 mx-auto"
            />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100 
              }}
              className="block"
            >
              Intelligent Automation
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 100 
              }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 
                [text-shadow:0_0_30px_rgba(96,165,250,0.2)]"
            >
              for Every Industry
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: "easeOut"
            }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Transform your business with OctoGenie's AI-powered automation solutions.
            From legal to retail, we're revolutionizing how industries operate.
          </motion.p>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { 
                opacity: 0,
                y: 20
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={onContactClick}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
                px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 
                shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] touch-manipulation"
            >
              Schedule a Demo
            </button>
            <button 
              onClick={scrollToApproach}
              className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full text-lg font-semibold 
                backdrop-blur-sm transition-all duration-200 active:scale-[0.98] touch-manipulation
                border border-white/10 hover:border-white/20"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/30 rounded-full mt-2" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;