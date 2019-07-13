import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-online';
  a = 'your name'

  constructor(){
    this.changeA();
  }

  changeA(){
    var i: number;
    i = 2;
    if(i == 1) this.a = 'your name'
    else this.a = 'not'
  }
  
}
