import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Code, 
  Settings, 
  BarChart3,
  ArrowRight,
  Plus,
  Edit,
  Zap
} from 'lucide-react';

import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '../../components/FigmaUI';
import Container from '../../components/Layout/Container';
import { ROUTES } from '../../lib/constants';

const Admin = () => {
  const adminCards = [
    {
      title: 'Manage Projects',
      description: 'Add, edit, and organize your portfolio projects. Import from GitHub or create manually.',
      icon: Code,
      link: ROUTES.ADMIN_PROJECTS,
      color: 'from-cyan-400 to-blue-500',
      features: ['GitHub Import', 'Manual Creation', 'Edit & Delete', 'Featured Toggle']
    },
    {
      title: 'Manage Experience',
      description: 'Showcase your professional journey. Add work experience, internships, and freelance projects.',
      icon: Briefcase,
      link: ROUTES.ADMIN_EXPERIENCE,
      color: 'from-purple-400 to-pink-500',
      features: ['Add Experience', 'Edit Details', 'Timeline View', 'Tech Stack']
    }
  ];

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

      {/* Enhanced Interactive Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
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
        
        {/* Large static glows */}
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"
          style={{ left: '20%', top: '10%' }}
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
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
          style={{ right: '20%', bottom: '10%' }}
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
      </div>

      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center relative pt-20 overflow-hidden">
        <Container>
          <div className="text-center py-16 relative z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white">
                  Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Dashboard</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Manage your portfolio content with ease. Add projects, update experience, and keep your portfolio fresh.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Admin Cards Section */}
      <section className="py-32 relative">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 relative z-30">
            {adminCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Link to={card.link}>
                    <div className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20 rounded-2xl shadow-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 relative group h-full">
                      {/* Animated background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      <div className="relative z-10 p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center shadow-lg`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h2 className="text-2xl font-bold text-white mb-2">{card.title}</h2>
                            <p className="text-gray-300 leading-relaxed">{card.description}</p>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          <p className="text-sm text-gray-400 font-semibold">Features:</p>
                          <div className="flex flex-wrap gap-2">
                            {card.features.map((feature, idx) => (
                              <Badge key={idx} className={`bg-gradient-to-r ${card.color} bg-opacity-20 text-white border-0 text-xs`}>
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="font-medium">Manage Now</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="backdrop-blur-2xl bg-gradient-to-br from-black/30 to-gray-900/30 border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
                Quick Tips
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Zap,
                    title: 'Quick Actions',
                    description: 'Use GitHub import to quickly add projects from your repositories'
                  },
                  {
                    icon: Edit,
                    title: 'Easy Editing',
                    description: 'Click edit on any item to update details instantly'
                  },
                  {
                    icon: Plus,
                    title: 'Add New',
                    description: 'Create new projects and experience entries with simple forms'
                  }
                ].map((tip, idx) => {
                  const TipIcon = tip.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-4 backdrop-blur-sm bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TipIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{tip.title}</h4>
                        <p className="text-sm text-gray-400">{tip.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Admin;
