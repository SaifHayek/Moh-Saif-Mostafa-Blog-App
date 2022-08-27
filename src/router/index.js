const router = require('express').Router();
const getPost = require('./getPost');

router.use(getPost);
module.exports = router;
