import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-view-recipie',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './view-recipie.component.html',
  styleUrl: './view-recipie.component.css'
})
export class ViewRecipieComponent implements OnInit {

  recipieId: string = ""
  recipies: any = {}
  relatedRecipie: any = []
  savedRecipie: any = []

  constructor(private ar: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.ar.params.subscribe((item: any) => {
      console.log(item);
      this.recipieId = item.id
      this.getArecipie(this.recipieId)


    })
  }

  getArecipie(recipieId: string) {

    try {

      this.api.getArecipie(recipieId).subscribe((item: any) => {
        console.log(item);
        this.recipies = item
        this.getRelatedrecipies(item.cuisine)

      })
    } catch (error) {
      console.log("error" + error)
    }

  }


  getRelatedrecipies(cuisine: any) {
    try {

      this.api.getRelatedrecipies(cuisine).subscribe((res: any) => {
        console.log(res);
        this.relatedRecipie = res

      })
    } catch (error) {
      console.log("error" + error);

    }
  }


  addsavedRecipie(id: any) {

    const reqBody = {

      name: this.recipies.name,
      image: this.recipies.image,

    }
    try {
      this.api.AddsavedRecipie(reqBody, id).subscribe((res: any) => {
        console.log(res);
        this.savedRecipie = res
        alert("Recipie added to your collections")

      })

    } catch (error) {
      console.log("error" + error);

    }
  }

   downloadRecipie(){
    this.api.AddDownloadedRecipie(this.recipies, this.recipieId).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.generatePDF()
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  generatePDF(){
const pdf = new jsPDF()
    pdf.setFontSize(16)
    pdf.setTextColor("red")
    pdf.text(this.recipies.name,10,10)
    pdf.setFontSize(12)
    pdf.setTextColor("black")
    //pdf content
    pdf.text(`Cuisine : ${this.recipies.cuisine}`,10,20)
    pdf.text(`Servings : ${this.recipies.servings}`,10,25)
    pdf.text(`Mode of Cooking : ${this.recipies.difficulty}`,10,30)
    pdf.text(`Total Preparation Time : ${this.recipies.prepTimeMinutes} Minutes`,10,35)
    pdf.text(`Total Cooking Time : ${this.recipies.cookTimeMinutes} Minutes`,10,40)
    pdf.text(`Total Calorie Per Servings : ${this.recipies.caloriesPerServing}`,10,45)
    let head = [['Ingredients Needed','Cooking Instructions']]
    let body = []
    body.push([this.recipies.ingredients,this.recipies.instructions])
    //table generation
    autoTable(pdf,{head,body,startY:50})
    pdf.output('dataurlnewwindow')
    pdf.save('download-recipe.pdf')

  }

}
