import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDataType } from './productDataType';
@Injectable({
  providedIn: 'root',
})
export class Product {
   constructor(private http:HttpClient){
    console.log("This is calling from services/product")
   }
   productList(){
    let apiUrl=`https://dummyjson.com/products`;
    return this.http.get<ProductDataType>(apiUrl);
   }
}
