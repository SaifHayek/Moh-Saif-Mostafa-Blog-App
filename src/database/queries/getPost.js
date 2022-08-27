const connection = require('../config/connection');

const getPostsQuery = () => connection
  .query('select posts.title, posts.content, posts.username,posts.username_img,posts.date_time,categories.name as category_name,categories.color from posts join post_category on posts.id = post_category.post_id join categories on categories.id = post_category.category_id ;');

module.exports = { getPostsQuery };
