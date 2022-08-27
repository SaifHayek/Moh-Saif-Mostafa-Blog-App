const router = require('express').Router();

const { getCategories } = require('../controller');

router.get('/categories', getCategories);

module.exports = router;
