const mongoose = require('mongoose');

const cvSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
    trim: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  fileId: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  },
  mimeType: {
    type: String,
    required: true
  },
  version: {
    type: Number,
    default: 1
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Ensure only one active CV at a time
cvSchema.pre('save', async function(next) {
  if (this.isActive && this.isNew) {
    await mongoose.model('CV').updateMany(
      { isActive: true },
      { isActive: false }
    );
  }
  next();
});

module.exports = mongoose.model('CV', cvSchema);

