import {Pipe, PipeTransform} from '@angular/core'
import { FotoComponent } from '../foto/foto.component';


@Pipe({
    name : 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
    transform(listaFotos: FotoComponent[], textoDigitado){
        return listaFotos.filter(foto => {
            if(foto.titulo.toLowerCase().includes(textoDigitado.toLowerCase()){
                return foto
            }
        })
    }
}