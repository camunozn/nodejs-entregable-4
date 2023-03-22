const { Router } = require('express');
const chatController = require('../controllers/chat.controller');

const router = Router();

router
  .route('/')
  .get(chatController.getAllChats)
  .post(chatController.createChat);

router
  .route('/:id')
  .get(chatController.getChat)
  .delete(chatController.deleteChat);

module.exports = router;
