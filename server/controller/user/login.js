const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const { getUserByEmail } = require('../../database/queries');

const { promiseJWT, boomify } = require('../../utils');

const signupController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { rows } = await getUserByEmail({
      email,
    });
    const [checkedUser] = rows;

    if (!checkedUser) {
      throw boomify(409, 'User not exist.');
    }

    const { id, username, password: userPassword } = checkedUser;

    const isPassword = await compare(password, userPassword);
    if (!isPassword) throw boomify(400, 'Invalid email/password.');
    const token = await promiseJWT(sign, {
      id,
      username,
    });

    res.status(200).cookie('token', token).json({
      statusCode: 200,
      message: 'Signed in successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signupController;
