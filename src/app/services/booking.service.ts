import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { RideUserInfo } from '../Models/RideUserInfo';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  baseUrl:string='https://localhost:44334/';
  bookRide(email:string,source:string,destination:string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",email);
    queryParams=queryParams.append("source",source);
    queryParams=queryParams.append("destination",destination);
    return this.http.get(this.baseUrl+'Offering/SearchRides',{params:queryParams}).pipe(
      map((res:any)=>{
        console.log(res);
        return res.map((obj:any)=>new RideUserInfo(obj));
    }))
  }
}
