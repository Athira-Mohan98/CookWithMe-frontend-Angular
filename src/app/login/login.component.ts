import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup

  constructor(private fb: FormBuilder, private api: ApiService, private route: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
    })
  }
  login() {
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password

    if (this.loginForm.valid) {
      this.api.loginAPI({ email, password }).subscribe((res: any) => {
        alert("login successful")
        if (res.user.role == "user") {
          sessionStorage.setItem('user',JSON.stringify(res.user))
          sessionStorage.setItem('token',res.token)
          this.route.navigateByUrl('/')
        }else{
          //admin side
        }
      })
    } else
      alert("please fill")
  }
}



