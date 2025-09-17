import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, LogIn } from 'lucide-react'
import { cn } from '../../lib/helpers'
import { ROUTES } from '../../lib/constants'
import useAuthStore from '../../store/authStore'
import { Button } from '../UI/Button'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
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
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary-600',
                  location.pathname === item.href
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Link to={ROUTES.ADMIN}>
                  <Button variant="outline" size="sm">
                    Admin
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Link to={ROUTES.LOGIN}>
                <Button variant="outline" size="sm">
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
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-gray-800">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'block px-3 py-2 text-base font-medium transition-colors',
                    location.pathname === item.href
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <Link
                      to={ROUTES.ADMIN}
                      className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    to={ROUTES.LOGIN}
                    className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
