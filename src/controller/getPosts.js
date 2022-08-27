const  { getPostsQuery } = require('../database/queries');

const getPosts = (req, res) => {
 
  getPostsQuery().then((data) => {
    // console.log(data.rows);
    res.json(data.rows);
});
};

module.exports = getPosts;
