import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Receitas } from './app.model';
import { identifierModuleUrl } from '@angular/compiler';
import { ListaReceitaComponent } from './lista-receita/lista-receita.component';
@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  //lista_receitas = null

  constructor(private http:HttpClient) {
    //this.lista_receitas = []
  }

  todas(){
    return this.http.get('https://lpweb-receitas.herokuapp.com/api/receitas/')
  }

  /*carregarReceitas(callback){
    this.http.get('https://lpweb-receitas.herokuapp.com/api/receitas/')
    .subscribe(receitas => this.lista_receita = receitas)
    .add(callback)
  }*/

  salvar(receitas){
    if(receitas.id){
      return this.http.patch(receitas.url, receitas)
    }

    else{
      /*let receitas_json = {'titulo':receitas.titulo, 'tipo': receitas.tipo, 'ingredientes': receitas.ingredientes,
              'modo_preparo': receitas.modo_preparo, 'tempo_preparo': receitas.tempo_preparo, 'rendimento': receitas.rendimento,
              'publica': receitas.publica}*/
      return this.http.post('https://lpweb-receitas.herokuapp.com/api/receitas/', receitas)
    }
  }

  deletar(receita){
    if (receita.publica == false){
      return this.http.delete(receita.url, receita) 
    }
    else{
      return this.http.delete(receita.url+'/', receita) 
    }
  }

  encontrar(id){
    //let receitas = this.http.get('https://lpweb-receitas.herokuapp.com/api/receitas/'+id+'/')
    
    return this.http.get('https://lpweb-receitas.herokuapp.com/api/receitas/'+id+'/')
  }

  publicar(receita){
    return this.http.patch(receita.url, receita)
  }

  atualizar(){
    
  }

  /*atualizar(callback){
    this.todas().subscribe(receitas => this.lista_receitas = receitas)
    return this.lista_receitas.add(callback)
  }*/

}
