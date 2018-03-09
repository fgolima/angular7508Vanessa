import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from "../servicos/foto.service";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {
  listaFotos : FotoComponent[]

  constructor(private servico : FotoService) {

    servico.listar()
              .subscribe( 
                fotosApi => this.listaFotos = fotosApi
                , erro => console.log(erro)
              )
  }

  ngOnInit() {
  }

  deletar(foto){
    let id = foto._id

    this.servico.deletar(foto)
                  .subscribe( 
                    resposta => {
                      //console.log(`${foto.titulo} deletado com sucesso !`)
                      this.listaFotos = this.listaFotos.filter(foto => foto._id != id)
                    }
                    , erro => console.log(erro)
                  )
  }
}
