const authService = require('../services/auth.service');
const { successResponse, errorResponse } = require('../utils/response');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return errorResponse(res, 'Username and password are required', 400);
    }

    // Check if JWT_SECRET is configured
    if (!process.env.JWT_SECRET) {
      console.error('❌ JWT_SECRET is not configured in environment variables');
      return errorResponse(res, 'Server configuration error. Please contact administrator.', 500);
    }

    const result = await authService.login(username, password);
    
    successResponse(res, result, 'Login successful');
  } catch (error) {
    console.error('❌ Login controller error:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    
    // Don't expose internal errors in production
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? error.message 
      : 'Invalid credentials';
    
    errorResponse(res, errorMessage, 401);
  }
};

const getMe = async (req, res) => {
  try {
    const user = await authService.getCurrentUser(req.user.id);
    successResponse(res, user, 'User retrieved successfully');
  } catch (error) {
    errorResponse(res, error.message, 404);
  }
};

const logout = async (req, res) => {
  // Since we're using JWT, logout is handled on the client side
  // by removing the token from storage
  successResponse(res, null, 'Logout successful');
};

module.exports = {
  login,
  getMe,
  logout
};
