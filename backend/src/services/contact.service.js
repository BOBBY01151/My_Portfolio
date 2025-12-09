const Contact = require('../models/Contact');

const createContact = async (contactData) => {
  const contact = new Contact(contactData);
  await contact.save();
  return contact;
};

const getAllContacts = async (options = {}) => {
  const { read, replied, sortBy = '-createdAt', limit, skip } = options;
  
  const query = {};
  if (read !== undefined) query.read = read;
  if (replied !== undefined) query.replied = replied;
  
  let queryBuilder = Contact.find(query).sort(sortBy);
  
  if (skip) queryBuilder = queryBuilder.skip(skip);
  if (limit) queryBuilder = queryBuilder.limit(limit);
  
  const contacts = await queryBuilder.exec();
  const total = await Contact.countDocuments(query);
  
  return { contacts, total };
};

const getContactById = async (id) => {
  const contact = await Contact.findById(id);
  if (!contact) {
    throw new Error('Contact message not found');
  }
  return contact;
};

const markAsRead = async (id) => {
  const contact = await Contact.findByIdAndUpdate(
    id,
    { read: true },
    { new: true }
  );
  if (!contact) {
    throw new Error('Contact message not found');
  }
  return contact;
};

const markAsReplied = async (id) => {
  const contact = await Contact.findByIdAndUpdate(
    id,
    { replied: true, read: true },
    { new: true }
  );
  if (!contact) {
    throw new Error('Contact message not found');
  }
  return contact;
};

const deleteContact = async (id) => {
  const contact = await Contact.findByIdAndDelete(id);
  if (!contact) {
    throw new Error('Contact message not found');
  }
  return contact;
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  markAsRead,
  markAsReplied,
  deleteContact
};

