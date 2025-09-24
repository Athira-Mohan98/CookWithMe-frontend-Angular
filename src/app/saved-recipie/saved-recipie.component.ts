import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-saved-recipie',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './saved-recipie.component.html',
  styleUrl: './saved-recipie.component.css'
})
export class SavedRecipieComponent implements OnInit {

  recipieId: string = ""
  savedRecipies: any = []

  constructor(private ar: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.ar.params.subscribe((res) => {
      console.log(res);
       this.recipieId
      this.getAllSavedRecipies()

    })
  }

  getAllSavedRecipies(){
    try {
      
      this.api.getAllSavedRecipie().subscribe((item)=>{
        console.log(item);
        this.savedRecipies=item
        
      })
    } catch (error) {
      console.log("error"+error);
      
    }
  }

  deletedRecipie(id:string){
try {
  this.api.deletesavedRecipie(id).subscribe((item)=>{
    console.log(item);
    alert("Recipie successfully deleted")
    this.getAllSavedRecipies()
    
  })
} catch (error) {
  console.log(error);
  
}
  }
}
