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
import { Button } from '../../components/FigmaUI/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/FigmaUI/ui/card';
import { Badge } from '../../components/FigmaUI/ui/badge';
import { TypingEffect } from '../../components/FigmaUI/TypingEffect';
import { ImageWithFallback } from '../../components/FigmaUI/ImageWithFallback';

// Import existing components
import Container from '../../components/Layout/Container';
import { Section, SectionHeader, SectionContent } from '../../components/UI/Section';
import { ROUTES } from '../../lib/constants';

const HomeEnhanced = () => {
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
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-x-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Dynamic Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
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
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"
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

      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <motion.div 
          style={{ y: heroY, scale: heroScale }} 
          className="absolute inset-0 opacity-30"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1689692784625-1ce82784a25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjeWJlcnB1bmslMjBuZW9ufGVufDF8fHx8MTc1Njk1OTU2OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50 dark:from-black/50 dark:via-transparent dark:to-black/50" />
        </motion.div>
        
        <Container>
          <div className="text-center relative z-10">
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
                    className="absolute w-20 h-20 border border-blue-400/30 rounded-lg"
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
                  <span className="text-gray-900 dark:text-white">Vimukthi</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    Buddika
                  </span>
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-2xl md:text-4xl text-blue-300 mb-8 min-h-[3rem] flex items-center justify-center"
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
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
                <Link to={ROUTES.PROJECTS}>
                  <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to={ROUTES.CONTACT}>
                  <Button variant="outline" size="lg" className="border-blue-400 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/20">
                    Get In Touch
                  </Button>
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="flex justify-center space-x-6 pt-8"
              >
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Github className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Linkedin className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Mail className="h-6 w-6" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Quick Stats */}
      <Section>
        <Container>
          <motion.div 
            style={{ y: aboutY }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <Card className="text-center border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <CardContent className="pt-6">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  50+ Projects
                </CardTitle>
                <CardDescription>
                  Completed projects across various technologies
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardContent className="pt-6">
                <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  5+ Years
                </CardTitle>
                <CardDescription>
                  Professional experience in software development
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <CardContent className="pt-6">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Available
                </CardTitle>
                <CardDescription>
                  Open to new opportunities and collaborations
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <Container>
          <SectionHeader
            title="Technical Skills"
            subtitle="Technologies and tools I work with"
          />
          <motion.div 
            style={{ y: skillsY }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={index} className="border-gray-200 dark:border-gray-700">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{skill.name}</CardTitle>
                        <CardDescription>{skill.level}%</CardDescription>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
        </Container>
      </Section>

      {/* Featured Projects */}
      <Section>
        <Container>
          <SectionHeader
            title="Featured Projects"
            subtitle="Some of my recent work that I'm proud of"
          />
          <motion.div 
            style={{ y: projectsY }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-700">
                <div className="relative overflow-hidden rounded-t-xl">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link to={ROUTES.PROJECTS}>
              <Button variant="outline" size="lg" className="border-blue-400 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/20">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default HomeEnhanced;
