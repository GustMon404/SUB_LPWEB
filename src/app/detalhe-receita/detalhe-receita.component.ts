import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receitas } from '../app.model';
import { IngredientesService } from '../ingredientes.service';

@Component({
  selector: 'app-detalhe-receita',
  templateUrl: './detalhe-receita.component.html',
  styleUrls: ['./detalhe-receita.component.css']
})
export class DetalheReceitaComponent implements OnInit {

  receita = null

  constructor(private ingredientesService: IngredientesService,private route: ActivatedRoute){
                }

  titulo: string;
  tipo: string;
  tempo_preparo: number;
  rendimento: string;
  ingredientes: string;
  modo_preparo: string;
  publica: boolean;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    //receita nao aceitando receber receitas diretamente
    this.ingredientesService.encontrar(id).subscribe((receitas: Receitas)=> {
      this.titulo = receitas.titulo, this.tipo = receitas.tipo, this.tempo_preparo = receitas.tempo_preparo, this.rendimento = receitas.rendimento,
      this.ingredientes = receitas.ingredientes, this.modo_preparo = receitas.modo_preparo, this.publica = receitas.publica, this.receita = receitas
      /*this.receita = new Receitas(receitas.titulo, receitas.tipo, receitas.tempo_preparo, receitas.rendimento, receitas.ingredientes,
      receitas.modo_preparo, receitas.publica)*/
      
    })
  }

  publicar(receita){
    receita.publica = true
    this.ingredientesService.publicar(receita).subscribe();
  }


}
