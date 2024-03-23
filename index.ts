#! /usr/bin/env node

import inquirer from "inquirer";
import { env } from "process";
// Asking Question from Users through Inquirer

let answer = await inquirer.prompt([
    {message: "Enter Frist Number", type: "number", name: "fristNumber"},
    {message: "Enter Second Number", type:"number", name: "secondNumber"},
    {
        message: "Select one Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);

// conditional statements if.Else

if(answer.operator === "addition"){
    console.log(answer.fristNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction"){
    console.log(answer.fristNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication"){
    console.log(answer.fristNumber * answer.secondNumber);
}
else if (answer.operator === "Division"){
    console.log(answer.fristNumber / answer.secondNumber);
}
else{
    console.log("invalid input")
}