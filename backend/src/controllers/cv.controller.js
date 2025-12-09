const cvService = require('../services/cv.service');
const { successResponse, errorResponse } = require('../utils/response');

const uploadCV = async (req, res) => {
  try {
    if (!req.file) {
      return errorResponse(res, 'No file uploaded', 400);
    }
    
    // Validate file type (PDF only)
    if (req.file.mimetype !== 'application/pdf') {
      return errorResponse(res, 'Only PDF files are allowed', 400);
    }
    
    // Validate file size (max 10MB)
    if (req.file.size > 10 * 1024 * 1024) {
      return errorResponse(res, 'File size must be less than 10MB', 400);
    }
    
    const cv = await cvService.saveCV(req.file);
    successResponse(res, cv, 'CV uploaded successfully', 201);
  } catch (error) {
    errorResponse(res, error.message, 400);
  }
};

const downloadCV = async (req, res) => {
  try {
    const { buffer, fileName, mimeType } = await cvService.getCVFile();
    
    res.setHeader('Content-Type', mimeType);
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Length', buffer.length);
    
    res.send(buffer);
  } catch (error) {
    errorResponse(res, error.message, 404);
  }
};

const getCVInfo = async (req, res) => {
  try {
    const cv = await cvService.getActiveCV();
    successResponse(res, cv, 'CV information retrieved successfully');
  } catch (error) {
    errorResponse(res, error.message, 404);
  }
};

const getAllCVs = async (req, res) => {
  try {
    const cvs = await cvService.getAllCVs();
    successResponse(res, cvs, 'CVs retrieved successfully');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

const deleteCV = async (req, res) => {
  try {
    await cvService.deleteCV(req.params.id);
    successResponse(res, null, 'CV deleted successfully');
  } catch (error) {
    errorResponse(res, error.message, 404);
  }
};

module.exports = {
  uploadCV,
  downloadCV,
  getCVInfo,
  getAllCVs,
  deleteCV
};

