import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
     recipie:any[]=[]
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.getReviews()
  }
  
   getReviews() {

   try {
     this.api.getTestimony().subscribe((item: any) => {
      console.log(item)
      this.recipie = item
    })
   } catch (error) {
    console.log(error);
    
   }
}
}
