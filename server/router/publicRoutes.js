const router = require('express').Router();

const {
  signupController,
  loginController,
  logoutController,
} = require('../controller');
const {
  signupValidation,
  loginValidation,
} = require('../middleware/validation');

router.get('/', (req, res) => {
  res.json({
    msg: 'hi from public',
  });
});
router.post('/signup', signupValidation, signupController);
router.post('/signin', loginValidation, loginController);
router.get('/logout', logoutController);

module.exports = router;
