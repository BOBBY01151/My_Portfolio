const authService = require('../services/auth.service');
const { successResponse, errorResponse } = require('../utils/response');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await authService.login(username, password);
    
    successResponse(res, result, 'Login successful');
  } catch (error) {
    errorResponse(res, error.message, 401);
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
