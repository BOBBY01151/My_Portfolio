const projectService = require('../services/project.service');
const { successResponse, errorResponse } = require('../utils/response');

const getAllProjects = async (req, res) => {
  try {
    const finishedOnly = req.query.finished === 'true';
    const projects = await projectService.getAllProjects(finishedOnly);
    successResponse(res, projects, 'Projects retrieved successfully');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await projectService.getProjectById(req.params.id);
    successResponse(res, project, 'Project retrieved successfully');
  } catch (error) {
    errorResponse(res, error.message, 404);
  }
};

const createProject = async (req, res) => {
  try {
    const project = await projectService.createProject(req.body);
    successResponse(res, project, 'Project created successfully', 201);
  } catch (error) {
    errorResponse(res, error.message, 400);
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await projectService.updateProject(req.params.id, req.body);
    successResponse(res, project, 'Project updated successfully');
  } catch (error) {
    errorResponse(res, error.message, 400);
  }
};

const deleteProject = async (req, res) => {
  try {
    await projectService.deleteProject(req.params.id);
    successResponse(res, null, 'Project deleted successfully');
  } catch (error) {
    errorResponse(res, error.message, 404);
  }
};

const getFeaturedProjects = async (req, res) => {
  try {
    const projects = await projectService.getFeaturedProjects();
    successResponse(res, projects, 'Featured projects retrieved successfully');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getFeaturedProjects
};
