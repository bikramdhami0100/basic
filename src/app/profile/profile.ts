import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
    count = 0;
   handlerEvent(event: any) {
      //  if(event=='plus'){
      //   this.count++;
      //  }else{
      //   this.count--;
      //  }
      console.log(event)
      
   }
  //  clickMe() {
  //   alert("hello");
  // }
}
