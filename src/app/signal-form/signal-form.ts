import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../services/product';

@Component({
  selector: 'app-signal-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {
  constructor(private product:Product) {}
  // loginModel = signal({
  //   email: 'bikram dhami',
  //   password: ''
  // });

  // loginForm = form(this.loginModel);

  handleSubmit(data:NgForm) {
    console.log(this.product.productList())
    console.log(data);
  }
}