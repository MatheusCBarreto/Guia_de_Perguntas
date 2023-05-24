const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.render('index');
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
})

app.post("/salvarperguntas", (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  res.send("Formulário recebido!");
});


app.listen(8080, () => {
  console.log('Servidor iniciado com sucesso!');
});
