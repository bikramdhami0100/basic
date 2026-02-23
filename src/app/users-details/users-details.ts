import { Component ,signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersLists } from '../services/users-lists';

@Component({
  selector: 'app-users-details',
  imports: [],
  templateUrl: './users-details.html',
  styleUrl: './users-details.css',
})
export class UsersDetails {
  users=signal<Array<{id:number,name:string,age:number}>>([]);
  constructor(private router:ActivatedRoute,private userData:UsersLists){};
   ngOnInit(){
    // console.log(this.userData.userLists());
    this.router.params.subscribe((params)=>{
      let id = params['id'];
      this.users.set(this.userData.userLists().filter((item)=>item.id==id));
    });
  console.log(this.users())
   }
}
