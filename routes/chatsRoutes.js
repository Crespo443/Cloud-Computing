const express = require('express');
const router = express.router();
const asycnHandler = require('express-async-handler');

router.post('/',asycnHandler())
router.get('/:chatId',asycnHandler())