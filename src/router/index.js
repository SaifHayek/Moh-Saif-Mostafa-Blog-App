const router = require('express').Router();
const getPost = require('./getPost');
const getCategories = require('./getCategories');


router.use(getPost);
router.use(getCategories);

module.exports = router;
