import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Heart, Cpu } from 'lucide-react'
import { motion } from 'motion/react'
import { ROUTES } from '../../lib/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:contact@example.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="backdrop-blur-2xl bg-black/50 border-t border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
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
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300 group"
                      aria-label={link.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon className="h-5 w-5 group-hover:text-cyan-400 transition-colors" />
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
            <ul className="space-y-3">
              {[
                { name: 'Home', href: ROUTES.HOME },
                { name: 'Projects', href: ROUTES.PROJECTS },
                { name: 'Experience', href: ROUTES.EXPERIENCE },
                { name: 'Contact', href: ROUTES.CONTACT },
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors relative group inline-block"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
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
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <a
                  href="mailto:contact@example.com"
                  className="text-gray-300 hover:text-cyan-400 transition-colors relative group inline-block"
                >
                  contact@example.com
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300" />
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse" />
                  <span className="text-gray-300">
                    Available for opportunities
                  </span>
                </div>
              </motion.li>
            </ul>
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
    </footer>
  )
}

export default Footer
