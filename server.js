const mysql = require("mysql");
const inquirer = require("inquirer");
const ct= require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_info_db",
})

connection.connect((err) => {
    if (err) {
        throw err;
    }
    runApp();
});

function runApp() {
    // initial prompt for users options
    // make their choices variables as to use variables as cases to return functions
    const emplyeeName = "Add Employee Name"
    const viewEmployeeData = "View Employees"
    const removeEmployeeRow = "Remove Employee"
    
    const addDepartmentRow = "Add a Department"
    const viewDepartmentData = "View Departments"
    const removeDepartmentRow = "Remove Department"
    
    const choice7 = "Add a new Role"
    const choice8 = "View All Roles"
    const choice9 = "Add Role"
    const choice10 = "Remove Role"

    inquirer
        .prompt({
            name: "q1",
            type: "rawlist",
            message: "Welcome. Please choose your course of action.",
            choices: [
                emplyeeName,
                viewEmployeeData,
                removeEmployeeRow,
                addDepartmentRow,
                viewDepartmentData,
                removeDepartmentRow,
                choice7,
                choice8,
                choice9,
                choice10,
                "EXIT"
            ],
        })
        .then((answer) => {
            switch (answer.q1) {

                case emplyeeName:
                    return addEmployee();

                case viewEmployeeData:
                    return viewEmployees();

                case removeEmployeeRow:
                    return removeEmployee();

                case addDepartmentRow:
                    return addDepartment();

                case viewDepartmentData:
                    return viewDepartments();

                case removeDepartmentRow:
                    return removeDepartment();

                case choice7:
                    return function7();

                case choice8:
                    return function8();

                case choice9:
                    return function9();

                case choice10:
                    return function10();


                default:
                    console.log("THANK YOU FOR YOUR HARD WORK. SEE YOU AGAIN SOON :D");
                // connection.end();
            }
        })
        .catch(error => {
            console.log("There was an error");
            process.exit(1);
        });

}

function addEmployee() {
    // Prompt that Gets first and last name
    //  adds inputs to employee_table
    // Returns to main function runApp
    return inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "What is their First Name?",
      },
      {
        name: "lastName",
        type: "input",
        message: "What is their Last Name?",
      },
    ])
    .then((answer) => {
      return connection.query(
        "INSERT INTO employee_table SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
        },
        (err) => {
          if (err) {
            throw err;
          }
          console.log("You have been directed to function1 ");
          return runApp();
        }
      );
    });
}

function viewEmployees() {
    // Query to select All fields from employee_table
    connection.query("SELECT * FROM employee_table", (err, res) => {
        if (err){
            throw err;
        }
        console.log(res);
    });
    return runApp();
}

function removeEmployee() {

    // Prompt that selects employee to remove by id
    // Removes row from employee_table
    // Returns to main function runApp
    return inquirer
    .prompt([
      {
        name: "removeRow",
        type: "input",
        message: "What is the id of the employee to REMOVE?",
      },
    ])
    .then((answer) => {
        return connection.query(
            "DELETE FROM employee_table WHERE id_employee = ?",[answer.removeRow],
            (err) => {
              if (err) {
                throw err;
                console.log("You have been directed to function3 ");
              }
               return runApp();
            }
        );
    })
}

function addDepartment() {
    console.log("You have been directed to function4");
    // Prompt that gets department name
    // Adds input to department_table
    // Returns to main function runApp
    return inquirer
    .prompt([
      {
        name: "departmentName",
        type: "input",
        message: "What department would you like to add?",
      },
    ])
    .then((answer) => {
      return connection.query(
        "INSERT INTO department_table SET ?",
        {
          department_name: answer.departmentName,
        },
        (err) => {
          if (err) {
            throw err;
          }
          console.log("You have been directed to function4 ");
          return runApp();
        }
      );
    });
}

function viewDepartments() {
    // Query to select All fields from department_table
    connection.query("SELECT * FROM department_table", (err, res) => {
        if (err){
            throw err;
        }
        console.log(res);
    });
    return runApp();
}

function removeDepartment() {
    // Prompt that retrieves table to remove by id 
    // Removes row from department_table
    // Returns to main function runApp
    return inquirer
    .prompt([
      {
        name: "removeRow",
        type: "input",
        message: "What is the id of the department to REMOVE?",
      },
    ])
    .then((answer) => {
        return connection.query(
            "DELETE FROM department_table WHERE id_department = ?",[answer.removeRow],
            (err) => {
              if (err) {
                throw err;
                console.log("You have been directed to function6 ");
              }
               return runApp();
            }
        );
    })
}

function function7() {
    console.log("you have reached function 7")
    // // Prompt that Gets title and salary
    // // Add inputs to role_table
    // // Returns to main function runApp
    // return inquirer
    // .prompt([
    //   {
    //     name: "roleTitle",
    //     type: "input",
    //     message: "What is the TITLE of the role?",
    //   },
    // //   {
    // //     name: "roleSalary",
    // //     type: "number",
    // //     message: "What is the SALARY of the role?",
    // //   },
    // ])
    // .then((answer) => {
    //   return connection.query(
    //     "INSERT INTO role_table SET ?",
    //     {
    //       title: answer.roleTitle,
    //     //   salary: answer.roleSalary,
    //     },
    //     (err) => {
    //       if (err) {
    //         throw err;
    //       }
    //       return runApp();
    //     }
    //   );
    // });
}

function function8() {
    console.log("You have been directed to function8");

    // to call back to main function after this functions prompts have been finalized.
    runApp();
}

function function9() {
    console.log("You have been directed to function9");

    // to call back to main function after this functions prompts have been finalized.
    runApp();
}

function function10() {
    console.log("You have been directed to function10");

    // to call back to main function after this functions prompts have been finalized.
    runApp();
}



