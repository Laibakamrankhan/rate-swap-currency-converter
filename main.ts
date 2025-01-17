#! /usr/bin/env node
import inquirer from "inquirer";
const currency: any = {
    USD: 1, //base currency
    EUR: 0.91,
    TRY: 32.03,
    INR: 74.57,
    PKR: 280
};
let userAnswer = await inquirer.prompt(
    [
       {
         name: "from",
         message: "Enter from Currency",
         type: "list",
         choices:["USD" , "EUR" , "TRY" ,"INR" , "PKR"]
       },
        {
          name: "to",
          message: "Enter from Currency",
          type: "list",
          choices:["USD" , "EUR" , "TRY" ,"INR" , "PKR"]
        },
        {
            name: "amount",
            message: "Enter your Amount",
            type: "number"
        }
   ]
)
let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount 
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);





