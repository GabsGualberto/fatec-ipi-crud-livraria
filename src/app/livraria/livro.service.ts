import { Livro } from './livro.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map }  from 'rxjs/operators';

@Injectable ({providedIn: 'root'})
export class livrosService{
  private livros: Livro[] = [];
  private listaAtualizada = new Subject<Livro[]>();


  constructor(private httpClient: HttpClient){ }
  getLivro(idLivro: string){
    return this.httpClient.get<{_id: string,id: string,titulo: string, autor: string,paginas: string}>(`
    http://localhost:3000/api/livraria/${idLivro}`);
  }
  getLivros():void{
    this.httpClient.get<{mensagem: string, livros: any}>('http://localhost:3000/api/livraria').
    pipe(map((dados => {
        return dados.livros.map((livro) =>{
          return{
            id_mapeado: livro._id,
            id: livro.id,
            titulo: livro.titulo,
            autor: livro.autor,
            paginas: livro.paginas
          }
        });
    }))).
    subscribe((livros)=>{
      this.livros = livros;
      this.listaAtualizada.next([...this.livros]);
    })
  }
  cadastrarLivro(id: string,titulo: string,autor: string,paginas: string){
      const livro: Livro = {
        id_mapeado: null,
        id: id,
        titulo: titulo,
        autor: autor,
        paginas: paginas
      }
      this.httpClient.post<{mensagem: string,id: string}>('http://localhost:3000/api/livraria',livro).subscribe((dados)=>{
          console.log(dados.mensagem);
          livro.id_mapeado = dados.id;
          this.livros.push(livro);
          this.listaAtualizada.next([...this.livros]);
      })

  }

  removerLivro(id: string): void{
    this.httpClient.delete(`http://localhost:3000/api/livraria/${id}`).
    subscribe(()=>{
      this.livros = this.livros.filter((liv) =>{
        return liv.id_mapeado !== id
      })
      this.listaAtualizada.next([...this.livros]);
    })
  }
  getListaLivrosAtualizada(){
    return this.listaAtualizada.asObservable();
  }

  atualizarLivro(id_mapeado:string,id: string,titulo: string, autor:string,paginas:string){
    const livro: Livro = {id_mapeado,id,titulo,autor,paginas};
    this.httpClient.put(`http://localhost:3000/api/livraria/${id_mapeado}`,livro)
    .subscribe((res => {
      const copia =[...this.livros];
      const indice = copia.findIndex(li => li.id === livro.id);
      copia[indice] = livro;
      this.livros = copia;
      this.listaAtualizada.next([...this.livros]);
    }));
  }
}
