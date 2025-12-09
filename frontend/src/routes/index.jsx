import { Routes, Route } from 'react-router-dom'
import { ROUTES } from '../lib/constants'
import ProtectedRoute from './ProtectedRoute'

// Layout
import FuturisticNavbar from '../components/Layout/FuturisticNavbar'
import Footer from '../components/Layout/Footer'

// Pages
import Home from '../pages/Home/Home'
import HomeEnhanced from '../pages/Home/HomeEnhanced'
import Login from '../pages/Auth/Login'
import Projects from '../pages/Projects/Projects'
import ProjectsEnhanced from '../pages/Projects/ProjectsEnhanced'
import Experience from '../pages/Experience/Experience'
import Contact from '../pages/Contact/Contact'
import ContactEnhanced from '../pages/Contact/ContactEnhanced'
import Admin from '../pages/Admin/Admin'
import AdminProjects from '../pages/Admin/Projects/List'
import AdminExperience from '../pages/Admin/Experience/List'
import AdminMessages from '../pages/Admin/Messages/List'

const AppRoutes = () => {
  return (
    <>
      <FuturisticNavbar />
      <main className="min-h-screen">
        <Routes>
          {/* Public Routes */}
          <Route path={ROUTES.HOME} element={<HomeEnhanced />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.PROJECTS} element={<ProjectsEnhanced />} />
          <Route path={ROUTES.EXPERIENCE} element={<Experience />} />
          <Route path={ROUTES.CONTACT} element={<ContactEnhanced />} />

          {/* Protected Routes */}
          <Route
            path={ROUTES.ADMIN}
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.ADMIN_PROJECTS}
            element={
              <ProtectedRoute>
                <AdminProjects />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.ADMIN_EXPERIENCE}
            element={
              <ProtectedRoute>
                <AdminExperience />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.ADMIN_MESSAGES}
            element={
              <ProtectedRoute>
                <AdminMessages />
              </ProtectedRoute>
            }
          />

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    404
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Page not found
                  </p>
                  <a
                    href={ROUTES.HOME}
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Go back home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default AppRoutes
