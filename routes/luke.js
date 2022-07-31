const express = require('express');
const { lukeController } = require('../controllers/luke');

const router = express.Router();

router.get('/', lukeController);

module.exports = router;
