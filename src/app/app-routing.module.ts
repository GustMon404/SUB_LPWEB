import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroReceitaComponent } from './cadastro-receita/cadastro-receita.component';
import { DetalheReceitaComponent } from './detalhe-receita/detalhe-receita.component';

const routes: Routes = [
  {path: 'detalhe/:id', component: DetalheReceitaComponent},
  {path: 'cadastrar', component: CadastroReceitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
