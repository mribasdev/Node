const fs = require('fs');

fs.readFile("arquivo.txt", "utf-8", (err, data) => {

    if(err) {
        console.log("Erro ao ler o arquivo");
        return;
    }

    console.log(data);

})