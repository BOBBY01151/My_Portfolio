const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { errorResponse } = require('../utils/response');

const generateToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not configured');
  }
  
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });
};

const login = async (username, password) => {
  try {
    if (!username || !password) {
      throw new Error('Username and password are required');
    }

    // Find user by username or email (case-insensitive for email)
    const user = await User.findOne({
      $or: [
        { username: username.trim() },
        { email: username.trim().toLowerCase() }
      ]
    });

    if (!user) {
      console.log(`Login attempt failed: User not found for "${username}"`);
      throw new Error('Invalid credentials');
    }

    console.log(`User found: ${user.email}, checking password...`);

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.log(`Login attempt failed: Password mismatch for user "${user.email}"`);
      throw new Error('Invalid credentials');
    }

    console.log(`Login successful for user: ${user.email}`);

    // Generate token
    const token = generateToken(user._id);

    return {
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      },
      token
    };
  } catch (error) {
    console.error('Login error:', error.message);
    throw error;
  }
};

const getCurrentUser = async (userId) => {
  try {
    const user = await User.findById(userId).select('-password');
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
  getCurrentUser,
  generateToken
};
