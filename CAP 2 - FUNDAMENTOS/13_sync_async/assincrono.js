const fs = require("fs");

console.log("Iniciando leitura do arquivo");

fs.writeFile("./arquivo.txt", "Oi", function (err) {
    setTimeout(function () {
        console.log("Arquivo criado!");
    }, 1000);
});

console.log("Fim");
