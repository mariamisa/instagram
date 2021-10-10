const { object, string } = require('yup');

const { boomify } = require('../../utils');

const signinValidation = async (req, res, next) => {
  try {
    const signinSchema = object().shape({
      email: string().email().required(),
      password: string()
        .min(8, 'Password must be at least 8 char')
        .required('Password is required'),
    });

    await signinSchema.validate(req.body, {
      abortEarly: false,
    });
    next();
  } catch (error) {
    next(boomify(400, error.errors[0]));
  }
};

module.exports = signinValidation;
