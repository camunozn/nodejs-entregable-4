const UserServices = require('../services/user.services');

exports.getAllUsers = async (req, res, next) => {
  try {
    const data = await UserServices.getAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
};
