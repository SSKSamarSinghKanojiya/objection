const User = require('../models/User');

// Get all users (admin only)
exports.getAllUsers = async (req, res) => {
  const users = await User.query().select('id', 'email', 'role');
  res.json(users);
};

// Get current user
exports.getCurrentUser = async (req, res) => {
  const user = await User.query().findById(req.user.id).select('id', 'email', 'role');
  res.json(user);
};

// Update current user
exports.updateCurrentUser = async (req, res) => {
  const updatedUser = await User.query().patchAndFetchById(req.user.id, req.body);
  res.json(updatedUser);
};

// Delete current user
exports.deleteCurrentUser = async (req, res) => {
  await User.query().deleteById(req.user.id);
  res.json({ message: 'Account deleted' });
};
