const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer.prompt([
    {
        name: "p1",
        message: "Qual seu nome?"
    },
    {
        name: "p2",
        message: "Qual sua idade?"
    }
]).then((answers) => {
    
if(!answers.p1 || !answers.p2) {
    throw new Error("Nome e idade são obrigatórios");
}

    console.log(chalk.bgYellow.black.bold(`Nome: ${answers.p1} - Idade: ${answers.p2}`));
}).catch((err) => {
    console.log(err);
});

