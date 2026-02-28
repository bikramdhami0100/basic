import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
   constructor(){
    console.log("This is calling from services/product")
   }
   productList(){
    return [
      {id:1,name:"Laptop",price:50000},
      {id:2,name:"Mobile",price:15000},
      {id:3,name:"Tablet",price:10000},
      {id:4,name:"Camera",price:5000},
      {id:5,name:"Printer",price:2000},
    ]
   }
}
