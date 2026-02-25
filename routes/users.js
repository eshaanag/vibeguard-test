const express = require('express');
const router = express.Router();
const users = require('../models/users');

// CATEGORY 3 — IDOR (Direct Object Reference)
router.get("/user/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    res.send(user);
});

module.exports = router;
