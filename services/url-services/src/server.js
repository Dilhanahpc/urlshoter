require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

connectDB();

app.listen(3000, () => {
  console.log('URL Service running on 3000');
});