# Portfolio

A modern, full-stack portfolio website built with React, Node.js, and MongoDB.

## Features

- **Frontend**: React with Vite, Tailwind CSS, React Router
- **Backend**: Node.js with Express, MongoDB with Mongoose
- **Authentication**: JWT-based admin authentication
- **Deployment**: Vercel serverless functions
- **Responsive Design**: Mobile-first approach with dark mode support

## Project Structure

```
my-portfolio/
├── backend/                 # Node.js API server
│   ├── src/
│   │   ├── config/         # Database and environment configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Custom middleware (auth, validation, error handling)
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Utility functions
│   │   ├── app.js          # Express app configuration
│   │   ├── server.js       # Local development server
│   │   └── serverless.js   # Vercel serverless entry point
│   ├── tests/              # Backend tests
│   ├── .env.example        # Environment variables template
│   └── package.json
├── frontend/               # React frontend
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility libraries
│   │   ├── pages/          # Page components
│   │   ├── routes/         # Routing configuration
│   │   ├── store/          # Global state management
│   │   ├── styles/         # CSS and Tailwind styles
│   │   ├── App.jsx         # Root component
│   │   └── main.jsx        # Application entry point
│   ├── tests/              # Frontend tests
│   ├── .env.example        # Environment variables template
│   └── package.json
├── vercel.json             # Vercel deployment configuration
├── .gitignore
├── .editorconfig
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Set up environment variables:

Backend (create `backend/.env` from `backend/.env.example`):
```env
MONGO_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d
CLIENT_ORIGIN=http://localhost:5173
PORT=3001
NODE_ENV=development
```

Frontend (create `frontend/.env` from `frontend/.env.example`):
```env
VITE_API_URL=/
```

### Development

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

### API Endpoints

- `GET /api/health` - Health check
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `POST /api/projects` - Create project (admin only)
- `PUT /api/projects/:id` - Update project (admin only)
- `DELETE /api/projects/:id` - Delete project (admin only)
- `GET /api/experience` - Get all experience
- `POST /api/experience` - Create experience (admin only)
- `PUT /api/experience/:id` - Update experience (admin only)
- `DELETE /api/experience/:id` - Delete experience (admin only)

## Deployment

### Vercel Deployment

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy

The `vercel.json` configuration handles both frontend and backend deployment.

## Technologies Used

### Frontend
- React 18
- Vite
- React Router
- Tailwind CSS
- Zustand (state management)
- Axios
- Lucide React (icons)

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Zod (validation)
- Helmet (security)
- CORS

### Development Tools
- ESLint
- Prettier
- Jest (testing)
- Vitest (frontend testing)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.