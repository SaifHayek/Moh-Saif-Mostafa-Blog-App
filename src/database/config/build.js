const fs = require('fs');
const { join } = require('path');

const conn = require('./connection');

const dbBuild = () => {
  const sql = fs.readFileSync(join(__dirname, 'build.sql')).toString();

  conn.query(sql, (err) => {
    if (err) throw new Error(err);
  });
};

module.exports = { dbBuild };
