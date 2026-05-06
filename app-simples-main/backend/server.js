const express = require('express');
const app = express();
const porta = 3000;

app.get('/api/status', (req, res) => {
    res.json({ 
        mensagem: "Servidor de Notas Operacional", 
        timestamp: new Date() 
    });
});

app.listen(porta, () => {
    console.log(`Backend rodando em http://localhost:${porta}`);
});