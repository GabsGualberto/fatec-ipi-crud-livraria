import { Component, EventEmitter, Output } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livraria-cadastrar',
  templateUrl: './livraria-cadastrar.component.html',
  styleUrls: ['./livraria-cadastrar.component.css']
})
export class LivrariaCadastrarComponent  {

  id: number;
  titulo: string;
  autor: string;
  paginas: number;

  @Output() livroCadastrado = new EventEmitter<Livro>();

  onCadastrarLivro(){
    const livro: Livro = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      paginas: this.paginas
    }

    this.livroCadastrado.emit(livro);
    console.log("Programmed to work and not to feel");
  }

}
