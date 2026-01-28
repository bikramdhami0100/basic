import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  // template:`<h1 class="heading">Hello from counter</h1>`,
  // styles: [`h1{color:red}`],
  styleUrl: './counter.css',
})
export class Counter {
     count:WritableSignal<number>=signal(10);
     decrement(){
      this.count()>0&& this.count.update((item)=>item-1);
     }
     increment(){
        this.count.update((item)=>item+1);
     }
     reset(){
      this.count.set(0);
     }

     // let 
     word:WritableSignal<string>=signal("hello");

     getValue(e:any){
      this.word.set(e.target.value);
     }
     setValue(){
      this.word.set("hello world");
     }
}
