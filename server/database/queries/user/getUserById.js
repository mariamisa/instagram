const connection = require('../../config/connection');

const getUserById = (id) => {
  const sql = {
    text: 'SELECT * FROM users WHERE id=$1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getUserById;
