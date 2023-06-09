const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Messages = db.define(
  'messages',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
    chatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'chat_id',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Messages;
