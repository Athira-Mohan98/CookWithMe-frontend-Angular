import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-recipie',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './view-recipie.component.html',
  styleUrl: './view-recipie.component.css'
})
export class ViewRecipieComponent implements OnInit {
  recipieId: string = ""
  recipieDetails: any = {}
  constructor(private ar: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.ar.params.subscribe((item: any) => {
      console.log(item);
      this.recipieId = item.id
      this.getArecipie()
    })
  }

  getArecipie() {

    try {

      const token = sessionStorage.getItem('token');
      this.api.getArecipie().subscribe((item: any) => {
        console.log(item);
          console.log(token);
        this.recipieDetails = item

      })
    } catch (error) {
      console.log("error" + error)
    }

  }

}
