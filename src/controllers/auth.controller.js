const AuthServices = require('../services/auth.services');
const UserServices = require('../services/user.services');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const singUp = async (req, res, next) => {
  try {
    const newUser = req.body;
    const data = await UserServices.createOne(newUser);
    res.status(201).json(data);

    const { id, email, username } = data;
    const token = await AuthServices.getToken({ id, email, username });
  } catch (error) {
    next(error);
  }
};
