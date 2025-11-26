import React from 'react';
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import Hero from './components/Hero';
import TeamMember from './components/TeamMember';
import IndustryCard from './components/IndustryCard';
import ApproachStep from './components/ApproachStep';
import ContactModal from './components/ContactModal';
import { motion, useAnimationControls, useScroll, useTransform } from 'framer-motion';

function App() {
  const [rotation, setRotation] = React.useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const controls = useAnimationControls();
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const industries = [
    { 
      name: 'Legal', 
      description: 'Streamlining legal processes and documentation with AI-powered contract analysis and automated compliance monitoring.',
      image: 'https://i.ibb.co/XrfjD6Z6/legal.jpg'
    },
    { 
      name: 'Customer Experience', 
      description: 'Enhanced customer interaction automation with intelligent chatbots and predictive support systems.',
      image: 'https://i.ibb.co/Xxy48YBh/customersupport.jpg'
    },
    { 
      name: 'Education', 
      description: 'Revolutionary learning management systems with personalized AI tutoring and adaptive learning paths.',
      image: 'https://i.ibb.co/gbMXnTJ5/education.jpg'
    },
    { 
      name: 'Automobile', 
      description: 'Smart automotive solutions integrating AI for predictive maintenance and autonomous systems.',
      image: 'https://i.ibb.co/N2rRtVHb/automobile.jpg'
    },
    { 
      name: 'Retail', 
      description: 'Intelligent retail automation with inventory optimization and personalized shopping experiences.',
      image: 'https://i.ibb.co/8Dqngr1D/retail.jpg'
    },
    { 
      name: 'And More', 
      description: 'Expanding to various industries with customized AI solutions for unique business challenges.',
      image: 'https://i.ibb.co/9mnM2vHk/future.jpg'
    },
  ];

  React.useEffect(() => {
    // Start automatic rotation
    const interval = setInterval(() => {
      setRotation(prev => (prev + 60) % 360);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRotate = (direction: 'left' | 'right') => {
    const newRotation = direction === 'left' 
      ? rotation - 60
      : rotation + 60;
    
    setRotation(newRotation);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.nav 
        className="fixed w-full backdrop-blur-md z-50"
        style={{ backgroundColor: headerBg }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="https://i.postimg.cc/mrDc2tqj/3dgifmaker09870.gif" 
                alt="OctoGenie" 
                className="h-12" 
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                OCTOGENIE
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('industries')}
                className="hover:text-blue-400 transition-colors relative group"
              >
                Industries
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
              </button>
              <button 
                onClick={() => scrollToSection('approach')}
                className="hover:text-blue-400 transition-colors relative group"
              >
                Our Approach
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="hover:text-blue-400 transition-colors relative group"
              >
                Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-blue-400 transition-colors relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
              </button>
            </div>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
                px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2
                transition-all duration-200 shadow-lg hover:shadow-blue-500/25
                text-sm sm:text-base font-semibold active:scale-[0.98]
                touch-manipulation"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      <Hero onContactClick={() => setIsContactModalOpen(true)} />

      <section id="industries" className="container mx-auto px-4 sm:px-6 py-24 mb-24">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4"
          >
            Industries We Transform
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base mb-4">
            Leveraging cutting-edge AI technology to revolutionize operations across diverse sectors
          </p>
          <p className="text-blue-400 max-w-3xl mx-auto text-sm sm:text-base font-medium">
            Our current focus is to transform the fragmented and manual legal industry into a data-driven, intelligent, and highly efficient ecosystem.
          </p>
        </div>

        <div className="hidden sm:block">
          <div className="relative h-[800px] perspective-2000 mb-32 overflow-hidden">
            <div 
              className="absolute inset-0 transition-transform duration-1000 ease-in-out"
              style={{ 
                transform: `rotateY(${rotation}deg)`,
                transformStyle: 'preserve-3d',
                top: '50%',
                transform: `rotateY(${rotation}deg) translateY(-40%)`
              }}
            >
              {industries.map((industry, index) => (
                <IndustryCard 
                  key={index} 
                  {...industry} 
                  index={index}
                  total={industries.length}
                />
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-8">
              <button
                onClick={() => handleRotate('left')}
                className="bg-white/10 p-3 sm:p-4 rounded-full hover:bg-white/20 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={() => handleRotate('right')}
                className="bg-white/10 p-3 sm:p-4 rounded-full hover:bg-white/20 transition-colors"
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6">
        <div className="sm:hidden grid grid-cols-1 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 rounded-xl
              backdrop-blur-lg border border-white/10 shadow-lg overflow-hidden">
              <div className="relative h-40 -mx-6 -mt-6 mb-6">
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
              <p className="text-gray-400 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="approach" className="container mx-auto px-4 sm:px-6 py-24">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Our Approach
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A systematic methodology to transform your business through AI-powered automation
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          <ApproachStep
            number={1}
            title="EVALUATING THE JOURNEY"
            description="OctoGenie focuses on evaluating the complete journey of the industry/business type to identify pain points and opportunities impacting the efficiency, by conducting deeper discussions with all the audience that involves customers, professionals, enterprises and future professionals. OctoGenie's mission is to bring affordable, efficient, and accessible tech solutions/automation to a diverse audience."
            index={0}
          />
          <ApproachStep
            number={2}
            title="ELIMINATING THE INEFFICIENCIES"
            description="OctoGenie focuses to eliminate manual effort inefficiencies, redundant processes, & outdated strategies. During this stage, OctoGenie critically analyzes new strategies and drops those that are not practical, scalable, or profitable for implementation & execution."
            index={1}
          />
          <ApproachStep
            number={3}
            title="OPTIMISING THE SOLUTIONS"
            description="OctoGenie optimises for refining & enhancing solutions through products, processes. The objective is to make sure that the solutions are not only functional but also highly efficient & user-friendly. Focus groups are conducted with target audience on multiple solutions to get their buy-in."
            index={2}
          />
          <ApproachStep
            number={4}
            title="BUILD PRODUCTS WITH AGILITY"
            description="OctoGenie fosters innovation, encourages quick decision-making, & builds product to navigate uncertainties & seize new solutions. At this stage, a strategic roadmap is established, ensuring a balance between agility & efficiency."
            index={3}
          />
          <ApproachStep
            number={5}
            title="DRIVE PRODUCT ADOPTION"
            description="Drive product usage through strategic engagement. Gather valuable feedback to understand user needs. Continuously refine and enhance the product for better performance and experience."
            index={4}
          />
        </div>
      </section>

      <section id="team" className="container mx-auto px-4 sm:px-6 py-24">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              rotateX: [0, 360],
              rotateY: [0, 360]
            }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 100
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Meet Our Team
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Led by industry veterans with decades of combined experience in AI, technology, and business transformation
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-blue-400">Leadership Team</h3>
          <div className="flex justify-center perspective-1000">
            <TeamMember
              name="Nanda Gopal V"
              role="Founder and CEO"
              description="A visionary e-commerce leader with 27 years of global experience and a Master's in English Literature. Transformed from Customer Service Executive to CEO, consistently championing customer-first approaches."
              index={0}
            />
          </div>
        </div>

      </section>

      <section id="contact" className="container mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Future?</h2>
            <p className="text-xl text-gray-200 mb-8">Join the AI revolution with OctoGenie and transform your business operations</p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <footer className="border-t border-gray-800/50 bg-gradient-to-b from-gray-900/50 to-black backdrop-blur-sm">
        <div className="container mx-auto px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            <div className="space-y-8">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="https://i.postimg.cc/mrDc2tqj/3dgifmaker09870.gif" 
                  alt="OctoGenie" 
                  className="h-10 w-10" 
                />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  OCTOGENIE
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering industries through intelligent automation. Transforming businesses with cutting-edge AI solutions.
              </p>
              <address className="text-gray-400 not-italic space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 mt-1 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                    flex items-center justify-center border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>
                  <div>
                    Anik & Associates<br />
                    No.39/2, 2nd Floor, K. G. Road<br />
                    Bangalore North, Karnataka<br />
                    India, 560009
                  </div>
                </div>
              </address>
              <div>
                <a 
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 
                    transition-colors group cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                    flex items-center justify-center border border-white/10 group-hover:border-blue-500/30 
                    transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>
                  support@octogenie.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">Solutions</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a 
                    onClick={() => scrollToSection('industries')} 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <div className="w-1 h-1 rounded-full bg-gray-600" />
                    Legal Tech Solutions
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('industries')} 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <div className="w-1 h-1 rounded-full bg-gray-600" />
                    Customer Experience
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('industries')} 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <div className="w-1 h-1 rounded-full bg-gray-600" />
                    Education Technology
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('industries')} 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <div className="w-1 h-1 rounded-full bg-gray-600" />
                    Automotive AI
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a 
                    onClick={() => scrollToSection('team')} 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <div className="w-1 h-1 rounded-full bg-gray-600" />
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => setIsContactModalOpen(true)}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <div className="w-1 h-1 rounded-full bg-gray-600" />
                    Careers
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('contact')} 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <div className="w-1 h-1 rounded-full bg-gray-600" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">Connect</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a 
                    onClick={() => setIsContactModalOpen(true)}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                      flex items-center justify-center border border-white/10 group-hover:border-blue-500/30 
                      transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                    Email Us
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/octogenie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                      flex items-center justify-center border border-white/10 group-hover:border-blue-500/30 
                      transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800/50 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} OctoGenie. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;