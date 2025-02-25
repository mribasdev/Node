const fs = require("fs");

console.log("Iniciando leitura do arquivo");

fs.writeFileSync("./arquivo.txt", "Oi");

console.log("Arquivo escrito com sucesso");