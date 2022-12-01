const { verifyToken } = require('../../utils/jwt');

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const { id } = await verifyToken(token);
    res.locals.id = id;
    return next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authMiddleware;
