import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { TypingEffect } from './components/TypingEffect';
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
  Send
} from 'lucide-react';

/**
 * Main App component - IT Student Portfolio Design
 * Features cyberpunk/futuristic design with animations and interactive elements
 * @returns {React.ReactElement} App component
 */
export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
    },
    {
      title: 'Smart IoT Home System',
      description: 'Intelligent home automation system with voice control, energy optimization, and predictive maintenance capabilities.',
      image: 'https://images.unsplash.com/photo-1689692784625-1ce82784a25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjeWJlcnB1bmslMjBuZW9ufGVufDF8fHx8MTc1Njk1OTU2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'Python', 'MQTT', 'TensorFlow', 'Raspberry Pi'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Dynamic Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
          />
        ))}
        
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-full blur-3xl"
          style={{
            transform: useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-50, 50]),
            left: '10%',
            top: '20%'
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-600/10 rounded-full blur-3xl"
          style={{
            transform: useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-30, 30]),
            right: '10%',
            bottom: '20%'
          }}
        />
      </div>

      {/* Futuristic Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="backdrop-blur-2xl bg-black/30 border border-cyan-500/30 rounded-full px-8 py-4 shadow-2xl shadow-cyan-500/10">
            <div className="flex items-center justify-between">
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center relative">
                  <Cpu className="w-5 h-5 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse opacity-75" />
                </div>
                <span className="text-white font-medium text-lg">Vimukthi Buddika</span>
              </motion.div>
              
              <div className="hidden md:flex items-center space-x-8">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
              
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-cyan-500/30">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-cyan-500/30">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <motion.div 
          style={{ y: heroY, scale: heroScale }} 
          className="absolute inset-0 opacity-30"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1689692784625-1ce82784a25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjeWJlcnB1bmslMjBuZW9ufGVufDF8fHx8MTc1Njk1OTU2OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cyberpunk workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Floating Elements */}
            <div className="relative">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 border border-cyan-400/30 rounded-lg"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 8 + i * 2, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    top: `${-40 + i * 20}px`,
                    right: `${-60 + i * 30}px`
                  }}
                />
              ))}
              
              <motion.h1 
                className="text-7xl md:text-9xl font-bold mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="text-white">Vimukthi</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Buddika
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-2xl md:text-4xl text-cyan-300 mb-8 min-h-[3rem] flex items-center justify-center"
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
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Passionate software engineer from Sri Lanka, specializing in cutting-edge web technologies, 
              artificial intelligence, and creating digital experiences that push the boundaries of innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
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
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-4 text-lg backdrop-blur-sm"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section */}
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
                <h2 className="text-5xl font-bold text-white mb-4">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Me</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 leading-relaxed"
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
                className="text-lg text-gray-300 leading-relaxed"
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
                      <span className="text-gray-300 text-sm">{trait.label}</span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-32 relative">
        <motion.div style={{ y: skillsY }} className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
                  <div className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20 rounded-2xl p-8 shadow-2xl hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden">
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Proficiency</span>
                          <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
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

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-32 relative">
        <motion.div style={{ y: projectsY }} className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
                <Card className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20 shadow-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 h-full">
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
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Button size="sm" variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400">
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

          <div className="grid md:grid-cols-2 gap-8">
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
                <Card className="backdrop-blur-2xl bg-gradient-to-br from-black/30 to-gray-900/30 border border-gray-700/50 shadow-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                  <div className="relative overflow-hidden h-48">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} className="bg-gray-700/50 text-gray-300 border-gray-600/50 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-cyan-400 p-2">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-cyan-400 p-2">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="backdrop-blur-2xl bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-semibold text-white mb-8">Let's Connect</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'vimukthi.buddika@email.com', color: 'from-blue-500 to-cyan-500' },
                    { icon: Phone, label: 'Phone', value: '+94 71 234 5678', color: 'from-green-500 to-emerald-500' },
                    { icon: MapPin, label: 'Location', value: 'Colombo, Sri Lanka', color: 'from-purple-500 to-pink-500' }
                  ].map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <motion.div
                        key={contact.label}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 p-4 backdrop-blur-sm bg-black/20 rounded-xl hover:bg-black/30 transition-colors"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{contact.label}</p>
                          <p className="text-white font-medium">{contact.value}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20 rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>
                <Input
                  placeholder="Subject"
                  className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-black/30 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
                />
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 py-3 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 border-t border-cyan-500/20 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium">Vimukthi Buddika</span>
            </div>
            
            <p className="text-gray-400 text-center">
              © 2024 Vimukthi Buddika. Crafted with passion and code. Made with ❤️ in Sri Lanka.
            </p>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}