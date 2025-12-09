import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Heart, Cpu } from 'lucide-react'
import { motion } from 'motion/react'
import { ROUTES } from '../../lib/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/BOBBY01151',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vimukthi-buddika-ba7a90310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:vimukthibudi0007@icloud.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
      
      <div className="relative backdrop-blur-2xl bg-black/40 border-t border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to={ROUTES.HOME} className="flex items-center mb-4 group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center relative mr-3">
                  <Cpu className="w-5 h-5 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse opacity-75" />
                </div>
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Portfolio
                </span>
              </Link>
              <p className="text-gray-300 mb-4 max-w-md">
                A showcase of my projects, experience, and skills. Built with modern technologies
                and designed for performance with a futuristic touch.
              </p>
              <div className="grid grid-cols-3 gap-3 max-w-xs">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  const colors = [
                    'from-blue-400 to-cyan-500',
                    'from-purple-400 to-pink-500', 
                    'from-green-400 to-emerald-500'
                  ]
                  const colorClass = colors[index % colors.length]
                  
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      aria-label={link.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="backdrop-blur-2xl bg-gradient-to-br from-black/50 to-gray-900/50 border border-cyan-500/20 rounded-xl p-4 shadow-2xl hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden">
                        {/* Animated background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        
                        <div className="relative z-10 text-center">
                          <div className={`w-8 h-8 bg-gradient-to-r ${colorClass} rounded-lg flex items-center justify-center shadow-lg mx-auto mb-2`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-xs text-gray-300 group-hover:text-cyan-400 transition-colors font-medium">
                            {link.name}
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 relative">
              Quick Links
              <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-2" />
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Home', href: ROUTES.HOME, icon: '🏠', color: 'from-cyan-400 to-blue-500' },
                { name: 'Projects', href: ROUTES.PROJECTS, icon: '💼', color: 'from-purple-400 to-pink-500' },
                { name: 'Experience', href: ROUTES.EXPERIENCE, icon: '🚀', color: 'from-green-400 to-emerald-500' },
                { name: 'Contact', href: ROUTES.CONTACT, icon: '📧', color: 'from-orange-400 to-red-500' },
              ].map((link, index) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group"
                >
                  <Link
                    to={link.href}
                    className="flex items-center gap-3 p-3 rounded-lg backdrop-blur-2xl bg-gradient-to-br from-black/30 to-gray-900/30 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10 flex items-center gap-3 w-full">
                      <div className={`w-8 h-8 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center shadow-lg text-white text-sm`}>
                        {link.icon}
                      </div>
                      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors font-medium">
                        {link.name}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 relative">
              Contact
              <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-2" />
            </h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="group"
              >
                <a
                  href="mailto:vimukthibudi0007@icloud.com"
                  className="flex items-center gap-3 p-3 rounded-lg backdrop-blur-2xl bg-gradient-to-br from-black/30 to-gray-900/30 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex items-center gap-3 w-full">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors font-medium block">
                        vimukthibudi0007@icloud.com
                      </span>
                      <span className="text-xs text-gray-400">Get in touch</span>
                    </div>
                  </div>
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="group"
              >
                <div className="flex items-center gap-3 p-3 rounded-lg backdrop-blur-2xl bg-gradient-to-br from-black/30 to-gray-900/30 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex items-center gap-3 w-full">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    </div>
                    <div>
                      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors font-medium block">
                        Available for opportunities
                      </span>
                      <span className="text-xs text-gray-400">Open to work</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 pt-8 border-t border-cyan-500/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Portfolio. Crafted with passion and code.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0 flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> and modern web technologies
            </p>
          </div>
        </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
