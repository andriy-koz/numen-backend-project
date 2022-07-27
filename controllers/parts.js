const Part = require('../models/partsModel');

exports.getPartsList = async (_, res) => {
  const partsList = await Part.find({});
  res.json({ list: partsList });
};

exports.getPart = async (req, res) => {
  const part = await Part.findById(req.params.id);
  res.json({ part });
};

exports.addPart = async (req, res) => {
  const newPart = new Part(req.body);
  await newPart.save();
  res.json({ message: 'Saved!' });
};

exports.updatePart = async (req, res) => {
  Part.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

exports.deletePart = async (req, res) => {
  const part = await Part.findByIdAndDelete(req.params.id);
  res.json(part);
};
