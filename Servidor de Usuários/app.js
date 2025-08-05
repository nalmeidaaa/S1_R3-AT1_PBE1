const express = require("express");

const app = express();

const PORT = 8081;

app.listen(
    PORT, ()=>{
        console.log(`Servidor de Usuários rodando na porta ${PORT}`);
    }
);