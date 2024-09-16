import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
   loginForm:any
   registerForm:any
   activeForm: 'login' | 'register' = 'login'

   constructor(private fb:FormBuilder, private router:Router) {
   }

   ngOnInit(): void {
       this.loginForm = this.fb.group({
        email:['', Validators.required],
        password:['',[ Validators.required, Validators.minLength(3)]]
       })


       this.registerForm = this.fb.group({
        username:['', Validators.required],
        email:['', Validators.required],
        password:['',[ Validators.required, Validators.minLength(3)]]
       })
   }

   login(){
    console.log(this.loginForm)
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.router.navigate(['/budget/dashboard'])
    }else{
      console.log("Invalid Credentials")
    }
   }

   register(){
    console.log(this.registerForm.value)

    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      this.activeForm = 'login'
    }else{
      console.log("Invalid Credentials")
    }
   }

   toggleForm(form:'login'|'register'):void {
    this.activeForm = form
   }


}
