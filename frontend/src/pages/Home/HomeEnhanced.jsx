import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Brain,
  Zap,
  Terminal,
  Cpu,
  Download,
  Send,
  ArrowRight,
  Briefcase
} from 'lucide-react';

// Import FigmaUI components
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Badge,
  TypingEffect,
  ImageWithFallback
} from '../../components/FigmaUI';

// Import existing components
import Container from '../../components/Layout/Container';
import { Section, SectionHeader, SectionContent } from '../../components/UI/Section';
import { ROUTES } from '../../lib/constants';

const HomeEnhanced = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { scrollY } = useScroll();

  // Enhanced parallax transforms
  const heroY = useTransform(scrollY, [0, 1000], [0, -300]);
  const heroScale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const aboutY = useTransform(scrollY, [400, 1400], [0, -200]);
  const skillsY = useTransform(scrollY, [800, 1800], [0, -150]);
  const projectsY = useTransform(scrollY, [1200, 2200], [0, -100]);

  // Smooth spring animations
  const smoothMouseX = useSpring(mousePosition.x, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mousePosition.y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const typingWords = [
    'Full-Stack Developer',
    'AI Enthusiast', 
    'Problem Solver',
    'Tech Innovator',
    'Code Artist'
  ];

  const skills = [
    { name: 'React & Next.js', level: 92, icon: Code, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js & Express', level: 88, icon: Server, color: 'from-green-400 to-emerald-500' },
    { name: 'Python & AI/ML', level: 85, icon: Brain, color: 'from-purple-400 to-pink-500' },
    { name: 'TypeScript', level: 90, icon: Terminal, color: 'from-blue-400 to-indigo-500' },
    { name: 'Database Design', level: 82, icon: Database, color: 'from-orange-400 to-red-500' },
    { name: 'Mobile Development', level: 78, icon: Smartphone, color: 'from-teal-400 to-cyan-500' },
  ];

  const projects = [
    {
      title: 'AI-Powered Learning Platform',
      description: 'Revolutionary e-learning platform with AI-driven personalized learning paths, real-time progress tracking, and interactive content delivery.',
      image: 'https://images.unsplash.com/photo-1564707944519-7a116ef3841c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjkzNTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Real-time Collaboration Suite',
      description: 'Advanced project management and collaboration platform with live editing, video conferencing, and intelligent task automation.',
      image: 'https://images.unsplash.com/photo-1689692784625-1ce82784a25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjeWJlcnB1bmslMjBuZW9ufGVufDF8fHx8MTc1Njk1OTU2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'WebRTC', 'Socket.io', 'Redis', 'Docker'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Blockchain Analytics Dashboard',
      description: 'Comprehensive cryptocurrency and DeFi analytics platform with real-time market data, portfolio tracking, and predictive analysis.',
      image: 'https://images.unsplash.com/photo-1742072594003-abf6ca86e154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzU2ODUzNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Vue.js', 'Web3.js', 'Node.js', 'MongoDB', 'Chart.js'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-x-hidden">
      {/* FigmaUI Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Enhanced Interactive Particle Background - FigmaUI Style */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles with mouse interaction */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'bg-cyan-400' : 
              i % 4 === 1 ? 'bg-emerald-400' : 
              i % 4 === 2 ? 'bg-yellow-400' : 'bg-blue-400'
            }`}
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              x: useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], 
                [Math.random() * -100, Math.random() * 100]),
              y: useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], 
                [Math.random() * -50, Math.random() * 50]),
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
        
        {/* Large interactive glows - FigmaUI Style */}
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"
          style={{
            x: useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-100, 100]),
            y: useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-50, 50]),
            left: '20%',
            top: '10%',
            scale: useTransform(useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [0.3, 0.8]), [0.3, 0.8], [1, 1.3])
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-yellow-600/20 rounded-full blur-3xl"
          style={{
            x: useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [50, -50]),
            y: useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [30, -30]),
            right: '20%',
            bottom: '10%',
            scale: useTransform(useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [0.3, 0.8]), [0.3, 0.8], [1.2, 0.9])
          }}
        />
        <motion.div 
          className="absolute w-72 h-72 bg-gradient-to-r from-purple-500/15 to-pink-600/15 rounded-full blur-3xl"
          style={{
            x: useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-30, 30]),
            y: useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-20, 20]),
            left: '50%',
            top: '50%',
            scale: useTransform(useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [0.3, 0.8]), [0.3, 0.8], [0.8, 1.4])
          }}
        />
      </div>

      {/* Highly Interactive Hero Section - FigmaUI Style */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
        {/* Interactive 3D Background */}
        <motion.div 
          style={{ 
            y: heroY, 
            scale: heroScale,
            rotateX: useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [5, -5]),
            rotateY: useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-5, 5])
          }} 
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
          {/* Glitch effect overlay */}
          <motion.div 
            className="absolute inset-0 z-20 mix-blend-overlay"
            animate={{
              opacity: [0, 0.1, 0, 0.05, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 5 + Math.random() * 10
            }}
            style={{
              background: `linear-gradient(45deg, 
                transparent 30%, 
                rgba(0, 255, 255, 0.1) 50%, 
                transparent 70%)`
            }}
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-30 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left side - Text content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: -100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Floating geometric elements */}
            <div className="relative">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute border rounded-lg ${
                    i % 3 === 0 ? 'border-cyan-400/40 w-16 h-16' : 
                    i % 3 === 1 ? 'border-emerald-400/40 w-12 h-12' : 'border-yellow-400/40 w-8 h-8'
                  } ${
                    i % 2 === 0 ? 'top-0 -right-16' : i % 3 === 1 ? '-top-8 right-8' : 'top-8 -right-12'
                  }`}
                  style={{
                    x: useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], 
                      [Math.random() * -30, Math.random() * 30]),
                    y: useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], 
                      [Math.random() * -20, Math.random() * 20]),
                  }}
                  animate={{ 
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 8 + i * 2, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
              
              <motion.h1 
                className="text-5xl md:text-7xl xl:text-8xl font-bold mb-8 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  x: useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-10, 10]),
                  y: useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-5, 5]),
                }}
              >
                <span className="text-white relative">
                  Vimukthi
                  {/* Glitch text effect */}
                  <motion.span
                    className="absolute inset-0 text-cyan-400"
                    animate={{
                      x: [0, 2, 0, -2, 0],
                      opacity: [0, 0.5, 0, 0.3, 0]
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      repeatDelay: 3 + Math.random() * 5
                    }}
                  >
                    Vimukthi
                  </motion.span>
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 via-yellow-400 to-blue-500 relative">
                  Buddika
                  <motion.span
                    className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400"
                    animate={{
                      x: [0, -2, 0, 2, 0],
                      opacity: [0, 0.7, 0, 0.4, 0]
                    }}
                    transition={{
                      duration: 0.4,
                      repeat: Infinity,
                      repeatDelay: 4 + Math.random() * 6
                    }}
                  >
                    Buddika
                  </motion.span>
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-3xl text-cyan-300 mb-8 min-h-[3rem] flex items-center justify-center lg:justify-start"
              style={{
                x: useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-5, 5]),
              }}
            >
              <TypingEffect 
                words={typingWords}
                className="font-medium"
                typingSpeed={100}
                deletingSpeed={80}
                delayBetweenWords={2000}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate software engineer from Sri Lanka, specializing in cutting-edge web technologies, 
              artificial intelligence, and creating digital experiences that push the boundaries of innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={ROUTES.PROJECTS}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg shadow-lg shadow-cyan-500/25 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Explore My Work
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={ROUTES.CONTACT}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-4 text-lg backdrop-blur-sm"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Interactive Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: 100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(from 0deg, 
                  rgba(6, 182, 212, 0.5), 
                  rgba(16, 185, 129, 0.5), 
                  rgba(250, 204, 21, 0.5), 
                  rgba(59, 130, 246, 0.5), 
                  rgba(147, 51, 234, 0.5), 
                  rgba(6, 182, 212, 0.5))`,
                scale: useTransform(useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [0.3, 0.8]), [0.3, 0.8], [1.1, 1.3]),
                filter: 'blur(20px)'
              }}
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Interactive frame */}
            <motion.div
              className="relative z-10 rounded-full p-4 backdrop-blur-xl bg-gradient-to-br from-black/20 to-gray-900/40 border-2 border-gradient-to-r from-cyan-400/50 to-purple-600/50"
              style={{
                rotateX: useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [5, -5]),
                rotateY: useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-5, 5]),
              }}
              animate={{
                scale: isHovering ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Profile image with interactive effects */}
              <motion.div
                className="relative rounded-full overflow-hidden"
                style={{
                  filter: `hue-rotate(${useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [0, 30])}deg) 
                           brightness(${useTransform(useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [0.3, 0.8]), [0.3, 0.8], [1.1, 1.3])})`,
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTY5NTk1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Vimukthi Buddika"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full"
                />
                
                {/* Animated overlay effects */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/10 via-transparent to-purple-600/10" />
                
                {/* Floating particles around image */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-3 h-3 rounded-full ${
                      i % 4 === 0 ? 'bg-cyan-400' : 
                      i % 4 === 1 ? 'bg-emerald-400' : 
                      i % 4 === 2 ? 'bg-yellow-400' : 'bg-blue-400'
                    }`}
                    style={{
                      left: `${50 + Math.cos(i * Math.PI / 4) * 45}%`,
                      top: `${50 + Math.sin(i * Math.PI / 4) * 45}%`,
                      x: useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], 
                        [Math.cos(i * Math.PI / 4) * -20, Math.cos(i * Math.PI / 4) * 20]),
                      y: useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], 
                        [Math.sin(i * Math.PI / 4) * -10, Math.sin(i * Math.PI / 4) * 10]),
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  />
                ))}
              </motion.div>

              {/* Interactive code elements */}
              <motion.div
                className="absolute -top-4 -left-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 text-cyan-400 text-sm font-mono border border-cyan-400/30"
                style={{
                  x: useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-10, 10]),
                  y: useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-5, 5]),
                }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                const dev = "innovative";
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 text-emerald-400 text-sm font-mono border border-emerald-400/30"
                style={{
                  x: useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [10, -10]),
                  y: useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [5, -5]),
                }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                return &lt;Future /&gt;;
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section - FigmaUI Style */}
      <section id="about" className="py-32 relative">
        <motion.div style={{ y: aboutY }} className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-2xl bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-3xl p-8 shadow-2xl shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-2xl" />
                
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1564707944519-7a116ef3841c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjkzNTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI Technology"
                  className="w-full h-80 object-cover rounded-2xl relative z-10"
                />
                
                {/* Floating code snippets */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-2 text-cyan-400 text-xs font-mono">
                  const dev = "Vimukthi";
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-2 text-purple-400 text-xs font-mono">
                  return &lt;Innovation /&gt;;
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Me</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                I'm a passionate software engineer and tech enthusiast from Sri Lanka, currently pursuing advanced 
                studies in Computer Science. My journey in technology spans full-stack development, artificial 
                intelligence, and emerging technologies that shape our digital future.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                When I'm not immersed in code, you'll find me exploring the latest tech trends, contributing to 
                open-source projects, or capturing the breathtaking landscapes of Sri Lanka. I believe in the 
                power of technology to solve real-world problems and create meaningful impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                {[
                  { label: 'Innovation Driven', icon: Brain },
                  { label: 'Team Collaboration', icon: Globe },
                  { label: 'Continuous Learning', icon: Zap },
                  { label: 'Problem Solving', icon: Terminal }
                ].map((trait, index) => {
                  const Icon = trait.icon;
                  return (
                    <div key={trait.label} className="flex items-center gap-3 p-3 backdrop-blur-sm bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{trait.label}</span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Skills & Expertise Section - FigmaUI Style */}
      <section id="skills" className="py-32 relative">
        <motion.div style={{ y: skillsY }} className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks that power modern digital experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="backdrop-blur-2xl bg-gradient-to-br from-white/50 to-gray-100/50 dark:from-black/50 dark:to-gray-900/50 border border-cyan-500/20 rounded-2xl p-8 shadow-2xl hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden">
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400 text-sm">Proficiency</span>
                          <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="relative h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Enhanced Featured Projects Section - FigmaUI Style */}
      <section id="projects" className="py-32 relative">
        <motion.div style={{ y: projectsY }} className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Innovative solutions that showcase technical expertise and creative problem-solving
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="group relative"
              >
                <Card className="backdrop-blur-2xl bg-gradient-to-br from-white/50 to-gray-100/50 dark:from-black/50 dark:to-gray-900/50 border border-cyan-500/20 shadow-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-0">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Button size="sm" variant="outline" className="border-cyan-400/50 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="backdrop-blur-2xl bg-gradient-to-br from-white/30 to-gray-100/30 dark:from-black/30 dark:to-gray-900/30 border border-gray-300/50 dark:border-gray-700/50 shadow-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                  <div className="relative overflow-hidden h-48">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} className="bg-gray-200/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border-gray-300/50 dark:border-gray-600/50 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button size="sm" variant="ghost" className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 p-2">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 p-2">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to={ROUTES.PROJECTS}>
              <Button variant="outline" size="lg" className="border-cyan-400/50 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeEnhanced;
