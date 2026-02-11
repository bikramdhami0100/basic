import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
   show=true;
   studentsData=signal([{id:1,name:'bikram',age:25},{id:2,name:'sarita',age:23},{id:3,name:'sunita',age:24}]);
   color=signal('red');
  ChangeColor(color:string){
    this.color.set(color);
  }
  // title=signal('');
  // tasks=signal([{id:1,name:'bikram',age:25},{id:2,name:'sarita',age:23},{id:3,name:'dhami',age:24}]);
  // getValue(e:any){
  //   this.tasks.update((item)=>[...item,{id:this.tasks.length,name:e,age:25}]);
  //   this.title.set('');
  // };
  // handleDelete(id:number){
  //   this.tasks.update((item)=>item.filter((item)=>item.id!=id));
  // }
  // isLogin=signal(false);
  // users=signal(['bikram','sarita','dhami']);

}
