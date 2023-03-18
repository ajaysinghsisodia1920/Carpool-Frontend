import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../Models/User';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  jwtHelperService=new JwtHelperService();
  currentUser:BehaviorSubject<any>=new BehaviorSubject(null);
  baseUrl:string='https://localhost:44334/'
  constructor(private http:HttpClient) {
    super(http);
   }
  
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

   setToken(token:string){
    localStorage.setItem("access_token",token);
    this.loadCurrentUser();
   }

   loadCurrentUser(){
    const token=localStorage.getItem("access_token");
    console.log(token);
    const userInfo=token!=null?this.jwtHelperService.decodeToken(token):null;
    console.log(userInfo);
    return userInfo;
   }

   isLoggedIn(){
     return localStorage.getItem("access_token")?true:false;
   }

   removeToken(){
     localStorage.removeItem("access_token");
   }
}
