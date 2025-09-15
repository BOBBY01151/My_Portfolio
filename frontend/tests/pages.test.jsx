import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../src/pages/Home/Home'

// Mock the useTheme hook
vi.mock('../src/hooks/useTheme', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: vi.fn(),
    toggleTheme: vi.fn(),
  }),
}))

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Pages', () => {
  describe('Home Page', () => {
    it('renders the home page', () => {
      renderWithRouter(<Home />)
      
      expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument()
      expect(screen.getByText('View My Work')).toBeInTheDocument()
      expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    })

    it('displays featured projects section', () => {
      renderWithRouter(<Home />)
      
      expect(screen.getByText('Featured Projects')).toBeInTheDocument()
    })
  })
})
