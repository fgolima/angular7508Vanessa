import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from "../servicos/foto.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  mensagem

  constructor(private servico: FotoService, 
    private rota: ActivatedRoute, private roteador : Router) { 
   
  }

  ngOnInit() {
    this.rota.params.subscribe( parametros => {
        if(parametros.fotoId){
          //console.log(parametros.fotoId)
          this.servico.consultar(parametros.fotoId)
          .subscribe( fotoAPI => {
            this.foto = fotoAPI
            
          })
      }
    })
  }

  salvar(foto : FotoComponent){
    if(this.foto._id){
      this.servico.atualizar(this.foto)
      .subscribe( 
        () => {
          this.mensagem = `${this.foto.titulo} atualizado com sucesso !` 
          setTimeout(() => {
            this.mensagem = ""
            this.roteador.navigate([''])
          }, 4000)

        }
        , erro => console.log(erro)
      )
    } else {
      this.servico.cadastrar(this.foto)
              .subscribe( 
                () => this.foto = new FotoComponent()
                , erro => console.log(erro)
              )
    }
  }
}
