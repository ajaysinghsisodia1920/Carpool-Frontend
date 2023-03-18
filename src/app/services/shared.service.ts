import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RideUserInfo } from '../Models/RideUserInfo';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  getOfferedRide=new EventEmitter<Array<RideUserInfo>>();
  constructor(){
    
  }
  inject(rideUserInfo:Array<RideUserInfo>){
    this.getOfferedRide.emit(rideUserInfo);
  }
}
