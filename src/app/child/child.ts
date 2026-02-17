import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
 @Input() userlists:any|string[] = [];
@Output() selectedUser = new EventEmitter<string>();
@Output() userDelete = new EventEmitter<string>();
  handlerUser(){
    console.log(this.userlists);
  }
  
  handleSelectUser(user:string){
    // console.log(this.selectedUser);
    this.selectedUser.emit(user);

  }
  handleDelete(user:string){
    // console.log(this.deleteUser);

    this.userDelete.emit(user);
  }
  
  
} 
