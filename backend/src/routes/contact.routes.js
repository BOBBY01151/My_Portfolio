const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const auth = require('../middleware/auth');

// Public route - anyone can submit a contact form
router.post('/', contactController.createContact);

// Protected routes - only admins can access
router.get('/', auth, contactController.getAllContacts);
router.get('/:id', auth, contactController.getContactById);
router.patch('/:id/read', auth, contactController.markAsRead);
router.patch('/:id/replied', auth, contactController.markAsReplied);
router.delete('/:id', auth, contactController.deleteContact);

module.exports = router;

