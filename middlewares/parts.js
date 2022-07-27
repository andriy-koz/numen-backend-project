const Part = require('../models/partsModel');

exports.checkId = async (req, res, next) => {
  try {
    const validId = await Part.findById(req.params.id);
    if (validId) next();
  } catch (err) {
    res.status(404).json({ message: 'ID not found!' });
  }
};
