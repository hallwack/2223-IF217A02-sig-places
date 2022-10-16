const { Pool } = require("pg");

const db = new Pool({
  user: "root",
  password: "root",
  host: "localhost",
  port: 5432,
  database: "geodatabase",
});

db.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
})

module.exports = db
