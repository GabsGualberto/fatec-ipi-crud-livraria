import { Livro } from './livro.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable ({providedIn: 'root'})
export class livrosService{
  private livros: Livro[] = [];
  private listaAtualizada = new Subject<Livro[]>();


  constructor(private httpClient: HttpClient){ }

  getLivros():void{
    this.httpClient.get<{mensagem: string, livros: Livro[]}>('http://localhost:3000/api/livraria').subscribe((dados)=>{
      this.livros = dados.livros;
      this.listaAtualizada.next([...this.livros]);
    })
  }
  cadastrarLivro(id: string,titulo: string,autor: string,paginas: string){
      const livro: Livro = {
        id: id,
        titulo: titulo,
        autor: autor,
        paginas: paginas
      }
      this.httpClient.post<{mensagem: string}>('http://localhost:3000/api/livraria',livro).subscribe((dados)=>{
          console.log(dados.mensagem);
          this.livros.push(livro);
          this.listaAtualizada.next([...this.livros]);
      })

  }
  getListaLivrosAtualizada(){
    return this.listaAtualizada.asObservable();
  }
}
