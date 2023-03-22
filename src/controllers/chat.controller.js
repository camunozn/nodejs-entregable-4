const ChatServices = require('../services/chat.services');

exports.getAllChats = async (req, res, next) => {
  try {
    const data = await ChatServices.getAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

exports.getChat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await ChatServices.getOne(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

exports.createChat = async (req, res, next) => {
  try {
    const newChat = req.body;
    const data = await ChatServices.createOne(newChat);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

exports.deleteChat = async (req, res, next) => {
  try {
    const { id } = req.params;
    await ChatServices.deleteOne(id);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};
