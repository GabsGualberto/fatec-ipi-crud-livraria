const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const Livro = require('./models/livro');
const mongoose= require('mongoose');
const livrariaRoutes = require('./rotas/livros');

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://fatec-ipi:798546@cluster0.nzu5y.mongodb.net/fatec_ipi?retryWrites=true&w=majority')
.then(()=> console.log('conexao ok'))
.catch((e)=> console.log('Falha na conexao ' + e));
const livros = [
  {
    id: '1',
    titulo: 'Hobbit',
    autor: 'J R R Tolkien',
    paginas: '600'
  }
]

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});


app.use('/api/livraria',livrariaRoutes);
module.exports = app;
