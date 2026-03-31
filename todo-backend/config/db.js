
const mysql = require("mysql2");

const db = mysql.createPool({
 host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

db.query(`
  CREATE TABLE IF NOT EXISTS todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    isCompleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`, (err) => {
  if (err) {
    console.error("❌ Table creation error:", err);
  } else {
    console.log("✅ Todos table ready");
  }
});

db.getConnection((err, connection) => {
  if (err) {
    console.error(" DB Error:", err.message);
  } else {
    console.log(" MySQL Connected");
    connection.release();
  }
});

module.exports = db;