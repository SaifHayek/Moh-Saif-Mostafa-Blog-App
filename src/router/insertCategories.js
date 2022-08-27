const router = require('express').Router();

const { insertCategories } = require('../controller');

router.post('/insertCategory', insertCategories);

module.exports = router;
