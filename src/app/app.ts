import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('Basic to advanced Angular');
  height=signal(100);
  width=signal(10);
  area=computed(()=>this.height()*this.width())
  constructor() {
    effect(() => {
       console.log(this.height());
       if(this.height()>150){
          this.height.set(100);
       }
    })
  }
  updateHeight(){
      this.height.set(this.height()+10);
    //  this.area=this.height*this.width;
  }
}
