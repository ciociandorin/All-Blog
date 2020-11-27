const express = require('express');
const router = express.Router();

const ctrUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrUser.register);
router.post('/authenticate', ctrUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrUser.userProfile);

module.exports = router;