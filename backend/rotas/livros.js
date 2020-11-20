const express = require("express");
const router = express.Router();

const Livro = require("../models/livro");

router.post('',(req,res, next)=>{
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

router.get('',(req, res, next)=>{
  Livro.find()
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

router.delete('/:id',(req,res,next)=>{
  Livro.deleteOne({_id: req.params.id})
  .then((resultado)=>{
    console.log(resultado);
    res.status(200).json({mensagem:"Cliente removido"});
  })
});

router.put('/:id',(req, res, next)=>{
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

router.get('/:id', (req, res, next)=>{
  Livro.findById(req.params.id).then(li => {
    if(li){
      res.status(200).json(li);
    }
    else{
      res.status(404).json({mensagem: "Cliente nao encontrado"})
    }
  })
});


module.exports =router;
