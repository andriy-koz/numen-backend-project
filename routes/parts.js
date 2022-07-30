const express = require('express');
const { body } = require('express-validator');
const {
  getPartsList,
  getPart,
  addPart,
  updatePart,
  deletePart,
} = require('../controllers/parts');
const { checkId } = require('../middlewares/parts');

const router = express.Router();

router.get('/', getPartsList);
router.get('/:id', checkId, getPart);
router.post('/', body('name').isLength({ min: 1 }), addPart);
router.patch('/:id', checkId, updatePart);
router.delete('/:id', checkId, deletePart);

module.exports = router;
