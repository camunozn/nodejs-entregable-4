const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Chats = db.define(
  'chats',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
    type: {
      type: DataTypes.ENUM('single', 'group'),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Chats;
