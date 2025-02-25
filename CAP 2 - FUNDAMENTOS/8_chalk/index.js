const chalk = require("chalk");

const nota = 3;

if (nota >= 7) {
  console.log(chalk.green("Parabens voce foi Aprovado"));
} else {
  console.log(chalk.bgRed.black.bold("Reprovado"));
}
