const connection = require('../config/connection')

const getCategoriesQuery = ()=>{
  return connection.query('select * from categories ;')
}

module.exports ={getCategoriesQuery}