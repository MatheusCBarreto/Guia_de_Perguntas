const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let nome = 'Matheus';
  let lang = 'JavaScript';
  let exibirMsg = false;
  res.render('index', {
    nome: nome,
    lang: lang,
    empresa: 'Guia do programador',
    inscritos: 8000,
    msg: exibirMsg,
  });
});

app.listen(8080, () => {
  console.log('Servidor iniciado com sucesso!');
});
