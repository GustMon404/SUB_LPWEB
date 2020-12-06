import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Receitas } from '../app.model';
import { IngredientesService } from '../ingredientes.service';
import { ListaReceitaComponent } from '../lista-receita/lista-receita.component';

@Component({
  selector: 'app-cadastro-receita',
  templateUrl: './cadastro-receita.component.html',
  styleUrls: ['./cadastro-receita.component.css']
})
export class CadastroReceitaComponent implements OnInit {

  titulo = null;
  tipo = null;
  tempo = null;
  rendimento = null;
  ingredientes = null;
  preparo = null;
  publica = false

  receita_editando = null;


  constructor(private ingredientesService: IngredientesService, private router: Router) {
   }



  ngOnInit(): void {
  }

  @ViewChild(ListaReceitaComponent, {static:false})
  lista: ListaReceitaComponent

  salvar(){
    if(this.receita_editando){
      this.receita_editando.titulo = this.titulo
      this.receita_editando.tipo = this.tipo
      this.receita_editando.tempo_preparo = this.tempo;
      this.receita_editando.rendimento = this.rendimento;
      this.receita_editando.ingredientes = this.ingredientes;
      this.receita_editando.modo_preparo = this.preparo;
      this.receita_editando.publica = this.publica;

      this.ingredientesService.salvar(this.receita_editando).subscribe( () => this.lista.atualizar_lista())
      // Não recarrega a pagina
    }
    else{
      let receita = new Receitas(this.titulo, this.tipo, this.tempo, this.rendimento, this.ingredientes, this.preparo, this.publica)
      this.ingredientesService.salvar(receita).subscribe( () => this.lista.atualizar_lista() )
    }
    this.titulo = null;
    this.tipo = null;
    this.tempo = null;
    this.rendimento = null;
    this.ingredientes = null;
    this.preparo = null;
    this.publica = false;
  
    this.receita_editando = null;

  }

  publico(){
    this.publica = !this.publica
  }

  editar(receita){
    this.titulo = receita.titulo;
    this.tipo = receita.tipo;
    this.tempo = receita.tempo_preparo;
    this.rendimento = receita.rendimento;
    this.ingredientes = receita.ingredientes;
    this.preparo = receita.modo_preparo;
    this.publica = receita.publica;

    this.receita_editando = receita
  }

  cancelar(){
    this.titulo = null;
    this.tipo = null;
    this.tempo = null;
    this.rendimento = null;
    this.ingredientes = null;
    this.preparo = null;
    this.publica = false;
  
    this.receita_editando = null;
  }

}
