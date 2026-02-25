const crypto = require("crypto");

// CATEGORY 10 — Weak Crypto
function hash(password) {
    return crypto.createHash("md5")
        .update(password)
        .digest("hex");
}

// CATEGORY 18 — Hardcoded Encryption Key
const ENCRYPTION_KEY = "mysecretkey";

module.exports = { hash, ENCRYPTION_KEY };
