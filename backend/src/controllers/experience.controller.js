const experienceService = require('../services/experience.service');
const { successResponse, errorResponse } = require('../utils/response');

const getAllExperiences = async (req, res) => {
  try {
    const experiences = await experienceService.getAllExperiences();
    successResponse(res, experiences, 'Experiences retrieved successfully');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

const getExperienceById = async (req, res) => {
  try {
    const experience = await experienceService.getExperienceById(req.params.id);
    successResponse(res, experience, 'Experience retrieved successfully');
  } catch (error) {
    errorResponse(res, error.message, 404);
  }
};

const createExperience = async (req, res) => {
  try {
    const experience = await experienceService.createExperience(req.body);
    successResponse(res, experience, 'Experience created successfully', 201);
  } catch (error) {
    errorResponse(res, error.message, 400);
  }
};

const updateExperience = async (req, res) => {
  try {
    const experience = await experienceService.updateExperience(req.params.id, req.body);
    successResponse(res, experience, 'Experience updated successfully');
  } catch (error) {
    errorResponse(res, error.message, 400);
  }
};

const deleteExperience = async (req, res) => {
  try {
    await experienceService.deleteExperience(req.params.id);
    successResponse(res, null, 'Experience deleted successfully');
  } catch (error) {
    errorResponse(res, error.message, 404);
  }
};

module.exports = {
  getAllExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience
};
