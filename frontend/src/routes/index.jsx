import { Routes, Route } from 'react-router-dom'
import { ROUTES } from '../lib/constants'
import ProtectedRoute from './ProtectedRoute'

// Layout
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

// Pages
import Home from '../pages/Home/Home'
import Login from '../pages/Auth/Login'
import Projects from '../pages/Projects/Projects'
import Experience from '../pages/Experience/Experience'
import Contact from '../pages/Contact/Contact'
import Admin from '../pages/Admin/Admin'
import AdminProjects from '../pages/Admin/Projects/List'
import AdminExperience from '../pages/Admin/Experience/List'
import FigmaUIDemo from '../pages/FigmaUI/FigmaUI'

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          {/* Public Routes */}
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.EXPERIENCE} element={<Experience />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path="/figma-ui" element={<FigmaUIDemo />} />

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

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-foreground mb-4">
                    404
                  </h1>
                  <p className="text-muted-foreground mb-8">
                    Page not found
                  </p>
                  <a
                    href={ROUTES.HOME}
                    className="text-primary hover:text-primary/80"
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
