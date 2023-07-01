const MAX_VALUE = 1000000

const valueMiddleware = async (req, res, next) => {
  const value = req.body.totalPrice;
  if (value > MAX_VALUE) {
    res.status(400).json({ message: 'Total value exceeds 1000000' });
  } else {
    return next();
  }
  
};

module.exports = valueMiddleware;
