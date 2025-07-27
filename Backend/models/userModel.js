const  pool  = require('../config/db');

const createUser = async (firstName, lastName, email, phone, hashedPassword, role) => {
      const result = await pool.query(
    `INSERT INTO users (first_name, last_name, email, phone, password, role)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [firstName, lastName, email, phone, hashedPassword, role]
  );
  return result.rows[0];
};

const findUserByEmail = async (email) => {
  const result = await pool.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );
  return result.rows[0];
};

module.exports = { createUser, findUserByEmail };

