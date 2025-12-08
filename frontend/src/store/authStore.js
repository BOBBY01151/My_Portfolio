import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import axiosInstance from '../lib/axiosInstance'
import { STORAGE_KEYS } from '../lib/constants'

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (credentials) => {
        set({ isLoading: true })
        try {
          console.log('Attempting login with:', { username: credentials.username, password: '***' })
          const response = await axiosInstance.post('/auth/login', credentials)
          console.log('Login response:', response.data)
          
          const { user, token } = response.data.data
          
          // Store token in localStorage for axios interceptor
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
          
          set({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
          })
          
          return { success: true, data: response.data.data }
        } catch (error) {
          console.error('Login error:', error)
          console.error('Error response:', error.response?.data)
          set({ isLoading: false })
          return {
            success: false,
            error: error.response?.data?.message || error.message || 'Login failed'
          }
        }
      },

      logout: async () => {
        try {
          await axiosInstance.post('/auth/logout')
        } catch (error) {
          console.error('Logout error:', error)
        } finally {
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
          })
        }
      },

      getCurrentUser: async () => {
        set({ isLoading: true })
        try {
          const response = await axiosInstance.get('/auth/me')
          const user = response.data.data
          
          set({
            user,
            isAuthenticated: true,
            isLoading: false,
          })
          
          return { success: true, data: user }
        } catch (error) {
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
          })
          return {
            success: false,
            error: error.response?.data?.message || 'Failed to get user'
          }
        }
      },

      checkAuth: () => {
        const { token, user } = get()
        if (token && user) {
          set({ isAuthenticated: true })
        } else {
          set({ isAuthenticated: false })
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)

export default useAuthStore
