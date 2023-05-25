const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');

//conectando com o banco de dados
connection
.authenticate()
.then(() => {
  console.log('conexão com o banco de dados bem sucedida!');
})
.catch((msgError) =>{
  console.log(msgError.mensage);
})

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  Pergunta.findAll({raw: true}).then((perguntas) => {
    res.render('index', {
      perguntas: perguntas,
    });

  })
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
})

app.post("/salvarperguntas", (req, res) => {
  
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  
  Pergunta.create( {
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect("/");
  })
  
});


app.listen(8080, () => {
  console.log('Servidor iniciado com sucesso!');
});
