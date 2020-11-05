import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//meus componentes
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LivrariaCadastrarComponent } from './livraria/livraria-cadastrar/livraria-cadastrar.component';
import { LivrariaListaComponent } from './livraria/livraria-lista/livraria-lista.component';
import { AppComponent } from './app.component';
//angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

//serviços
import { livrosService } from './livraria/livro.service';

//modulo http
import { HttpClientModule } from '@angular/common/http'


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
    MatTabsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
