import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child],
  // templateUrl: './app.html',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 users=signal(["bikram","sarita","ram"]);
 selectedUser=signal("");
 
 handleDelete(user:string){
  console.log(user);
  this.users.update((item)=>item.filter((item)=>item!=user))
 }
}
