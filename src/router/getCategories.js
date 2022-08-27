const router = require('express').Router();
const { getCtegories } = require('../controller');

router.get('/categories', getCtegories);
module.exports = getCtegories;
