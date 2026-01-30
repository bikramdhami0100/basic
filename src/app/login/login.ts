import { Component, signal } from '@angular/core';
// import { Event } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isLogin=signal(true);
  isShow=signal(true);
  handleLogin(status:boolean){
    this.isLogin.set(status);
  }
  selectedValue=signal('start');
  handleChange(event:Event){
     var sel=event.target as HTMLSelectElement;
    // console.log(sel.value);
    this.selectedValue.set(sel.value);

  }

  users=signal(['bikram','sarita','dhami']);
  usersDetails=signal([{id:1,name:'bikram',age:25},{id:2,name:'sarita',age:23},{id:3,name:'dhami',age:24}]);
}
