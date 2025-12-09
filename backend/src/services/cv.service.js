const CV = require('../models/CV');
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');

// Get GridFS bucket
const getGridFSBucket = () => {
  const conn = mongoose.connection.db;
  return new GridFSBucket(conn, { bucketName: 'cvFiles' });
};

const saveCV = async (file) => {
  // Deactivate all existing CVs
  await CV.updateMany({ isActive: true }, { isActive: false });
  
  const bucket = getGridFSBucket();
  const timestamp = Date.now();
  const fileName = `CV_${timestamp}_${file.originalname}`;
  
  // Upload file to GridFS
  return new Promise((resolve, reject) => {
    const uploadStream = bucket.openUploadStream(fileName, {
      contentType: file.mimetype,
      metadata: {
        originalName: file.originalname
      }
    });
    
    uploadStream.on('finish', async () => {
      try {
        // Save CV record to database
        const cv = new CV({
          fileName: file.originalname,
          fileUrl: `/api/cv/download`, // Use API endpoint
          fileId: uploadStream.id.toString(),
          fileSize: file.size,
          mimeType: file.mimetype,
          version: await CV.countDocuments() + 1,
          isActive: true
        });
        
        await cv.save();
        resolve(cv);
      } catch (error) {
        reject(error);
      }
    });
    
    uploadStream.on('error', reject);
    uploadStream.end(file.buffer);
  });
};

const getActiveCV = async () => {
  const cv = await CV.findOne({ isActive: true }).sort({ createdAt: -1 });
  if (!cv) {
    throw new Error('No CV found');
  }
  return cv;
};

const getCVFile = async () => {
  const cv = await getActiveCV();
  const bucket = getGridFSBucket();
  
  return new Promise((resolve, reject) => {
    const downloadStream = bucket.openDownloadStream(new mongoose.Types.ObjectId(cv.fileId));
    const chunks = [];
    
    downloadStream.on('data', (chunk) => {
      chunks.push(chunk);
    });
    
    downloadStream.on('end', () => {
      const buffer = Buffer.concat(chunks);
      resolve({
        buffer: buffer,
        fileName: cv.fileName,
        mimeType: cv.mimeType
      });
    });
    
    downloadStream.on('error', (error) => {
      reject(new Error('CV file not found in database'));
    });
  });
};

const getAllCVs = async () => {
  return await CV.find().sort({ createdAt: -1 });
};

const deleteCV = async (id) => {
  const cv = await CV.findById(id);
  if (!cv) {
    throw new Error('CV not found');
  }
  
  // Delete file from GridFS
  try {
    const bucket = getGridFSBucket();
    await bucket.delete(new mongoose.Types.ObjectId(cv.fileId));
  } catch (error) {
    console.error('Error deleting CV file from GridFS:', error);
  }
  
  // Delete from database
  await CV.findByIdAndDelete(id);
  return cv;
};

module.exports = {
  saveCV,
  getActiveCV,
  getCVFile,
  getAllCVs,
  deleteCV
};

