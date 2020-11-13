import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Livro } from '../livro.model';
import { livrosService } from '../livro.service';


@Component({
  selector: 'app-livraria-cadastrar',
  templateUrl: './livraria-cadastrar.component.html',
  styleUrls: ['./livraria-cadastrar.component.css']
})
export class LivrariaCadastrarComponent  implements OnInit {
  constructor(
    public livroService: livrosService,
    private route: ActivatedRoute
    ){

   }
  private modo: string = "criar";
  private idLivro: string;
  public livro: Livro;

  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
        if(paramMap.has('idLivro')){
            this.modo = "editar";
            this.idLivro = paramMap.get("idLivro");
            this.livroService.getLivro(this.idLivro).subscribe(dadosLi =>{
              this.livro = {
                id_mapeado: dadosLi._id,
                id: dadosLi.id,
                titulo: dadosLi.titulo,
                autor: dadosLi.autor,
                paginas: dadosLi.paginas
              }
            })
        }else{
          this.modo ="criar";
          this.idLivro = null;
        }
    })
  }



  onSalvarLivro(form: NgForm){
    const teste = form.value.id;
    if(form.invalid) {
      return;
    }
    if(this.modo === "criar"){
      this.livroService.cadastrarLivro(form.value.id,form.value.titulo,form.value.autor,form.value.paginas);
    }
    else{
      this.livroService.atualizarLivro(this.idLivro,form.value.id,form.value.titulo,form.value.autor, form.value.paginas);
    }

    form.resetForm();
    console.log("Programmed to work and not to feel");
  }

}
