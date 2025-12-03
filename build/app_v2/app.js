const http = require('http');    //Chamando biblioteca HTTP nativa do Node.js

const hostname = '0.0.0.0';      //Definindo hostname para aceitar conexões de qualquer IP
const port = process.env.PORT;   //Lendo porta do ambiente (variável de ambiente)

const server = http.createServer((req, res) => {    //Criando servidor HTTP
    res.statusCode = 200;                           //Definindo código de status da resposta
    res.setHeader('Content-Type', 'text/plain');    //Definindo cabeçalho da resposta
    res.end('Hello World');                         //Enviando resposta ao cliente
});

server.listen(port, hostname, () => {                               //Iniciando o servidor e ouvindo na porta e hostname definidos
    console.log(`Server running at http://${hostname}:${port}/`);   //Logando mensagem de sucesso no console
});

process.on('SIGINT', function() {   //Tratando sinal de interrupção (Ctrl+C)
    process.exit();                 //Encerrando o processo
});