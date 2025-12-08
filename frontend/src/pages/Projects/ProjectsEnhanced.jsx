import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Code, 
  Eye,
  Search,
  Star,
  Briefcase,
  Loader2
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
  TypingEffect,
  ImageWithFallback,
  Alert,
  AlertDescription
} from '../../components/FigmaUI';

import Container from '../../components/Layout/Container';
import axiosInstance from '../../lib/axiosInstance';
import { API_ENDPOINTS } from '../../lib/constants';

// Color gradients for projects
const colorGradients = [
  'from-cyan-400 to-blue-500',
  'from-purple-400 to-pink-500',
  'from-teal-400 to-cyan-500',
  'from-orange-400 to-red-500',
  'from-green-400 to-emerald-500',
  'from-yellow-400 to-orange-500',
  'from-indigo-400 to-purple-500',
  'from-pink-400 to-rose-500'
];

const ProjectsEnhanced = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`${API_ENDPOINTS.PROJECTS.LIST}?finished=true`);
        const apiProjects = response.data.data || [];
        
        // Map API projects to component format
        const mappedProjects = apiProjects.map((project, index) => ({
          id: project._id,
          title: project.title,
          description: project.description,
          shortDescription: project.shortDescription,
          image: project.image,
          tags: project.technologies || [],
          github: project.githubUrl || '',
          demo: project.liveUrl || '',
          featured: project.featured || false,
          finished: project.finished || false,
          date: project.createdAt || new Date().toISOString(),
          color: colorGradients[index % colorGradients.length]
        }));
        
        setProjects(mappedProjects);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.response?.data?.message || 'Failed to load projects');
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects by search term
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.shortDescription?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  // Get featured projects
  const featuredProjects = filteredProjects.filter(project => project.featured);

  // Get all projects (for "all" tab)
  const allProjects = filteredProjects;

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
          <div className="w-full relative z-30">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-6 mb-12">
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

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <Loader2 className="w-12 h-12 animate-spin text-cyan-400 mx-auto mb-4" />
                  <p className="text-gray-300">Loading projects...</p>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <Alert variant="destructive" className="mb-8 bg-red-500/10 border-red-500/30">
                <AlertDescription className="text-red-400">{error}</AlertDescription>
              </Alert>
            )}

            {/* Projects Content */}
            {!loading && !error && (
              <div className="space-y-12">
            {/* Featured Projects Section */}
                {featuredProjects.length > 0 && (
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
                        Featured Projects ({featuredProjects.length})
                </h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
                    </motion.div>
                    {featuredProjects.length === 0 ? (
                      <div className="text-center py-12">
                        <Star className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                        <p className="text-gray-400">No featured projects yet</p>
                      </div>
                    ) : (
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
                              {project.shortDescription || project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {project.tags && project.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                                  <Badge key={tagIndex} className={`bg-gradient-to-r ${project.color} bg-opacity-20 text-white border-0 text-xs`}>
                                {tag}
                              </Badge>
                            ))}
                          </div>
                            )}
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Calendar className="h-4 w-4" />
                            {new Date(project.date).toLocaleDateString()}
                          </div>
                        </CardContent>
                          <CardFooter className="flex justify-between gap-2">
                            {project.github && (
                              <Button variant="outline" size="sm" className={`flex-1 border-transparent bg-gradient-to-r ${project.color} bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300`} asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                            )}
                            {project.demo && (
                              <Button size="sm" className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0 shadow-lg`} asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                            )}
                            {!project.github && !project.demo && (
                              <p className="text-sm text-gray-400 text-center w-full py-2">No links available</p>
                            )}
                        </CardFooter>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                    )}
              </div>
                )}

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
                  
                  {filteredProjects.length === 0 ? (
                    <div className="text-center py-16">
                      <Code className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                      <p className="text-gray-400 text-lg">
                        {searchTerm ? 'No projects found matching your search' : 'No projects available yet'}
                      </p>
                    </div>
                  ) : (
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
                              {project.shortDescription || project.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                            {project.tags && project.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, tagIndex) => (
                                  <Badge key={tagIndex} className={`bg-gradient-to-r ${project.color} bg-opacity-20 text-white border-0 text-xs`}>
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Calendar className="h-4 w-4" />
                                {new Date(project.date).toLocaleDateString()}
                              </div>
                            </CardContent>
                          <CardFooter className="flex justify-between gap-2">
                            {project.github && (
                              <Button variant="outline" size="sm" className={`flex-1 border-transparent bg-gradient-to-r ${project.color} bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300`} asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4 mr-2" />
                                  Code
                                </a>
                              </Button>
                            )}
                            {project.demo && (
                              <Button size="sm" className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0 shadow-lg`} asChild>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Demo
                                </a>
                              </Button>
                            )}
                            {!project.github && !project.demo && (
                              <p className="text-sm text-gray-400 text-center w-full py-2">No links available</p>
                            )}
                            </CardFooter>
                        </div>
                      </div>
                        </motion.div>
                      ))}
                  </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ProjectsEnhanced;
