import { Navigate, useLocation } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import { ROUTES } from '../lib/constants'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore()
  const location = useLocation()

  if (!isAuthenticated) {
    // Redirect to login page with return url
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute
