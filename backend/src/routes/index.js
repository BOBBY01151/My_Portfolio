const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./auth.routes');
const projectRoutes = require('./project.routes');
const experienceRoutes = require('./experience.routes');
const contactRoutes = require('./contact.routes');

// Mount routes
router.use('/auth', authRoutes);
router.use('/projects', projectRoutes);
router.use('/experience', experienceRoutes);
router.use('/contact', contactRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
