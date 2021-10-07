const JWT = require('jsonwebtoken');
const { promiseJWT, boomify } = require('../../utils');

const protectRoute = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    req.user = await promiseJWT(JWT.verify, token);
    next();
  } catch (error) {
    res.clearCookie('token');
    next(boomify(401, 'Unauthenticated'));
  }
};

module.exports = protectRoute;
