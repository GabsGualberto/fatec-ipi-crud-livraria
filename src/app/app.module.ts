import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//meus componentes
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LivrariaCadastrarComponent } from './livraria/livraria-cadastrar/livraria-cadastrar.component';
import { LivrariaListaComponent } from './livraria/livraria-lista/livraria-lista.component';

//angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

//serviços
import { livrosService } from './livraria/livro.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    LivrariaCadastrarComponent,
    LivrariaListaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [livrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
