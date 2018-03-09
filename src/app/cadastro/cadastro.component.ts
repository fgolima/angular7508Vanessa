import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from "../servicos/foto.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()

  constructor(private servico: FotoService) { }

  ngOnInit() {
  
  }

  salvar(foto : FotoComponent){
      this.servico.cadastrar(this.foto)
              .subscribe( 
                () => this.foto = new FotoComponent()
                , erro => console.log(erro)
              )
  }
}
