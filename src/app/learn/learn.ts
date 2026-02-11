import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-learn',
  imports: [FormsModule],
  templateUrl: './learn.html',
  styleUrl: './learn.css',
})
export class Learn {
//   state=signal('start');
// handleChange(event:Event){
//   let elem=event.target as HTMLSelectElement;
//    this.state.set(elem.value);
// }

// //  two way binding
// name=signal('bikram');
// userDetails=signal({ id: 1, name: 'bikram', age: 25 });
// handleObject(key: string,event: Event)  {
//   let elem = event.target as HTMLInputElement;
//   this.userDetails.update((item)=>({...item,[key]:elem.value}));

//   // this.userDetails.set(JSON.parse(elem.value));
// }

// get and set 
  userName=signal<string>("Bikram Dhami");
  get uName(){
    return this.userName();
  }
  set uName(name:string){
    this.userName.set(name);
  }

  userData=signal({id:1,name:"Bikram Dhami",age:25});
  get uDName(){
    return this.userData().age.toString();
  }
  set uDName(val:string){
    this.userData.update((item)=>({...item,age:Number(val)}));
  }
}
