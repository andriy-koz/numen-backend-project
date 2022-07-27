const express = require('express');
const Part = require('../models/partsModel');

const router = express.Router();

router.get('/', async (_, res) => {
  const partsList = await Part.find({});
  res.json({ list: partsList });
});

router.get('/:id', async (req, res) => {
  const part = await Part.findById(req.params.id);
  res.json({ part });
});

router.post('/', async (req, res) => {
  const newPart = new Part(req.body);
  await newPart.save();
  res.json({ message: 'Saved!' });
});

router.patch('/:id', (req, res) => {
  Part.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.delete('/:id', async (req, res) => {
  const part = await Part.findByIdAndDelete(req.params.id);
  res.json(part);
});

module.exports = router;
