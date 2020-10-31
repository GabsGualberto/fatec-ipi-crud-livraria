import { Livro } from './livro.model';
import { Subject } from 'rxjs';

export class livrosService{
  private livros: Livro[] = [];
  private listaAtualizada = new Subject<Livro[]>();

  getLivros(): Livro[]{
    return [...this.livros];
  }
  cadastrarLivro(id: number,titulo: string,autor: string,paginas: number){
      const livro: Livro = {
        id: id,
        titulo: titulo,
        autor: autor,
        paginas: paginas
      }
      this.livros.push(livro);
      this.listaAtualizada.next([...this.livros]);
  }
  getListaLivrosAtualizada(){
    return this.listaAtualizada.asObservable();
  }
}
