import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrariaListaComponent } from './livraria/livraria-lista/livraria-lista.component';
import { LivrariaCadastrarComponent } from './livraria/livraria-cadastrar/livraria-cadastrar.component';

const routes: Routes = [
  {path: 'criar', component: LivrariaListaComponent},
  {path: '', component: LivrariaCadastrarComponent},
  {path: 'editar/:idLivro', component: LivrariaCadastrarComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule{

}
