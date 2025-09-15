import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme } = useTheme()

  return (
    <div className={theme}>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <AppRoutes />
        </div>
      </Router>
    </div>
  )
}

export default App
