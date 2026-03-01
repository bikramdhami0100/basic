import { Component, computed, effect, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { ControlCount } from './control-count/control-count';
import { DisplayCount } from './display-count/display-count';
import { Pipes } from './pipes/pipes';
import { CommonModule } from '@angular/common';
import { TrimTextPipe } from './custom-pipe/trim-text-pipe';
import { Header } from './components/header/header';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Form } from './form/form';
import { SignalForm } from './signal-form/signal-form';
import { Product } from './services/product';
import { ProductData } from './services/productDataType';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SignalForm
  ],
  // templateUrl: './app.html',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private product:Product){
      
  }
  products=signal<ProductData[]>([]);
  ngOnInit(){
     
    this.product.productList().subscribe((item)=>{
      console.log(item);
      this.products.set(item.products);
    })
  }
  // handleProduct(){
  //   console.log(this.product.productList());
  // }

//   name=signal("Bikram Dhami");
//   salary=signal(10000);
//   time=signal(new Date());
//  users=signal(["bikram","sarita","ram"]);
//  selectedUser=signal("");
 
//  handleDelete(user:string){
//   console.log(user);
//   this.users.update((item)=>item.filter((item)=>item!=user))
// //  }
//    text=signal("This is bikram dhami");
//    salary=signal(10000);
  //  @ViewChild('container',{read:ViewContainerRef})
  //  container:ViewContainerRef|undefined;
  //  async dynamicComponent(){
  //   this.container?.clear();
  //   const {DynamicComponent}= await import("../app/dynamic-component/dynamic-component");
  //   this.container?.createComponent(DynamicComponent);

  //  }
  // email=new FormControl('bikram');
  // password=new FormControl('123');
  // handleForm(){
  //    console.log("hello world");
  //    console.log(this.email.value,this.password.value)
  // }
  // reset(){
  //   this.email.reset();
  //   this.password.reset();
  // }
}
