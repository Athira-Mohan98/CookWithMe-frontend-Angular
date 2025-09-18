import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router, RouterLink } from "@angular/router";
import { ApiService } from '../services/api.service';
import { CdkAriaLive } from "../../../node_modules/@angular/cdk/a11y/index";

@Component({
  selector: 'app-recipies',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './recipies.component.html',
  styleUrl: './recipies.component.css'
})
export class RecipiesComponent implements OnInit {

  allRecipies:any=[]

  constructor(private api:ApiService, private route:Router){}
  ngOnInit(): void {
    this.getAllrecipies()
  }
  getAllrecipies(){
try {
  this.api.getAllrecipies().subscribe((item:any)=>{
    console.log(item);
    this.allRecipies=item
    
  })
} catch (error) {
  console.log(error)
}

  }
viewRecipie(id:any){
if(sessionStorage.getItem('token')){
  this.route.navigateByUrl(`/View-Recipie/${id}`)
}else{
  alert("please login")
}
}

}
