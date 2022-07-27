const mongoose = require('mongoose');

const dbConnection = () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION);
  } catch (error) {
    throw new Error('Could not connect to DB!');
  }
};

module.exports = dbConnection;
