const Experience = require('../models/Experience');

const getAllExperiences = async () => {
  try {
    const experiences = await Experience.find()
      .sort({ order: 1, startDate: -1 });
    return experiences;
  } catch (error) {
    throw error;
  }
};

const getExperienceById = async (id) => {
  try {
    const experience = await Experience.findById(id);
    if (!experience) {
      throw new Error('Experience not found');
    }
    return experience;
  } catch (error) {
    throw error;
  }
};

const createExperience = async (experienceData) => {
  try {
    const experience = new Experience(experienceData);
    await experience.save();
    return experience;
  } catch (error) {
    throw error;
  }
};

const updateExperience = async (id, updateData) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!experience) {
      throw new Error('Experience not found');
    }
    
    return experience;
  } catch (error) {
    throw error;
  }
};

const deleteExperience = async (id) => {
  try {
    const experience = await Experience.findByIdAndDelete(id);
    if (!experience) {
      throw new Error('Experience not found');
    }
    return experience;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience
};
