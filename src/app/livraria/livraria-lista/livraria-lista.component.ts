import { Component, Input } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livraria-lista',
  templateUrl: './livraria-lista.component.html',
  styleUrls: ['./livraria-lista.component.css']
})
export class LivrariaListaComponent  {

  @Input() livros: Livro[]=[];
}
