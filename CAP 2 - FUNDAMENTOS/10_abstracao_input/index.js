const inquirer = require("inquirer");

inquirer.prompt([
    {
        name: "p1",
        message: "Qual e a primeira nota?"
    },
    {
        name: "p2",
        message: "Qual e a segunda nota?"
    }
]).then((answers) => {
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;
    console.log(`A media das notas e ${media}`);
}).catch((err) => {
    console.log(err);
});