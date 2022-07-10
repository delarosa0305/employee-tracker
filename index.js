var inquirer = require('inquirer');


const department = [];
const role = [];
const employee = [];

const promptChoice = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'What would you like to do?',
                choices: ['Add Department', 'Add Role', 'Add Employee', 'View Tables', 'Finish']
            }
        ]).then(menuChoice => {
            if (menuChoice.menu === 'Add Department') {
                promptDepartment();
            } if (menuChoice.menu === 'Add Role') {
                promptRole();
            } if (menuChoice.menu === 'Add Employee') {
                promptEmployee();
            } if (menuChoice.menu === 'View Tables') {
                viewTable();
            } if (menuChoice.menu === 'Finish') {
                promptFinish();
            }
        })
}

const promptDepartment = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'department',
                message: 'What is the name of the department?'
            }
        ]).then(departmentData => {
            console.log(departmentData);
            department.push(departmentData);
            promptChoice();
        })
}

const promptRole = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'role',
                message: 'What is the name of the role?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role?'
            },
            {
                type: 'input',
                name: 'workplace',
                message: 'Which department does the role belong to?'
            },
        ]).then(roleData => {
            console.log(roleData);
            role.push(roleData);
            promptChoice();
        })
}

const promptEmployee = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: "What is the employee's first name?"
            },
            {
                type: 'input',
                name: 'lastName',
                message: "What is the employee's first name?"
            },
            {
                type: 'input',
                name: 'employeeRole',
                message: "What is the employee's role?"
            },
            {
                type: 'input',
                name: 'manager',
                message: "Who is employee's manager?"
            }
        ]).then(employeeData => {
            console.log(employeeData);
            employee.push(employeeData);
            promptChoice();
        })
}
const promptFinish = () => {
    console.table(department, role, employee);
}

const viewTable = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'table',
                message: 'Which tables would you like to view?',
                choices: ['View Departments', 'View Roles', 'View Empoyees']
            }
        ]).then(tableChoice => {
            if (tableChoice.table === 'Add Employee') {
                viewDepartment();
            } if (tableChoice.table === 'View Tables') {
                viewRole();
            } if (tableChoice.table === 'Finish') {
                viewEmployee();
            }
            promptChoice();
        })
}

const viewDepartment = () => {
    promptChoice();
}

const viewRole = () => {
    promptChoice();
}

const viewEmployee = () => {
    promptChoice();
}

promptChoice();