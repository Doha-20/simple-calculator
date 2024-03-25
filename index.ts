#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first name", type: "number", name: "firstNumber" },
  { message: "Enter second name", type: "number", name: "secondNumber" },
  {
    meessage: "Select one of the operater to perform operation",
    type: "list",
    name: "operater",
    choices: ["Addition","Subtraction","Multiplication","Division"],
  },
]);
console.log(answer)

//condition statment
if (answer.operater === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operater === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operater === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operater === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {console.log("Please Select Valid Calculator");
}