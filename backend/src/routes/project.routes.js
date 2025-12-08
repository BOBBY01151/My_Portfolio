const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
const auth = require('../middleware/auth');
const { validate, schemas } = require('../middleware/validate');

// Public routes
router.get('/', projectController.getAllProjects);
router.get('/featured', projectController.getFeaturedProjects);
router.get('/:id', projectController.getProjectById);

// Protected routes (admin only)
router.post('/import-github', auth, projectController.importFromGitHub);
router.post('/', auth, validate(schemas.project), projectController.createProject);
router.put('/:id', auth, validate(schemas.project), projectController.updateProject);
router.delete('/:id', auth, projectController.deleteProject);

module.exports = router;
