const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const { protect } = require('../middleware/auth');

// Public route - anyone can submit a contact form
router.post('/', contactController.createContact);

// Protected routes - only admins can access
router.get('/', protect, contactController.getAllContacts);
router.get('/:id', protect, contactController.getContactById);
router.patch('/:id/read', protect, contactController.markAsRead);
router.patch('/:id/replied', protect, contactController.markAsReplied);
router.delete('/:id', protect, contactController.deleteContact);

module.exports = router;

