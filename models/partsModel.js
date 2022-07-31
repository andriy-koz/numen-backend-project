const { Schema, model } = require('mongoose');

const partSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  model: {
    required: true,
    type: String,
  },
  code: {
    unique: true,
    required: true,
    type: String,
  },
});

const Part = model('Part', partSchema);

module.exports = Part;
