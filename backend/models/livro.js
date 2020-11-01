const mongoose = require('mongoose');
const { stringify } = require('querystring');

const livroSchema = mongoose.Schema({
  id: {type: String, required: true},
  titulo: {type: String, required: true},
  autor: {type: String, required: true},
  paginas:{type: String, required: true}
});
module.exports = mongoose.model('Livro',livroSchema);
