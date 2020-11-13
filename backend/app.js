const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const Livro = require('./models/livro');
const mongoose= require('mongoose');
const livro = require('./models/livro');
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

app.post('/api/livraria',(req,res, next)=>{
  const livro = new Livro({
    id: req.body.id,
    titulo: req.body.titulo,
    autor: req.body.autor,
    paginas: req.body.paginas
  });
  livro.save()
  .then((documento)=>{
    console.log(`Inserção ok: ${documento}`);
    res.status(201).json({
      mensagem: 'livro inserido',
      id: documento._id
    });
  })
  .catch((erro)=>{
    console.log(`Inserção NDK: ${erro}`);
    res.status(404).json({
      mensagem: 'Cliente nao foi inserido'
    })
  })
});

app.get('/api/livraria',(req, res, next)=>{
  livro.find()
  .then((documentos)=>{
    console.log(documentos);
    res.status(200).json({
      mensagem: 'Tudo ok',
      livros: documentos
    })
  })
  .catch((e)=>{
    console.log('Busca falhou '+e)
    res.status(404).json({
      mensagem:'Falhou',
      livros: []
    })
  })
});

app.delete('/api/livraria/:id',(req,res,next)=>{
  Livro.deleteOne({_id: req.params.id})
  .then((resultado)=>{
    console.log(resultado);
    res.status(200).json({mensagem:"Cliente removido"});
  })
});

app.put('/api/livraria/:id',(req, res, next)=>{
  const livro = new Livro({
    _id: req.params.id,
    id: req.body.id,
    titulo: req.body.titulo,
    autor: req.body.autor,
    paginas: req.body.paginas
  });
  Livro.updateOne({_id: req.params.id}, livro)
  .then((resultado)=>{
    console.log(resultado)
  });
  res.status(200).json({mensagem:'Atualização realizada com sucesso'})
});

app.get('/api/livraria/:id', (req, res, next)=>{
  Livro.findById(req.params.id).then(li => {
    if(li){
      res.status(200).json(li);
    }
    else{
      res.status(404).json({mensagem: "Cliente nao encontrado"})
    }
  })
});

module.exports = app;
