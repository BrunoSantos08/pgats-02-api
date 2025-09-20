const express = require('express');
const router = express.Router();
const { transfer, getTransfers } = require('../service/transferService');

router.post('/', (req, res) => {
  const { from, to, value } = req.body;
  if (!from || !to || typeof value !== 'number') return res.status(400).json({ error: 'Dados inválidos.' });
  const result = transfer({ from, to, value });
  if (result.error) return res.status(400).json(result);
  res.json(result);
});

router.get('/', (req, res) => {
  res.json(getTransfers());
});

module.exports = router;