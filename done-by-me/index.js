const inquirer = require('inquirer');
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'your_database_name'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

console.log('Welcome to the Employee Management System!');
console.log('Please select an option:');
console.log('1. View all departments');
console.log('2. View all roles');
console.log('3. View all employees');
console.log('4. Add a department');
console.log('5. Add a role');
console.log('6. Add an employee');
console.log('7. Update an employee role');

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
});



if (input === '1') {
  const query = 'SELECT * FROM departments';
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.table(results);
    connection.end();
  });
}
