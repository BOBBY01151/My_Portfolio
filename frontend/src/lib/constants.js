export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  EXPERIENCE: '/experience',
  CONTACT: '/contact',
  LOGIN: '/auth/login',
  ADMIN: '/admin',
  ADMIN_PROJECTS: '/admin/projects',
  ADMIN_EXPERIENCE: '/admin/experience',
  ADMIN_MESSAGES: '/admin/messages',
}

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
  },
  PROJECTS: {
    LIST: '/projects',
    FEATURED: '/projects/featured',
    DETAIL: (id) => `/projects/${id}`,
  },
  EXPERIENCE: {
    LIST: '/experience',
    DETAIL: (id) => `/experience/${id}`,
  },
  CONTACT: {
    CREATE: '/contact',
    LIST: '/contact',
    DETAIL: (id) => `/contact/${id}`,
    MARK_READ: (id) => `/contact/${id}/read`,
    MARK_REPLIED: (id) => `/contact/${id}/replied`,
  },
}

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  THEME: 'theme',
}

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
}

export const PROJECT_STATUS = {
  FINISHED: 'finished',
  IN_PROGRESS: 'in-progress',
  PLANNED: 'planned',
}

export const EXPERIENCE_TYPES = {
  FULL_TIME: 'full-time',
  PART_TIME: 'part-time',
  CONTRACT: 'contract',
  FREELANCE: 'freelance',
  INTERNSHIP: 'internship',
}
