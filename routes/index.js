const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
  res.json({ message: 'Registro de piezas' });
});

module.exports = router;
