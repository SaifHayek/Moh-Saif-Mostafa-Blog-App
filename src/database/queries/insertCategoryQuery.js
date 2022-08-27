const connection = require('../config/connection');

const insertCategoryQuery = (categoryData) => connection.query('insert into categories (name,color) values ($1, $2);', [categoryData.name, categoryData.color]);

module.exports = { insertCategoryQuery };
