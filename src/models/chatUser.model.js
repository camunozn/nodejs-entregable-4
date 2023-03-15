const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const ChatsUsers = db.define(
  'chats_users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    chatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'chat_id',
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ChatsUsers;
