const Project = require('../models/Project');

const getAllProjects = async (finishedOnly = false) => {
  try {
    const query = finishedOnly ? { finished: true } : {};
    const projects = await Project.find(query)
      .sort({ order: 1, createdAt: -1 });
    return projects;
  } catch (error) {
    throw error;
  }
};

const getProjectById = async (id) => {
  try {
    const project = await Project.findById(id);
    if (!project) {
      throw new Error('Project not found');
    }
    return project;
  } catch (error) {
    throw error;
  }
};

const createProject = async (projectData) => {
  try {
    const project = new Project(projectData);
    await project.save();
    return project;
  } catch (error) {
    throw error;
  }
};

const updateProject = async (id, updateData) => {
  try {
    const project = await Project.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!project) {
      throw new Error('Project not found');
    }
    
    return project;
  } catch (error) {
    throw error;
  }
};

const deleteProject = async (id) => {
  try {
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      throw new Error('Project not found');
    }
    return project;
  } catch (error) {
    throw error;
  }
};

const getFeaturedProjects = async () => {
  try {
    const projects = await Project.find({ 
      finished: true, 
      featured: true 
    }).sort({ order: 1, createdAt: -1 });
    return projects;
  } catch (error) {
    throw error;
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
