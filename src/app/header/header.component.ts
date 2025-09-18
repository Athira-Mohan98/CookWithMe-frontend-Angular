import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isLoggedIn : boolean=false
  isUserName:string=""
  constructor(private route:Router){}

  ngOnInit(): void {
    if (sessionStorage.getItem('token')&& JSON.parse(sessionStorage.getItem('user')||"")) {
      this.isLoggedIn=true
      this.isUserName=JSON.parse(sessionStorage.getItem("user")|| "").userName
    } else {
      this.isLoggedIn=false
      this.isUserName=""
    }

  }

  logout(){
    sessionStorage.clear()
    this.isLoggedIn=false
    this.isUserName=""
    this.route.navigateByUrl('/')
}
}