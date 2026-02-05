import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Cpu, Github, Linkedin, Menu, X, LogIn } from 'lucide-react'
import { cn } from '../../lib/helpers'
import { ROUTES } from '../../lib/constants'
import useAuthStore from '../../store/authStore'
import { Button } from '../FigmaUI'
import ThemeToggle from './ThemeToggle'

const FuturisticNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { isAuthenticated, logout } = useAuthStore()

  const navigation = [
    { name: 'Home', href: ROUTES.HOME },
    { name: 'Projects', href: ROUTES.PROJECTS },
    { name: 'Experience', href: ROUTES.EXPERIENCE },
    { name: 'Contact', href: ROUTES.CONTACT },
  ]

  const handleLogout = async () => {
    await logout()
    setIsOpen(false)
  }

  return (
    <>
      {/* Futuristic Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-2 md:p-6">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="backdrop-blur-2xl bg-black/30 dark:bg-black/50 border border-cyan-500/30 rounded-full px-4 md:px-8 py-3 md:py-4 shadow-2xl shadow-cyan-500/10">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <Link to={ROUTES.HOME} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center relative">
                    <Cpu className="w-5 h-5 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse opacity-75" />
                  </div>
                  <span className="text-white font-medium text-lg">Portfolio</span>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
                    <Link
                      to={item.href}
                      className={cn(
                        'text-gray-300 hover:text-cyan-400 transition-colors relative group',
                        location.pathname === item.href && 'text-cyan-400'
                      )}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center space-x-3">
                <ThemeToggle />

                {/* Social Links */}
                <motion.a
                  href="https://github.com/BOBBY01151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-cyan-500/30 transition-all duration-300 group">
                    <Github className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                  </Button>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vimukthi-buddika-ba7a90310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-cyan-500/30 transition-all duration-300 group">
                    <Linkedin className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                  </Button>
                </motion.a>

                {/* Auth Actions */}
                {isAuthenticated ? (
                  <div className="flex items-center space-x-2">
                    <Link to={ROUTES.ADMIN}>
                      <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-cyan-500/30">
                        Admin
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleLogout}
                      className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-cyan-500/30"
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Link to={ROUTES.LOGIN}>
                    <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-cyan-500/30">
                      <LogIn className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-4 right-4 z-40 md:hidden"
        >
          <div className="backdrop-blur-2xl bg-black/40 dark:bg-black/60 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/10">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'block px-4 py-3 text-base font-medium transition-colors rounded-lg',
                    location.pathname === item.href
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-cyan-500/30 space-y-2">
                {/* Social Links */}
                <div className="flex space-x-2 justify-center">
                  <motion.a
                    href="https://github.com/BOBBY01151"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-cyan-500/30 transition-all duration-300 group">
                      <Github className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                    </Button>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/vimukthi-buddika-ba7a90310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-cyan-500/30 transition-all duration-300 group">
                      <Linkedin className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                    </Button>
                  </motion.a>
                </div>

                {/* Auth Actions */}
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <Link
                      to={ROUTES.ADMIN}
                      className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    to={ROUTES.LOGIN}
                    className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default FuturisticNavbar
