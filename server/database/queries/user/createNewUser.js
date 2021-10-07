const connection = require("../../config/connection");

const createNewUser = ({
  username,
  email,
  password,
  mobile,
  location,
  avatar,
}) => {
  const sql = {
    text: "INSERT INTO users (email, password,username ,mobile,avatar, location) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;",
    values: [email, password, username, mobile, avatar, location],
  };
  return connection.query(sql);
};

module.exports = createNewUser;
