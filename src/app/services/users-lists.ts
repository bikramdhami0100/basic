import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersLists {
   
   userLists=signal([
    {id:1,name:'bikram',age:25},
    {id:2,name:'sarita',age:23},
    {id:3,name:'sunita',age:24},
    {id:4,name:'akash',age:24},
    {id:5,name:'ramita',age:24},
   ]);
}
