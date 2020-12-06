import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Receitas } from '../app.model';
import { IngredientesService } from '../ingredientes.service';

@Component({
  selector: 'app-lista-receita',
  templateUrl: './lista-receita.component.html',
  styleUrls: ['./lista-receita.component.css']
})
export class ListaReceitaComponent implements OnInit {

  lista_receita = null

  @Output() editar_receita = new EventEmitter<any>();


  constructor(private ingredientesService: IngredientesService,private router: Router) {
    this.atualizar_lista();
  }

  atualizar_lista(){
    this.ingredientesService.todas().subscribe(receitas => this.lista_receita = receitas)
  }

  editar(receita){
    this.editar_receita.emit(receita)
  }

  ngOnInit(): void {
  }

  
  deletar(receita){
    if(confirm("deseja excluir ?")){
      this.ingredientesService.deletar(receita).subscribe(()=> {alert('sucesso'), this.atualizar_lista()}, error => {alert("Não é possivel apagar essa receita")});
    }
  }

  detalhes(receita){
    this.router.navigate(['detalhe',receita.id])
  }


}
