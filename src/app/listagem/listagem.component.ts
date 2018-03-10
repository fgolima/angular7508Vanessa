import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from "../servicos/foto.service";
 

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {
  listaFotos : FotoComponent[] = []
  mensagem

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
                      this.mensagem = `${foto.titulo} deletado com sucesso !` 
                      setTimeout(() => this.mensagem = "", 4000)
                      this.listaFotos = this.listaFotos.filter(fotodalista => fotodalista != foto)

                    }
                    , erro => console.log(erro)
                  )
  }
}
