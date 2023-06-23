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

function displayMenu() {
    console.log('Welcome to the Employee Management System!');
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'option',
          message: 'Please select an option:',
          choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
          ]
        }
      ])
      .then((answers) => {
        handleOption(answers.option);
      });
  }
  
  function handleOption(option) {
    switch (option) {
      case 'View all departments':
       
        break;
      case 'View all roles':
       
        break;
      case 'View all employees':
       
        break;
      case 'Add a department':
       
        break;
      case 'Add a role':
       
        break;
      case 'Add an employee':
       
        break;
      case 'Update an employee role':
       
        break;
      case 'Exit':
        connection.end();
        return;
    }
  
    
    displayMenu();
  }
  
  
  displayMenu();
  
