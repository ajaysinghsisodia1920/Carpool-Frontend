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
        // console.log(res);
        return res.map((obj:any)=>new RideUserInfo(obj));
    }))
  }

  offerRide(email:string,source:string,destination:string){
    console.log(email);
    console.log(source);
    console.log(destination);
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",email);
    queryParams=queryParams.append("source",source);
    queryParams=queryParams.append("destination",destination);
    return this.http.post(this.baseUrl+'Offering/AddRides',null,{params:queryParams});
  }
}
