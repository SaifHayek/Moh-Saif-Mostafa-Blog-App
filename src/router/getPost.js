const router = require('express').Router();
const { getPosts } = require('../controller');

router.get('/posts', getPosts);
module.exports = router;
