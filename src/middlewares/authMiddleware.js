const authMiddleware = (req, res, next) => {
    console.log('Auth token required');
    next();
}
module.exports = authMiddleware;