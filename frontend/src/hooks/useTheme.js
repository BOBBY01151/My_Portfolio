import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { THEMES, STORAGE_KEYS } from '../lib/constants'

const useThemeStore = create(
  persist(
    (set) => ({
      theme: THEMES.LIGHT,
      
      setTheme: (theme) => {
        set({ theme })
        // Apply theme to document
        if (theme === THEMES.DARK) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      },
      
      toggleTheme: () => {
        const currentTheme = useThemeStore.getState().theme
        const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
        useThemeStore.getState().setTheme(newTheme)
      },
    }),
    {
      name: STORAGE_KEYS.THEME,
    }
  )
)

export const useTheme = () => {
  const { theme, setTheme, toggleTheme } = useThemeStore()
  
  // Initialize theme on mount
  React.useEffect(() => {
    setTheme(theme)
  }, [theme, setTheme])
  
  return { theme, setTheme, toggleTheme }
}
