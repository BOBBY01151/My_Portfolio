# 🚀 Portfolio Website

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![Node.js](https://img.shields.io/badge/Node.js-18-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)

A modern, responsive portfolio website showcasing projects, experience, and skills with a clean, professional design.

[🌐 Live Demo](https://your-portfolio.vercel.app) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://github.com/yourusername/portfolio/issues)

</div>

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, responsive design with dark/light mode
- 🔐 **Admin Dashboard** - JWT-based authentication for content management
- 📱 **Mobile First** - Fully responsive across all devices
- ⚡ **Fast Performance** - Optimized with Vite and modern React patterns
- 🛡️ **Secure** - Input validation, rate limiting, and security headers
- 🚀 **Serverless** - Deployed on Vercel with serverless functions
- 📊 **Real-time Updates** - Dynamic content management system

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   Database      │
│   (React + Vite)│◄──►│  (Node.js +     │◄──►│   (MongoDB)     │
│                 │    │   Express)      │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Zod** - Schema validation
- **Helmet** - Security middleware

### DevOps & Tools
- **Vercel** - Serverless deployment platform
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **Vitest** - Frontend testing

## 📁 Project Structure

```
portfolio/
├── 📁 backend/                    # Node.js API Server
│   ├── 📁 src/
│   │   ├── 📁 config/            # Database & environment config
│   │   ├── 📁 controllers/       # Route controllers (CRUD operations)
│   │   ├── 📁 middleware/        # Auth, validation, error handling
│   │   ├── 📁 models/            # Mongoose schemas (User, Project, Experience)
│   │   ├── 📁 routes/            # API route definitions
│   │   ├── 📁 services/          # Business logic layer
│   │   ├── 📁 utils/             # Helper functions
│   │   ├── 📄 app.js             # Express app configuration
│   │   ├── 📄 server.js          # Development server
│   │   └── 📄 serverless.js      # Vercel serverless entry
│   ├── 📁 tests/                 # Backend test suites
│   ├── 📄 .env.example           # Environment variables template
│   └── 📄 package.json
├── 📁 frontend/                   # React Frontend
│   ├── 📁 public/                # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/        # Reusable UI components
│   │   │   ├── 📁 Layout/        # Navbar, Footer, Container
│   │   │   └── 📁 UI/            # Button, Input, Card, etc.
│   │   ├── 📁 hooks/             # Custom React hooks
│   │   ├── 📁 lib/               # Utility libraries
│   │   ├── 📁 pages/             # Page components
│   │   ├── 📁 routes/            # Routing configuration
│   │   ├── 📁 store/             # Global state (Zustand)
│   │   ├── 📁 styles/            # CSS & Tailwind styles
│   │   ├── 📄 App.jsx            # Root component
│   │   └── 📄 main.jsx           # Application entry point
│   ├── 📁 tests/                 # Frontend test suites
│   ├── 📄 .env.example           # Environment variables template
│   └── 📄 package.json
├── 📄 vercel.json                # Vercel deployment config
├── 📄 .gitignore                 # Git ignore rules
├── 📄 .editorconfig              # Editor configuration
└── 📄 README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (local installation or Atlas cloud)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   # Backend dependencies
   cd backend
   npm install
   
   # Frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   
   **Backend** (create `backend/.env`):
   ```env
   MONGO_URI=mongodb://localhost:27017/portfolio
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRES_IN=7d
   CLIENT_ORIGIN=http://localhost:5173
   PORT=3001
   NODE_ENV=development
   ```
   
   **Frontend** (create `frontend/.env`):
   ```env
   VITE_API_URL=/
   ```

4. **Start development servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001

## 📚 API Documentation

### Authentication Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/login` | Admin login | ❌ |
| GET | `/api/auth/me` | Get current user | ✅ |
| POST | `/api/auth/logout` | Logout | ✅ |

### Projects Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/projects` | Get all projects | ❌ |
| GET | `/api/projects/featured` | Get featured projects | ❌ |
| GET | `/api/projects/:id` | Get project by ID | ❌ |
| POST | `/api/projects` | Create new project | ✅ |
| PUT | `/api/projects/:id` | Update project | ✅ |
| DELETE | `/api/projects/:id` | Delete project | ✅ |

### Experience Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/experience` | Get all experience | ❌ |
| GET | `/api/experience/:id` | Get experience by ID | ❌ |
| POST | `/api/experience` | Create new experience | ✅ |
| PUT | `/api/experience/:id` | Update experience | ✅ |
| DELETE | `/api/experience/:id` | Delete experience | ✅ |

### Health Check
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | API health status |

## 🎨 Features Overview

### Public Features
- **Home Page** - Hero section with featured projects
- **Projects Gallery** - Showcase of completed work
- **Experience Timeline** - Professional journey
- **Contact Form** - Get in touch functionality
- **Responsive Design** - Works on all devices
- **Dark/Light Mode** - Theme switching

### Admin Features
- **Secure Login** - JWT-based authentication
- **Project Management** - CRUD operations for projects
- **Experience Management** - CRUD operations for experience
- **Real-time Updates** - Changes reflect immediately
- **Input Validation** - Secure data handling

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

3. **Environment Variables in Vercel**
   ```
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   JWT_EXPIRES_IN=7d
   CLIENT_ORIGIN=https://your-domain.vercel.app
   NODE_ENV=production
   ```

### Manual Deployment

```bash
# Build frontend
cd frontend
npm run build

# Deploy backend to your preferred platform
cd ../backend
npm start
```

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# Run all tests
npm run test:all
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests** (if applicable)
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vercel](https://vercel.com/) - Deployment platform
- [MongoDB](https://www.mongodb.com/) - Database
- [Lucide](https://lucide.dev/) - Icon library

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/portfolio?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/portfolio)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/portfolio)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Your Name](https://github.com/yourusername)

</div>