import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  constructor(private http:HttpClient) {
    super(http);
   }

   baseUrl:string='https://localhost:44334/'
  
   registerUser(user:User){
      return this.http.post(this.baseUrl+"User/CreateUser",user,{
        responseType:'text',
      });
   }


   loginUser(user:User){
      return this.http.post(this.baseUrl+"User/LoginUser",user,{
        responseType:'text',
      });
   }

}
