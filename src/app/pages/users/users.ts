import { Component, signal } from '@angular/core';
import { UsersLists } from '../../services/users-lists';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
    usersData=signal<Array<{id:number,name:string,age:number}>>([]);
    constructor(public users:UsersLists,router:ActivatedRoute){
       
         console.log(users.userLists());
         this.usersData.set(users.userLists());
    }

    // console.log("")
}
