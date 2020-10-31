import { Component, OnInit,OnDestroy } from '@angular/core';
import { Livro } from '../livro.model';
import { livrosService } from '../livro.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-livraria-lista',
  templateUrl: './livraria-lista.component.html',
  styleUrls: ['./livraria-lista.component.css']
})
export class LivrariaListaComponent implements OnInit,OnDestroy {

  livros: Livro[]=[];
  private livrosSubscription: Subscription;
  constructor(public livroService: livrosService){ }

  ngOnInit(): void{
    this.livros = this.livroService.getLivros();
    this.livrosSubscription = this.livroService.getListaLivrosAtualizada().
    subscribe( (livros: Livro[])=>{
      this.livros = livros;
    });
  }
  ngOnDestroy(): void{
    this.livrosSubscription.unsubscribe();
  }
}
