import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Brain, Zap, Target, Rocket, Users } from 'lucide-react';

interface ApproachStepProps {
  number: number;
  title: string;
  description: string;
  index: number;
}

const ApproachStep: React.FC<ApproachStepProps> = ({ number, title, description, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const springConfig = { stiffness: 150, damping: 15 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const icons = [Brain, Zap, Target, Rocket, Users];
  const Icon = icons[index];

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      className="relative group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8
          border border-white/10 hover:border-blue-500/30 transition-all duration-300
          hover:shadow-[0_8px_32px_rgba(96,165,250,0.2)] relative overflow-hidden"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d"
        }}
      >
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <motion.div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20
                flex items-center justify-center border border-blue-500/20 relative overflow-hidden"
              animate={{
                rotateZ: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <Icon className="w-8 h-8 text-blue-400" />
            </motion.div>
          </div>
          <motion.div style={{ transform: "translateZ(20px)" }}>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 
              transition-colors">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
          </motion.div>
        </div>
        
        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5
            rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(147,51,234,0.05))",
              "linear-gradient(225deg, rgba(147,51,234,0.05), rgba(59,130,246,0.05))",
              "linear-gradient(315deg, rgba(59,130,246,0.05), rgba(147,51,234,0.05))"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ApproachStep