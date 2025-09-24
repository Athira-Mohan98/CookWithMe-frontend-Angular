import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router, RouterLink } from "@angular/router";
import { ApiService } from '../services/api.service';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchPipe } from '../Pipes/search.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-recipies',
  standalone: true,
  imports: [HeaderComponent, RouterLink, DatePipe, FormsModule,SearchPipe, ReactiveFormsModule,NgxPaginationModule],
  templateUrl: './recipies.component.html',
  styleUrl: './recipies.component.css'
})
export class RecipiesComponent implements OnInit {

  allRecipies: any = []
  cuisineType: any = [] //an array to hold all the cuisine types
  nestedmealType: any = [] //to hold all the nested meal type
  singleMealType: any = []//to hold all the meal type with duplicated value
  updatedMealType: any = [] //updated without duplicates
  dummyArray: any = []

  SearchKey:string=""
  p: number = 1;


  today:Date= new Date()
  constructor(private api: ApiService, private route: Router) { }
  ngOnInit(): void {
    this.getAllrecipies()
  }
  getAllrecipies() {
    try {
      this.api.getAllrecipies().subscribe((item: any) => {
        console.log(item);//all recipies
        this.allRecipies = item
this.dummyArray =item


        //cuisine filter
        this.allRecipies.forEach((item: any) => {
          !this.cuisineType.includes(item.cuisine) && this.cuisineType.push(item.cuisine)
        });
        console.log(this.cuisineType);


        //nested Mealtype filter
        this.nestedmealType = this.allRecipies.map((item: any) => item.mealType)
        console.log(this.nestedmealType);
        console.log(this.nestedmealType.flat());
        this.singleMealType = this.nestedmealType.flat()
        this.singleMealType.map((item: any) => {
          !this.updatedMealType.includes(item) && this.updatedMealType.push(item)
        })
        console.log(this.updatedMealType);
      })
    } catch (error) {
      console.log(error)
    }

  }

  filterRecipie(key: any, value: any) {
this.allRecipies=this.dummyArray.filter((item:any)=>item[key].includes(value))
console.log(this.allRecipies);

  }


  viewRecipie(id: any) {
    if (sessionStorage.getItem('token')) {
      this.route.navigateByUrl(`/View-Recipie/${id}`)
    } else {
      alert("please login")
    }
  }

 

}
