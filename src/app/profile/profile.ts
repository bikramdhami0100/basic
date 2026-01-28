import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
     data:WritableSignal<string>=signal("hello");
     users:WritableSignal<string[]>=signal(['bikram','sarita','dhami']);
     handleSetData(){
       this.data.set("world");
     }
     constructor(){
      effect(()=>{
        console.log(this.users());
      })
     }
     handleUpdateArr(){
        this.users.update((item)=>[...item,"bohara"])
        // console.log(this.users);
     }
   
}
