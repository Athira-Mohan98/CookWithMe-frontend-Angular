import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RecipieModel } from '../Model/recipieModel';

@Component({
  selector: 'app-manage-recipie',
  templateUrl: './manage-recipie.component.html',
  styleUrl: './manage-recipie.component.css'
})
export class ManageRecipieComponent implements OnInit {
recipieDetails:RecipieModel={}
cuisineArray:any=[]
mealTypeArray:any=[]
ingredients:any=[]
instructions:any=[]

constructor (private api:ApiService){}
  ngOnInit(): void {
   this.getallrecipie()
  }

getallrecipie(){
  this.api.getAllrecipies().subscribe((res:any)=>{
    console.log(res);
    this.recipieDetails = res    
res.forEach((item:any) => {
  !this.cuisineArray.includes(item.cuisine) && this.cuisineArray.push(item.cuisine)
});
console.log(this.cuisineArray);

  })
}

}
