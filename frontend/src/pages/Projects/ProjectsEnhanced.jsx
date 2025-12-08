import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Code, 
  Eye,
  Search,
  Star,
  Briefcase
} from 'lucide-react';

// Import FigmaUI components
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Badge,
  Button,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TypingEffect,
  ImageWithFallback
} from '../../components/FigmaUI';

import Container from '../../components/Layout/Container';
import { Section, SectionHeader, SectionContent } from '../../components/UI/Section';

const ProjectsEnhanced = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Frontend-focused projects data with color gradients
  const projects = [
    {
      id: 1,
      title: 'Modern E-Commerce UI',
      description: 'A beautiful and responsive e-commerce frontend with shopping cart, product filtering, and smooth animations built with React and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      date: '2024-01-15',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 2,
      title: 'Interactive Chat Interface',
      description: 'A modern real-time chat UI with message bubbles, typing indicators, and emoji picker. Built with React and styled with CSS-in-JS.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      tags: ['React', 'JavaScript', 'Styled Components', 'Socket.io Client'],
      category: 'ui',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      date: '2024-02-20',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A sleek task management application with drag-and-drop functionality, dark mode, and local storage. Built with React and Material-UI.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      tags: ['React', 'Material-UI', 'React DnD', 'LocalStorage'],
      category: 'spa',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      date: '2024-03-10',
      color: 'from-teal-400 to-cyan-500'
    },
    {
      id: 4,
      title: 'Data Visualization Dashboard',
      description: 'An interactive data visualization dashboard with animated charts, graphs, and real-time updates. Built with React, D3.js, and Chart.js.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['React', 'D3.js', 'Chart.js', 'Recharts'],
      category: 'data',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      date: '2024-04-05',
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A stunning portfolio website with smooth scroll animations, interactive sections, and responsive design. Built with React and Framer Motion.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop',
      tags: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      date: '2024-05-12',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 6,
      title: 'Weather App UI',
      description: 'A beautiful weather application with animated weather icons, gradient backgrounds, and location-based forecasts. Built with React and OpenWeather API.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      tags: ['React', 'JavaScript', 'CSS3', 'Weather API'],
      category: 'ui',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      date: '2024-06-18',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 7,
      title: 'Music Player Interface',
      description: 'A modern music player with waveform visualization, playlist management, and smooth transitions. Built with React and Web Audio API.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
      tags: ['React', 'TypeScript', 'Web Audio API', 'CSS Animations'],
      category: 'ui',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      date: '2024-07-25',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      id: 8,
      title: 'Landing Page Design',
      description: 'A conversion-optimized landing page with hero sections, testimonials, and call-to-action buttons. Built with React and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      tags: ['React', 'Tailwind CSS', 'React Router', 'Responsive Design'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      date: '2024-08-10',
      color: 'from-pink-400 to-rose-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'ui', name: 'UI/UX Design', count: projects.filter(p => p.category === 'ui').length },
    { id: 'spa', name: 'SPA', count: projects.filter(p => p.category === 'spa').length },
    { id: 'data', name: 'Data Viz', count: projects.filter(p => p.category === 'data').length }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
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
        {/* Floating particles with automatic animation only */}
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
        
        {/* Large static glows - FigmaUI Style */}
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"
          style={{
            left: '20%',
            top: '10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-yellow-600/20 rounded-full blur-3xl"
          style={{
            right: '20%',
            bottom: '10%',
          }}
          animate={{
            scale: [1.2, 0.9, 1.2],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute w-72 h-72 bg-gradient-to-r from-purple-500/15 to-pink-600/15 rounded-full blur-3xl"
          style={{
            left: '50%',
            top: '50%',
          }}
          animate={{
            scale: [0.8, 1.4, 0.8],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative pt-20 overflow-hidden">
        <Container>
          <div className="text-center py-16 relative z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white mb-6">
                My{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 via-yellow-400 to-blue-500">
                  <TypingEffect 
                    words={['Projects', 'Creations', 'Innovations', 'Solutions']}
                    className=""
                    typingSpeed={100}
                    deletingSpeed={80}
                    delayBetweenWords={2000}
                  />
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                A showcase of my frontend development skills and creative UI/UX designs built with modern web technologies like React, TypeScript, and Tailwind CSS.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-32 relative">
        <Container>
          <Tabs defaultValue="all" className="w-full relative z-30">
            {/* Category Tabs */}
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-black/50 backdrop-blur-xl border border-cyan-500/20">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2 text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-600/20"
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-1 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-black/30 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            {/* Featured Projects Section */}
            <TabsContent value="all" className="space-y-12">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <Star className="h-7 w-7 text-yellow-500" />
                    Featured Projects
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10 }}
                      className="group relative"
                    >
                      <div className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20 rounded-2xl shadow-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 relative">
                        {/* Animated background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        
                        <div className="relative z-10">
                          <div className="relative overflow-hidden">
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                            <div className="absolute top-4 left-4">
                              <Badge className={`bg-gradient-to-r ${project.color} text-white border-0 shadow-lg`}>
                                <Star className="h-3 w-3 mr-1" />
                                Featured
                              </Badge>
                            </div>
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-black/50 border-gray-600 text-white hover:bg-black/70">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <CardHeader>
                            <CardTitle className="group-hover:text-cyan-400 transition-colors text-white">
                              {project.title}
                            </CardTitle>
                            <CardDescription className="line-clamp-2 text-gray-300">
                              {project.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} className={`bg-gradient-to-r ${project.color} bg-opacity-20 text-white border-0 text-xs`}>
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Calendar className="h-4 w-4" />
                              {new Date(project.date).toLocaleDateString()}
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between gap-2">
                            <Button variant="outline" size="sm" className={`flex-1 border-transparent bg-gradient-to-r ${project.color} bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300`} asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </a>
                            </Button>
                            <Button size="sm" className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0 shadow-lg`} asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Demo
                              </a>
                            </Button>
                          </CardFooter>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* All Projects */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <Code className="h-7 w-7 text-cyan-400" />
                    All Projects ({filteredProjects.length})
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10 }}
                      className="group relative"
                    >
                      <div className="backdrop-blur-2xl bg-gradient-to-br from-black/30 to-gray-900/30 border border-gray-700/50 rounded-2xl shadow-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 relative">
                        {/* Animated background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        
                        <div className="relative z-10">
                          <div className="relative overflow-hidden">
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-black/50 border-gray-600 text-white hover:bg-black/70">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <CardHeader>
                            <CardTitle className="group-hover:text-cyan-400 transition-colors text-white">
                              {project.title}
                            </CardTitle>
                            <CardDescription className="line-clamp-2 text-gray-300">
                              {project.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} className={`bg-gradient-to-r ${project.color} bg-opacity-20 text-white border-0 text-xs`}>
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Calendar className="h-4 w-4" />
                              {new Date(project.date).toLocaleDateString()}
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between gap-2">
                            <Button variant="outline" size="sm" className={`flex-1 border-transparent bg-gradient-to-r ${project.color} bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300`} asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </a>
                            </Button>
                            <Button size="sm" className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0 shadow-lg`} asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Demo
                              </a>
                            </Button>
                          </CardFooter>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Category-specific content */}
            {categories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-white mb-8">
                    {category.name} <span className="text-cyan-400">({category.count} projects)</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects
                      .filter(project => project.category === category.id)
                      .map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -10 }}
                          className="group relative"
                        >
                          <div className="backdrop-blur-2xl bg-gradient-to-br from-black/30 to-gray-900/30 border border-gray-700/50 rounded-2xl shadow-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 relative">
                            {/* Animated background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                            
                            <div className="relative z-10">
                              <div className="relative overflow-hidden">
                                <ImageWithFallback
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-black/50 border-gray-600 text-white hover:bg-black/70">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                              <CardHeader>
                                <CardTitle className="group-hover:text-cyan-400 transition-colors text-white">
                                  {project.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-2 text-gray-300">
                                  {project.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {project.tags.map((tag, tagIndex) => (
                                    <Badge key={tagIndex} className={`bg-gradient-to-r ${project.color} bg-opacity-20 text-white border-0 text-xs`}>
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                  <Calendar className="h-4 w-4" />
                                  {new Date(project.date).toLocaleDateString()}
                                </div>
                              </CardContent>
                              <CardFooter className="flex justify-between gap-2">
                                <Button variant="outline" size="sm" className={`flex-1 border-transparent bg-gradient-to-r ${project.color} bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300`} asChild>
                                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4 mr-2" />
                                    Code
                                  </a>
                                </Button>
                                <Button size="sm" className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0 shadow-lg`} asChild>
                                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Demo
                                  </a>
                                </Button>
                              </CardFooter>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </Container>
      </section>
    </div>
  );
};

export default ProjectsEnhanced;
