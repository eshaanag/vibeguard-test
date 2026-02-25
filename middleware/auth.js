// CATEGORY 14 — No Authentication Middleware
module.exports = (req, res, next) => {
    // Empty middleware, does nothing to verify auth
    next();
};
