const Users = require('./user.model');
const Chats = require('./chat.model');
const Messages = require('./message.model');
const ChatsUsers = require('./chatUser.model');

const initModels = () => {
  // User - ChatUser
  Users.hasMany(ChatsUsers, { foreignKey: 'user_id' });
  ChatsUsers.belongsTo(Users, { foreignKey: 'user_id' });

  // Chats - ChatUser
  Chats.hasMany(ChatsUsers, { foreignKey: 'chat_id' });
  ChatsUsers.belongsTo(Chats, { foreignKey: 'chat_id' });

  // Chats - Messages
  Chats.hasMany(Messages, { foreignKey: 'chat_id' });
  Messages.belongsTo(Chats, { foreignKey: 'chat_id' });

  // Users - Messages
  Users.hasMany(Messages, { foreignKey: 'user_id' });
  Messages.belongsTo(Users, { foreignKey: 'user_id' });
};

module.exports = initModels;
