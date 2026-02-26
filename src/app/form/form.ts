import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  
  loginForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  });
  get name(){return this.loginForm.get('name')
  }

  get email (){return this.loginForm.get('email')
  }

  get password(){return this.loginForm.get('password')
  }

  handleForm(){
    console.log(this.loginForm.errors)
    console.log(this.loginForm.value);
  }
  resetData(){
    this.loginForm.reset();
  }
}
