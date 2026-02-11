import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users=signal(['bikram','sarita','sunita']);
  // protected readonly title = signal('Basic to advanced Angular');
//  count=signal(10);
//  color="red";
//  fruits=signal("apple");
//    constructor(){
//      effect(()=>{
//       // console.log('color ',this.color);
//       console.log("count: ",this.count());
//        if(this.count()>50 && this.count()<100){
//          this.color="green"
//        }else if (this.count()>100&& this.count()<150){
//          this.color="blue"
//        }else if(this.count()>150){ 
//          this.color="black"
//        }
//      })

//      effect(()=>{
//         console.log("color : ",this.fruits());
//      });
    
     
//    }
//   updateCount(){
//     // this.count="blue";
//     this.count.set(this.count()+10);
//   }
//    updateChangeColor(){
//         this.color="gray";
//      }
//      changeFruit(){
//         this.fruits.set("banana");
//      }
  

}
