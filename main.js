import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
//Calculation Function 
let Calculation = async () => {
    console.log(figlet.textSync("CALCULATOR"));
    let CalculationData = await inquirer.prompt([
        {
            name: "Value1",
            type: "number",
            message: chalk.green("Please Enter Your First Number: "),
        },
        {
            name: "Operation",
            type: "number",
            message: chalk.green("Press 1 For Addition (+):  \n Press 2 For Subtraction(-): \n Press 3 for Division(÷): \n Press 4 For Multiplication(x): \n Press 5 For Modulo(%): \n Please Select An Operation From 1 to 5: ")
        },
        {
            name: "Value2",
            type: "number",
            message: chalk.green("Please Enter Your Second Number: "),
        }
    ]);
    switch (CalculationData.Operation) {
        case 1:
            console.log(chalk.green(`The Answer Of ${CalculationData.Value1} + ${CalculationData.Value2} is = ${CalculationData.Value1 + CalculationData.Value2}`));
            break;
        case 2:
            console.log(chalk.green(`The Answer Of ${CalculationData.Value1} - ${CalculationData.Value2} is = ${CalculationData.Value1 - CalculationData.Value2}`));
            break;
        case 3:
            console.log(chalk.green(`The Answer Of ${CalculationData.Value1} ÷ ${CalculationData.Value2} is = ${CalculationData.Value1 / CalculationData.Value2}`));
            break;
        case 4:
            console.log(chalk.green(`The Answer Of ${CalculationData.Value1} x ${CalculationData.Value2} is = ${CalculationData.Value1 * CalculationData.Value2}`));
            break;
        case 5:
            console.log(chalk.green(`The Answer Of ${CalculationData.Value1} % ${CalculationData.Value2} is = ${CalculationData.Value1 % CalculationData.Value2}`));
            break;
        default:
            console.log(chalk.green("Your Input Is Incorrect"));
            break;
    }
};
//Main Function
let main = async () => {
    do {
        await Calculation();
        var repeateCalculation = await inquirer.prompt([
            {
                name: "repeate",
                type: "string",
                message: "Do You want to perform calculation again? Y/N : ",
            },
        ]);
    } while (repeateCalculation.repeate == "Y" || repeateCalculation.repeate == "y");
};
//Calling Main Function
await main();
