const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUsers } = require('../service/userService');

router.post('/register', (req, res) => {
  const { username, password, favorecido } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Informe usuário e senha.' });
  const result = registerUser({ username, password, favorecido });
  if (result.error) return res.status(409).json(result);
  res.status(201).json(result);
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Informe usuário e senha.' });
  const result = loginUser({ username, password });
  if (result.error) return res.status(401).json(result);
  res.json(result);
});

router.get('/', (req, res) => {
  res.json(getUsers());
});

module.exports = router;