import { Component } from '@angular/core';
import { Livro } from './livraria/livro.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  livros: Livro[] = [];
  onCadastarLivro(livro){
    console.log(livro);
      this.livros.push(livro);
  }
}
