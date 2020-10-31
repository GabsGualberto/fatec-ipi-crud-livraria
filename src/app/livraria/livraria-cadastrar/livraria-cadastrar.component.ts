import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { livrosService } from '../livro.service';


@Component({
  selector: 'app-livraria-cadastrar',
  templateUrl: './livraria-cadastrar.component.html',
  styleUrls: ['./livraria-cadastrar.component.css']
})
export class LivrariaCadastrarComponent  {

  constructor(public livroService: livrosService){ }

  onCadastrarLivro(form: NgForm){
    const teste = form.value.id;
    if(form.invalid) return;
    this.livroService.cadastrarLivro(form.value.id,form.value.titulo,form.value.autor,form.value.paginas);
    form.resetForm();
    console.log("Programmed to work and not to feel");
  }

}
