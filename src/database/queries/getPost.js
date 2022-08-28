const connection = require('../config/connection');

const getPostsQuery = () => connection
  .query('select posts.id, posts.title, posts.content, posts.username,posts.username_img,posts.date_time,json_agg((categories.id,categories.name,categories.color)) as my_categories from posts join post_category on posts.id = post_category.post_id join categories on categories.id = post_category.category_id group by posts.id ;');

module.exports = { getPostsQuery };
