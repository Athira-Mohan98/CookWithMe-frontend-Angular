import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  allUsers:any=[]
constructor (private api:ApiService){}
  ngOnInit(): void {
    this.getAllusers()
  }


getAllusers(){
  this.api.getallUsers().subscribe((res:any)=>{
    console.log(res);
    this.allUsers = res
  })
}
}
