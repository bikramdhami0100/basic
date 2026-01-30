import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-learn',
  imports: [],
  templateUrl: './learn.html',
  styleUrl: './learn.css',
})
export class Learn {
  state=signal('start');
handleChange(event:Event){
  let elem=event.target as HTMLSelectElement;
   this.state.set(elem.value);
}

//  two way binding
name=signal('bikram');
userDetails=signal({ id: 1, name: 'bikram', age: 25 });
handleObject(key: string,event: Event)  {
  let elem = event.target as HTMLInputElement;
  this.userDetails.update((item)=>({...item,[key]:elem.value}));

  // this.userDetails.set(JSON.parse(elem.value));
}
}
