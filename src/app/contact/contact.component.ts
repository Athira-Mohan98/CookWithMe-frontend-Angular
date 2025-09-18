import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  {

  testimonyForm: FormGroup
  constructor(private fb: FormBuilder, private api: ApiService) {


    this.testimonyForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.pattern('[a-zA-Z 0-9]*')]]
    })
  }
 addReviews() {
 const name = this.testimonyForm.value.name
 const email = this.testimonyForm.value.email
  const message = this.testimonyForm.value.message
  if (this.testimonyForm.valid) {
    this.api.addTestimony({ name, email, message }).subscribe((res: any) => {
      console.log(res)
      alert("Testimony successfully added")
    })
  } else {
    alert("Please fill in all required fields");
  }
}
}