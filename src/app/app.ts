import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { ControlCount } from './control-count/control-count';
import { DisplayCount } from './display-count/display-count';
import { Pipes } from './pipes/pipes';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pipes,CommonModule],
  // templateUrl: './app.html',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name=signal("Bikram Dhami");
  salary=signal(10000);
  time=signal(new Date());
 users=signal(["bikram","sarita","ram"]);
 selectedUser=signal("");
 
 handleDelete(user:string){
  console.log(user);
  this.users.update((item)=>item.filter((item)=>item!=user))
 }
}
