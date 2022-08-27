const { insertCategoryQuery } = require('../database/queries');

const insertCategories = (req, res) => {
  insertCategoryQuery(req.body)
    .then((data) => res.json(data.rows));
};

module.exports = insertCategories;
