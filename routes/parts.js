const express = require('express');
const {
  getPartsList,
  getPart,
  addPart,
  updatePart,
  deletePart,
} = require('../controllers/parts');

const router = express.Router();

router.get('/', getPartsList);
router.get('/:id', getPart);
router.post('/', addPart);
router.patch('/:id', updatePart);
router.delete('/:id', deletePart);

module.exports = router;
