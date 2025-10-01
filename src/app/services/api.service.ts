import { HttpClient, HttpHeaders } from '@angular/common/http';
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

//append token to the header
appendToken(){

let headers = new HttpHeaders()
let token = sessionStorage.getItem("token")

if(token){
  headers=headers.append("Authorization",`Bearer ${token}`)
}
return {headers}
}

   getArecipie(id:string){
   return this.http.get(`${this.serverUrl}/api/getArecipie/${id}`,this.appendToken())
  }


   getRelatedrecipies(cuisine:any){
   return this.http.get(`${this.serverUrl}/api/getRelatedrecipies?cuisine=${cuisine}`,this.appendToken())
  }

    AddsavedRecipie(reqBody:any,id:string){
   return this.http.post(`${this.serverUrl}/api/savedrecipies/${id}`,reqBody,this.appendToken())
  }
  
 getAllSavedRecipie(){
   return this.http.get(`${this.serverUrl}/api/getsavedrecipies`,this.appendToken())
  }

   deletesavedRecipie(id:string){
   return this.http.delete(`${this.serverUrl}/api/deleterecipie/${id}`,this.appendToken())
  }

     AddDownloadedRecipie(reqBody:any,id:string){
   return this.http.post(`${this.serverUrl}/api/downloadedRecipies/${id}`,reqBody,this.appendToken())
  }
  
 getdownloadedRecipie(){
   return this.http.get(`${this.serverUrl}/api/getdownloadedRecipies`,this.appendToken())
  }

  updateUser(reqBody:any){
   return this.http.post(`${this.serverUrl}/api/userProfile/`,reqBody,this.appendToken())
  }

  getallUsers(){
   return this.http.get(`${this.serverUrl}/api/getallusers`,this.appendToken())
  }

  getalldownloads(){
   return this.http.get(`${this.serverUrl}/api/getalldownloads`,this.appendToken())
  }

   addRecipie(reqBody:any){
   return this.http.post(`${this.serverUrl}/api/admin/addrecipie`,reqBody,this.appendToken())
  }

 updateRecipie(recipieId:string, reqBody:any){
   return this.http.put(`${this.serverUrl}/api/admin/updateRecipie/${recipieId}`,reqBody,this.appendToken())
  }
   deleteRecipie(recipieId:string){
   return this.http.delete(`${this.serverUrl}/api/admin/deleteRecipie/${recipieId}`,this.appendToken())
  }
}
