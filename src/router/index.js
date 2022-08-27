const router = require('express').Router();
const getPost = require('./getPost');
const getCategories = require('./getCategories');
const insertCategories = require('./insertCategories');

router.use(getPost);
router.use(getCategories);
router.use(insertCategories);

module.exports = router;
