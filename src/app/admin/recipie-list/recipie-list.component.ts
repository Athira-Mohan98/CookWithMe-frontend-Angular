import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrl: './recipie-list.component.css'
})
export class RecipieListComponent implements OnInit {

  allRecipies:any=[]
   p: number = 1;
   SearchKey:string=""

  constructor (private api:ApiService){}

  ngOnInit(): void {
  this.getAllrecipie()
  }

  getAllrecipie(){
    this.api.getAllrecipies().subscribe((res:any)=>{
      console.log(res);
      this.allRecipies = res
      
    })
  }

  
}
