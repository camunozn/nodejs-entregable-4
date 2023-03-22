const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const chatRoutes = require('./routes/chat.routes');
const userRoutes = require('./routes/user.routes');

initModels();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT = 8000;

db.authenticate()
  .then(() => {
    console.log('DB connection successful');
  })
  .catch(error => console.log(error));

db.sync({ alter: true })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(error => console.log(error));

app.use('api/v1/users', userRoutes);
app.use('/api/v1/chats', chatRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
