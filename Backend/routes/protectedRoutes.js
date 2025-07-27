const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const allowRoles = require('../middlewares/roleMiddleware');
const router = express.Router();

router.get('/admin', authenticateToken, allowRoles('admin'), (req, res) => {
  res.json({ message: 'Hello Admin!', user: req.user });
});

router.get('/user', authenticateToken, allowRoles('user', 'admin'), (req, res) => {
  res.json({ message: 'Hello User!', user: req.user });
});

module.exports = router;

