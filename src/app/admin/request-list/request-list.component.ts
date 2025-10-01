import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrl: './request-list.component.css'
})
export class RequestListComponent implements OnInit{

  alltestimony:any=[]
   p: number = 1;
   
  constructor (private api:ApiService){}
  ngOnInit(): void {
    this.getTestimony()
  }

  getTestimony(){
    this.api.getTestimony().subscribe((res:any)=>{
      console.log(res);
      this.alltestimony = res
    })
  }
}
