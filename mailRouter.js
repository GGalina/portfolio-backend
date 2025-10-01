const express = require('express');
const router = express.Router();
const { validateEmailSchema } = require('./middleware');
const { sendEmail } = require('./controller');

router.post('/send-email', validateEmailSchema, sendEmail);

module.exports = router;