const express = require('express');
const router = express.Router();

// CATEGORY 4 — Missing Backend Authorization
router.get("/admin", (req, res) => {
    res.send("Admin panel - Sensitive Info Exposed");
});

module.exports = router;
