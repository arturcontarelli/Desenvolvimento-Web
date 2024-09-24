const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Rota de upload de arquivos usando POST
app.post('/upload', (req, res) => {
    let fileData = req.body.fileData; // Acessando o conteúdo enviado no corpo da requisição (simulação)

    if (!fileData) {
        return res.status(400).send('Nenhum arquivo enviado.');
    }

    console.log('Dados recebidos:', fileData); // Mostra os dados enviados no terminal
    res.status(200).send('Upload simulado com sucesso!');
});

// Rota para página de erro 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
