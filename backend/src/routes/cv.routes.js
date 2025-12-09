const express = require('express');
const router = express.Router();
const multer = require('multer');
const cvController = require('../controllers/cv.controller');
const auth = require('../middleware/auth');

// Configure multer for memory storage (works better with serverless)
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'), false);
    }
  }
});

// Public route - anyone can download CV
router.get('/download', cvController.downloadCV);
router.get('/info', cvController.getCVInfo);

// Protected routes - only admins can upload/manage CVs
router.post('/upload', auth, upload.single('cv'), cvController.uploadCV);
router.get('/', auth, cvController.getAllCVs);
router.delete('/:id', auth, cvController.deleteCV);

module.exports = router;

