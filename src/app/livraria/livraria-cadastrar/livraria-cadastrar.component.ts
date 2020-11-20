import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,NgForm, Validators } from '@angular/forms';
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
  public isLoading: boolean = false;
  form: FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      id: new FormControl(null,{
        validators:[Validators.required, Validators.pattern("[0-9]{1,3}")]
      }),
      titulo: new FormControl(null,{
        validators:[Validators.required, Validators.minLength(3)]
      }),
      autor: new FormControl(null,{
        validators:[Validators.required, Validators.minLength(3)]
      }),
      paginas: new FormControl(null,{
        validators:[Validators.required, Validators.pattern("[0-9]{1,}")]
      })
    })
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
        if(paramMap.has('idLivro')){
            this.modo = "editar";
            this.idLivro = paramMap.get("idLivro");
            this.isLoading = true;
            this.livroService.getLivro(this.idLivro).subscribe(dadosLi =>{
              this.isLoading = false;
              this.livro = {
                id_mapeado: dadosLi._id,
                id: dadosLi.id,
                titulo: dadosLi.titulo,
                autor: dadosLi.autor,
                paginas: dadosLi.paginas
              }
              this.form.setValue({
                id: this.livro.id,
                titulo: this.livro.titulo,
                autor: this.livro.autor,
                paginas: this.livro.paginas
              })
            });
        }else{
          this.modo ="criar";
          this.idLivro = null;
        }
    })
  }



  onSalvarLivro(){
    if(this.form.invalid){
      return;
    }
    this.isLoading = true;
    if(this.modo === "criar"){
      this.livroService.cadastrarLivro(this.form.value.id,this.form.value.titulo,this.form.value.autor,this.form.value.paginas);
    }
    else{
      this.livroService.atualizarLivro(this.idLivro,this.form.value.id,this.form.value.titulo,this.form.value.autor, this.form.value.paginas);
    }

    this.form.reset();

    console.log("Programmed to work and not to feel");
  }

}
