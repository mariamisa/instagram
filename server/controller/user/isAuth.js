const { getUserById } = require('../../database/queries');

const isAuthController = async (req, res, next) => {
  const { id: userId } = req.user;
  try {
    const { rows } = await getUserById(userId);

    const [{ id, username, avatar, mobile, location, email }] = rows;
    return res.json({
      statusCode: 200,
      data: {
        id,
        username,
        email,
        avatar,
        mobile,
        location,
      },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = isAuthController;
