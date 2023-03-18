import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { RideUserInfo } from '../Models/RideUserInfo';

@Injectable({
  providedIn: 'root'
})
export class OfferingService {

  baseUrl:string='https://localhost:44334/';
  // http: any;
  constructor(private http:HttpClient) { }

  getOfferedRidesHistory(email:string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",email);
    return this.http.get(this.baseUrl+'Offering/GetRidesHistory',{params:queryParams}).pipe(
      map((res:any)=>{
        console.log(res);
        return res.map((obj:any)=>new RideUserInfo(obj));
    }))
  }
}
