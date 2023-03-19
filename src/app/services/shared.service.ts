import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { RideUserInfo } from '../Models/RideUserInfo';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  getOfferedRide=new Subject<Array<RideUserInfo>>();
  getBookedRide=new Subject<Array<RideUserInfo>>();
  source=new Subject<string>();
  destination=new Subject<string>();
  date=new Subject<string>();
  path=new Subject<string>();
  constructor(){
    
  }
  injectOfferedUserInfo(rideUserInfo:Array<RideUserInfo>){
    this.getOfferedRide.next(rideUserInfo);
  }

  injectBookedUserInfo(rideUserInfo:Array<RideUserInfo>){
    this.getBookedRide.next(rideUserInfo);
  }
  loggedSearchRideForm(path:string,source:string,destination:string,date:string){
    this.source.next(source);
    this.destination.next(destination);
    this.date.next(date);
    this.path.next(path);
  }
}
