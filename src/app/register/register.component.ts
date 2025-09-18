import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private route:Router ) {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z 1-9]*')]]
    });
  }

  register() {

    const userName = this.registerForm.value.userName
     const email = this.registerForm.value.email
      const password = this.registerForm.value.password
    if (this.registerForm.valid) {
  
      this.api.registerAPI({ userName, email, password }).subscribe((res: any) => {
          alert('Registration successful');
          this.route.navigateByUrl('/login')
        })}
        else{
          alert('please fill')
        }}}