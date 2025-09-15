const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experience.controller');
const auth = require('../middleware/auth');
const { validate, schemas } = require('../middleware/validate');

// Public routes
router.get('/', experienceController.getAllExperiences);
router.get('/:id', experienceController.getExperienceById);

// Protected routes (admin only)
router.post('/', auth, validate(schemas.experience), experienceController.createExperience);
router.put('/:id', auth, validate(schemas.experience), experienceController.updateExperience);
router.delete('/:id', auth, experienceController.deleteExperience);

module.exports = router;
