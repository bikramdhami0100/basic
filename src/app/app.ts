import { Component, computed, effect, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { ControlCount } from './control-count/control-count';
import { DisplayCount } from './display-count/display-count';
import { Pipes } from './pipes/pipes';
import { CommonModule } from '@angular/common';
import { TrimTextPipe } from './custom-pipe/trim-text-pipe';
import { Header } from './components/header/header';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterOutlet,Header],
  // templateUrl: './app.html',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
//   name=signal("Bikram Dhami");
//   salary=signal(10000);
//   time=signal(new Date());
//  users=signal(["bikram","sarita","ram"]);
//  selectedUser=signal("");
 
//  handleDelete(user:string){
//   console.log(user);
//   this.users.update((item)=>item.filter((item)=>item!=user))
// //  }
//    text=signal("This is bikram dhami");
//    salary=signal(10000);

}
