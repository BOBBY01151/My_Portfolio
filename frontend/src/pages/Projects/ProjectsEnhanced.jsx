import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Code, 
  Eye,
  Search,
  Star
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

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses and sentiment analysis.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      tags: ['Next.js', 'OpenAI', 'Socket.io', 'TypeScript'],
      category: 'ai',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      date: '2024-02-20'
    },
    {
      id: 3,
      title: 'Mobile Task Manager',
      description: 'Cross-platform mobile app for task management with offline support and team collaboration.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
      category: 'mobile',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      date: '2024-03-10'
    },
    {
      id: 4,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets with real-time updates and custom charts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['D3.js', 'Python', 'Flask', 'PostgreSQL'],
      category: 'data',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      date: '2024-04-05'
    },
    {
      id: 5,
      title: 'Blockchain Voting System',
      description: 'Secure voting system built on blockchain technology with transparent and immutable records.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop',
      tags: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      category: 'blockchain',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      date: '2024-05-12'
    },
    {
      id: 6,
      title: 'IoT Smart Home Hub',
      description: 'Centralized hub for managing smart home devices with voice control and automation.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      tags: ['Raspberry Pi', 'Python', 'MQTT', 'React'],
      category: 'iot',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      date: '2024-06-18'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'data', name: 'Data Science', count: projects.filter(p => p.category === 'data').length },
    { id: 'blockchain', name: 'Blockchain', count: projects.filter(p => p.category === 'blockchain').length },
    { id: 'iot', name: 'IoT', count: projects.filter(p => p.category === 'iot').length }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 to-secondary/5">
        <Container>
          <div className="text-center py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                My{' '}
                <TypingEffect 
                  words={['Projects', 'Creations', 'Innovations', 'Solutions']}
                  className="text-primary"
                  typingSpeed={100}
                  deletingSpeed={80}
                  delayBetweenWords={2000}
                />
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                A showcase of my technical expertise and creative problem-solving through various projects across different technologies and domains.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Tabs defaultValue="all" className="w-full">
            {/* Category Tabs */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2"
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-1">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Featured Projects Section */}
            <TabsContent value="all" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-500" />
                  Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
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
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {new Date(project.date).toLocaleDateString()}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button size="sm" className="bg-gradient-to-r from-primary to-primary/80" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* All Projects */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Code className="h-6 w-6 text-primary" />
                  All Projects ({filteredProjects.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <Card className="group hover:shadow-lg transition-all duration-300">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
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
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {new Date(project.date).toLocaleDateString()}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button size="sm" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Category-specific content */}
            {categories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    {category.name} ({category.count} projects)
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects
                      .filter(project => project.category === category.id)
                      .map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="group hover:shadow-lg transition-all duration-300">
                            <div className="relative overflow-hidden rounded-t-lg">
                              <ImageWithFallback
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <CardHeader>
                              <CardTitle className="group-hover:text-primary transition-colors">
                                {project.title}
                              </CardTitle>
                              <CardDescription className="line-clamp-2">
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
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                {new Date(project.date).toLocaleDateString()}
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                              <Button variant="outline" size="sm" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4 mr-2" />
                                  Code
                                </a>
                              </Button>
                              <Button size="sm" asChild>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Demo
                                </a>
                              </Button>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Container>
      </Section>
    </div>
  );
};

export default ProjectsEnhanced;
