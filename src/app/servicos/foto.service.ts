import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FotoComponent } from "../foto/foto.component";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'

const url = 'http://localhost:3000/v1/fotos/'
const cabecalho  = { 
    headers: new HttpHeaders({'Content-Type':'application/json'}) 
}

@Injectable()
export class FotoService {

    constructor(private conexaoApi : HttpClient){

    }

    listar() : Observable<FotoComponent[]>{
        return this.conexaoApi.get<FotoComponent[]>(url)
    }

    cadastrar(foto: FotoComponent) : Observable<Object>{
        return this.conexaoApi.post(url, foto, cabecalho)
                            // .map(
                            //     () => ({mensagem : `${foto} inserida com sucesso`})
                            // )
    }

    deletar(foto: FotoComponent) : Observable<Object>{
        return this.conexaoApi.delete(url + foto._id)
    }

    consultar(idFoto) : Observable<FotoComponent>{
        return this.conexaoApi.get<FotoComponent>(url + idFoto)
    }
    
    atualizar(foto: FotoComponent) : Observable<Object>{
        return this.conexaoApi.put(url + foto._id, foto, cabecalho)
                            // .map(
                            //     () => ({mensagem : `${foto} inserida com sucesso`})
                            // )
    }
}