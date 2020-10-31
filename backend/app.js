const express = require('express');
const app = express();

const bodyParser  = require('body-parser');
app.use(bodyParser.json());


const livros = [
  {
    id: 1,
    titulo: 'Hobbit',
    autor: 'J R R Tolkien',
    paginas: 600
  },{
    id: 2,
    titulo:"cu",
    autor:"sua mae",
    paginas: 69
  }
]

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/livraria',(req,res, next)=>{
  const livro = req.body;
  livros.push(livro);
  console.log(livro);
  res.status(201).json({
    mensagem: 'livro inserido'
  })
});

app.use('/api/livraria',(req, res, next)=>{
  res.status(200).json({
    mensagem: "tudo ok",
    livros: livros
  });
});


module.exports = app;
