import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const springConfig = { stiffness: 150, damping: 15 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Floating animation values
  const floatY = useMotionValue(0);
  const floatRotate = useMotionValue(0);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      animate={{
        y: [0, -10, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        transformPerspective: "1000px"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
    >
      <div 
        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 backdrop-blur-sm
          border border-white/10 group-hover:border-blue-500/30 transition-all duration-300
          group-hover:shadow-[0_8px_32px_rgba(96,165,250,0.2)] relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 
            group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))",
              "linear-gradient(225deg, rgba(147,51,234,0.1), rgba(59,130,246,0.1))",
              "linear-gradient(315deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          style={{ transform: "translateZ(75px)" }}
          className="mb-4"
        >
          <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">{name}</h3>
          <motion.p 
            className="text-blue-400/80 font-medium text-sm"
            animate={{
              color: ["rgb(96,165,250)", "rgb(147,51,234)", "rgb(96,165,250)"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {role}
          </motion.p>
        </motion.div>
        <motion.p 
          style={{ transform: "translateZ(50px)" }}
          className="text-gray-400 text-sm leading-relaxed"
        >
          {description}
        </motion.p>
        <motion.div
          className="absolute -bottom-2 -right-2 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      <div 
        className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 pointer-events-none"
        style={{ transform: "translateZ(-75px)" }}
      />
    </motion.div>
  );
};

export default TeamMember;