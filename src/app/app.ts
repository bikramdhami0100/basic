import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('Basic to advanced Angular');
// dis=false;
disableBtn=true;
 clickMe(){
  // this.color="red";
  this.disableBtn=!this.disableBtn
 }
}
