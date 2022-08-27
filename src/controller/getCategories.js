const { getCategoriesQuery } = require("../database/queries");

const getCategories = (req, res) => {
  getCategoriesQuery().then((data) => {
    console.log(data.rows);
    res.json(data.rows);
  });
};

module.exports = getCategories;
