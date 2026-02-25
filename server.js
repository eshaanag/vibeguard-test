const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

// CATEGORY 12 — CORS Misconfiguration
app.use(cors({
    origin: "*"
}));

const users = require('./models/users');

// CATEGORY 16 — Plaintext Session Storage
const sessions = {
    "session1": {
        user: "admin",
        password: "admin123"
    }
};

// CATEGORY 17 — Debug Endpoint Exposing Data
app.get("/debug", (req, res) => {
    res.send(process.env);
});

// CATEGORY 11 — Hardcoded JWT Token
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

// Load routes
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');

app.use('/api', userRoutes);
app.use('/api', adminRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
