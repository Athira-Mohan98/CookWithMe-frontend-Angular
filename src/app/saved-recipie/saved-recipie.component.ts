import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-saved-recipie',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './saved-recipie.component.html',
  styleUrl: './saved-recipie.component.css'
})
export class SavedRecipieComponent {

}
