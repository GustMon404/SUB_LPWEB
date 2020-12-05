import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroReceitaComponent } from './cadastro-receita/cadastro-receita.component';
import { FormsModule } from '@angular/forms';
import { IngredientesService } from './ingredientes.service';
import { ListaReceitaComponent } from './lista-receita/lista-receita.component';
import { Receitas } from './app.model';
import { HttpClientModule } from '@angular/common/http';
import { DetalheReceitaComponent } from './detalhe-receita/detalhe-receita.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaReceitaComponent,
    CadastroReceitaComponent,
    DetalheReceitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IngredientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
