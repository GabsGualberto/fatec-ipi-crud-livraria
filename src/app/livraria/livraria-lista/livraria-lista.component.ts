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

  public isLoading: boolean = false;
  constructor(public livroService: livrosService){ }

  ngOnInit(): void{
    this.isLoading = true;
    this.livroService.getLivros();
    this.livrosSubscription = this.livroService.getListaLivrosAtualizada().
    subscribe( (livros: Livro[])=>{
      this.isLoading = false;
      this.livros = livros;
    });
  }

  onDelete(id: string): void{
    this.livroService.removerLivro(id);
  }
  ngOnDestroy(): void{
    this.livrosSubscription.unsubscribe();
  }
}
