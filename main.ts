import inquirer from "inquirer";
import chalk from "chalk";
//Calculation Function 
let Calculation=async () => {
    let CalculationData = await inquirer.prompt([
        {
            name: "Value1",
            type: "number",
            message: chalk.green("Please Enter Your First Number: "),
        },
        {
            name:"Operation",
            type: "number",
            message:chalk.green("Press 1 For Addition (+):  \n Press 2 For Subtraction(-): \n Press 3 for Division(÷): \n Press 4 For Multiplication(x): \n Press 5 For Modulo(%): \n Your Input: ")
        },
        {
            name: "Value2",
            type: "number",
            message: chalk.green("Please Enter Your Second Number: "),
        }
    ]);
    if(CalculationData.Operation ===1){
        console.log(chalk.green(`The Answer Of ${CalculationData.Value1} + ${CalculationData.Value2} is = ${CalculationData.Value1 + CalculationData.Value2}`));
    }else if(CalculationData.Operation ===2){
        console.log(chalk.green(`The Answer Of ${CalculationData.Value1} - ${CalculationData.Value2} is = ${CalculationData.Value1 - CalculationData.Value2}`));
    }else if(CalculationData.Operation ===3){
        console.log(chalk.green(`The Answer Of ${CalculationData.Value1} ÷ ${CalculationData.Value2} is = ${CalculationData.Value1 / CalculationData.Value2}`));
    }else if(CalculationData.Operation ===4){
        console.log(chalk.green(`The Answer Of ${CalculationData.Value1} x ${CalculationData.Value2} is = ${CalculationData.Value1 * CalculationData.Value2}`));
    }else if(CalculationData.Operation ===5){
        console.log(chalk.green(`The Answer Of ${CalculationData.Value1} % ${CalculationData.Value2} is = ${CalculationData.Value1 % CalculationData.Value2}`));
    }
    else{
        console.log(chalk.green("Your Input Is Incorrect"));
    }
}
//Main Function
 let main= async()=>{
    do{
    await Calculation();
    var repeateCalculation = await inquirer.prompt([
      {
        name: "repeate",
        type: "string",
        message: "Do You want to perform calculation again? Y/N : ",
      },
    ]);
    }while(repeateCalculation.repeate=="Y"|| repeateCalculation.repeate=="y");
}
//Calling Main Function
await main();