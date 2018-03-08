import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {
  listaFotos

  constructor(conexaoApi: HttpClient) {
    //console.log('construiu a app');

    conexaoApi.get('http://localhost:3000/v1/fotos')
              .subscribe( fotosApi => 
                //console.log(fotosApi)
                this.listaFotos = fotosApi
                , erro => console.log(erro)
              )
  }

  ngOnInit() {
  }

}
