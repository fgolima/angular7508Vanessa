import {Component} from '@angular/core'
@Component({
  selector : 'app-root',

  //poderia usar templateURL e passar o nome de um arquivo. ex: templateUrl:'./app.component.html'
  //utilizei a crase para poder quebrar a linha e escrever mais html
  /*template : `<header>
                <h1 class="card-panel">App Works</h1>
              </header>
              <main class="container">
                <div class="card">
                  <div class="card-image">
                    <img src='./assets/img/image.jpg' class="responsive-img">
                    <span class="card-title">Card Title</span>
                    <a class="btn-floating halfway-fab waves-effect waves-light red">
                      <i class="material-icons">+</i>
                    </a>
                    
                  </div>
                  <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                  </div>
                </div>
              </main>
  `,*/
  templateUrl : './app.component.html',
  //poderia utilizar arquivos de styles
  styles : ['h1 {color:red}']
})
export class AppComponent {

}   