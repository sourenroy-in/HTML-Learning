
const { faker } = require('@faker-js/faker');
const mysql = require( 'mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'7407',
  database:'delta_app',
});
try {
connection.query("show tables",(err, res) =>{
    if (err) throw err;
    console.log(res);
});
} catch(err) {
    console.log(err);
}

connection.end();

let getRandomUser = () =>  {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

