import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()

  constructor(conexaoApi: HttpClient) { }

  ngOnInit() {
  }

  salvar(evento: Event){

    //
    evento.preventDefault();
    // console.log('salvou !');
    // console.log(this.foto);
    
  }
}
