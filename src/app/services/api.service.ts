import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  serverUrl = 'http://localhost:3000'
  constructor(private http:HttpClient) { }

  registerAPI(reqBody:any){
   return this.http.post(`${this.serverUrl}/api/register`,reqBody)
  }

    loginAPI(reqBody:any){
   return this.http.post(`${this.serverUrl}/api/login`,reqBody)
  }
    addTestimony(reqBody:any){
   return this.http.post(`${this.serverUrl}/api/addTestimony`,reqBody)
  }
    getTestimony(){
   return this.http.get(`${this.serverUrl}/api/getTestimony`)
  }

    getAllrecipies(){
   return this.http.get(`${this.serverUrl}/api/allRecipies`)
  }

   getArecipie(){
   return this.http.get(`${this.serverUrl}/api/getArecipie/:id`)
  }

}
