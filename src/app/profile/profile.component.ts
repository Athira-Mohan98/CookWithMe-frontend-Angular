import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  constructor(private api:ApiService){}

  downloadedList:any=[]
  imageUrl='https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg'

  ngOnInit(): void {
   this.api.getdownloadedRecipie().subscribe({
    next:(res:any)=>{
      console.log(res);
      sessionStorage.setItem("user",JSON.stringify(res))
      alert("Profilepic updated")
      this.downloadedList = res
      
    },
   error:(err:any)=>{
    console.log(err);
    
   }
    
   })

   const user = JSON.parse
   (sessionStorage.getItem("user") || "")
   if(user.profilePic){
    this.imageUrl = user.profilePic
   }
  }
getFileName(event:any){
  console.log(event.target.files[0]);
  const updateFile = event.target.files[0]
  let fr = new FileReader
  fr.readAsDataURL(updateFile)
  fr.onload=(event:any)=>{
    console.log(event.target.result);
    this.imageUrl = event.target.result
    
  }
  
}
userProfileUpdate() {
  this.api.updateUser({ profilePic: this.imageUrl }).subscribe({
    next: (res: any) => {
      console.log(res);
    },
    error: (err: any) => {
      console.log(err);
    }
  });
}

}
