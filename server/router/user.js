const router = require('express').Router();

const { isAuthController } = require('../controller');

router.get('/is-auth', isAuthController);

module.exports = router;
