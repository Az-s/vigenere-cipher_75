const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;

const password = 'abc';

app.post('/encode', (req, res) => {
    res.send({ "encoded": Vigenere.Cipher(req.body.password).crypt(req.body.message) });
});

app.post('/decode', (req, res) => {
    res.send({ "decoded": Vigenere.Decipher(req.body.password).crypt(req.body.message) });
});

app.listen(port, () => {
    console.log('Server started on http:localhost:' + port)
});