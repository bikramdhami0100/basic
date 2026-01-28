import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isLogin=signal(true);
  handleLogin(status:boolean){
    this.isLogin.set(status);
  }
}
