const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "",
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
    const choice1 = "choice1"
    const choice2 = "choice2"
    const choice3 = "choice3"

    inquirer    
        .prompt({
            name: "q1",
            type: "rawlist",
            message: "Welcome. Please choose your course of action.",
            choices: [
                choice1,
                choice2,
                choice3,
                "EXIT"
            ],
        })
        .then((answer) => {
            switch (answer.q1) {
                
                case choice1:
                    return function1();
                
                case choice2:
                    return function2();

                case choice3:
                    return function3();

                default:
                    console.log("THANK YOU FOR YOUR HARD WORK. SEE YOU AGAIN SOON :D");
                    // connection.end();
            }
        })
}

function function1 () {
    console.log("You have been directed to function1 ");
    
    // to call back to main function after this functions prompts have been finalized
    runApp();
}

function function2 () {
    console.log("You have been directed to function2");
    
    // to call back to main function after this functions prompts have been finalized
    runApp();
}

function function3 () {
    console.log("You have been directed to function3");
    
    // to call back to main function after this functions prompts have been finalized.
    runApp();
}



