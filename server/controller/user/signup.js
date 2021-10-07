const { hash } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const { getUserByEmail, createNewUser } = require("../../database/queries");

const { promiseJWT, boomify } = require("../../utils");

const signupController = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    const {
      rows: [checkedUser],
    } = await getUserByEmail({
      email,
    });

    if (checkedUser) {
      throw boomify(409, "User already exist.");
    }

    const hashedPassword = await hash(password, 10);

    const {
      rows: [id],
    } = await createNewUser({
      ...req.body,
      avatar: `https://avatar.oxro.io/avatar.svg?name=${username[0]}`,
      password: hashedPassword,
    });

    const token = await promiseJWT(sign, {
      id,
      username,
    });

    res.status(201).cookie("token", token).json({
      statusCode: 201,
      message: "Signed up successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signupController;
