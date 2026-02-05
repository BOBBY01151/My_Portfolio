import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, Linkedin, Menu, X, LogIn, Mail } from 'lucide-react'
import { cn } from '../../lib/helpers'
import profileImage from '../../Images/FBC1B388-7E93-4969-BED8-9EEDC798CD62_1_201_a.jpeg'
import { ROUTES } from '../../lib/constants'
import useAuthStore from '../../store/authStore'
import { Button } from '../FigmaUI'
import ThemeToggle from './ThemeToggle'

const FuturisticNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { isAuthenticated, logout } = useAuthStore()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
      <nav className="fixed top-0 left-0 right-0 z-50 p-0 md:p-6">
        <motion.div
          initial={isMobile ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="backdrop-blur-2xl bg-black/30 dark:bg-black/50 border-b md:border border-cyan-500/30 rounded-none md:rounded-full px-4 md:px-8 py-3 md:py-4 shadow-2xl shadow-cyan-500/10">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <Link to={ROUTES.HOME} className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-cyan-400 p-0.5 relative group overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse" />
                  </div>
                  <span className="text-white font-medium text-lg">VimukthiBuddika</span>
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

              <div className="pt-4 border-t border-cyan-500/30 space-y-3">
                {/* Email Card */}
                <motion.a
                  href="mailto:vimukthibudi0007@icloud.com"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg backdrop-blur-2xl bg-gradient-to-br from-black/30 to-gray-900/30 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-center gap-3 w-full">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors font-medium block text-sm">
                        vimukthibudi0007@icloud.com
                      </span>
                      <span className="text-xs text-gray-400">Get in touch</span>
                    </div>
                  </div>
                </motion.a>

                {/* Opportunities Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 p-3 rounded-lg backdrop-blur-2xl bg-gradient-to-br from-black/30 to-gray-900/30 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-center gap-3 w-full">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    </div>
                    <div>
                      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors font-medium block text-sm">
                        Available for opportunities
                      </span>
                      <span className="text-xs text-gray-400">Open to work</span>
                    </div>
                  </div>
                </motion.div>

                <div className="flex gap-3">
                  {/* Social Links */}
                  <div className="flex space-x-2">
                    <motion.a
                      href="https://github.com/BOBBY01151"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="ghost" size="sm" className="h-14 w-14 p-0 rounded-lg border border-gray-700/50 bg-black/30 hover:bg-cyan-500/10 hover:border-cyan-400/50">
                        <Github className="w-6 h-6 text-gray-300 hover:text-cyan-400 transition-colors" />
                      </Button>
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/vimukthi-buddika-ba7a90310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="ghost" size="sm" className="h-14 w-14 p-0 rounded-lg border border-gray-700/50 bg-black/30 hover:bg-cyan-500/10 hover:border-cyan-400/50">
                        <Linkedin className="w-6 h-6 text-gray-300 hover:text-cyan-400 transition-colors" />
                      </Button>
                    </motion.a>
                  </div>

                  {/* Auth Actions - Login Button (Expanded) */}
                  {!isAuthenticated && (
                    <Link
                      to={ROUTES.LOGIN}
                      onClick={() => setIsOpen(false)}
                      className="flex-1 flex items-center justify-center gap-3 p-3 rounded-lg backdrop-blur-2xl bg-gradient-to-br from-black/30 to-gray-900/30 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      <div className="relative z-10 flex items-center gap-2">
                        <LogIn className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300 group-hover:text-purple-400 transition-colors font-medium">Login</span>
                      </div>
                    </Link>
                  )}
                </div>

                {isAuthenticated && (
                  <div className="flex gap-2">
                    <Link
                      to={ROUTES.ADMIN}
                      className="flex-1 block px-4 py-3 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors text-center border border-cyan-500/30"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex-1 block text-center px-4 py-3 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors border border-gray-700"
                    >
                      Logout
                    </button>
                  </div>
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
