const contactService = require('../services/contact.service');
const { successResponse, errorResponse } = require('../utils/response');

const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return errorResponse(res, 'All fields are required', 400);
    }
    
    const contact = await contactService.createContact({
      name,
      email,
      subject,
      message
    });
    
    successResponse(res, contact, 'Message sent successfully', 201);
  } catch (error) {
    errorResponse(res, error.message, 400);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const { read, replied, sortBy, limit, skip } = req.query;
    
    const options = {};
    if (read !== undefined) options.read = read === 'true';
    if (replied !== undefined) options.replied = replied === 'true';
    if (sortBy) options.sortBy = sortBy;
    if (limit) options.limit = parseInt(limit);
    if (skip) options.skip = parseInt(skip);
    
    const result = await contactService.getAllContacts(options);
    successResponse(res, result, 'Contacts retrieved successfully');
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

const getContactById = async (req, res) => {
  try {
    const contact = await contactService.getContactById(req.params.id);
    successResponse(res, contact, 'Contact retrieved successfully');
  } catch (error) {
    errorResponse(res, error.message, 404);
  }
};

const markAsRead = async (req, res) => {
  try {
    const contact = await contactService.markAsRead(req.params.id);
    successResponse(res, contact, 'Contact marked as read');
  } catch (error) {
    errorResponse(res, error.message, 404);
  }
};

const markAsReplied = async (req, res) => {
  try {
    const contact = await contactService.markAsReplied(req.params.id);
    successResponse(res, contact, 'Contact marked as replied');
  } catch (error) {
    errorResponse(res, error.message, 404);
  }
};

const deleteContact = async (req, res) => {
  try {
    await contactService.deleteContact(req.params.id);
    successResponse(res, null, 'Contact deleted successfully');
  } catch (error) {
    errorResponse(res, error.message, 404);
  }
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  markAsRead,
  markAsReplied,
  deleteContact
};

