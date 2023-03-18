import { Component, OnInit } from '@angular/core';
import { RideUserInfo } from '../Models/RideUserInfo';
import { SearchRideData } from '../Models/SearchRideData';
import { AuthService } from '../services/auth.service';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  // rideUserInfo:Array<RideUserInfo>=[{ridername:"Ajay Singh",source:"a",destination:"b"}];
  rideUserInfo!:Array<RideUserInfo>;
  rideInfo!:RideUserInfo;
  src!:string;
  dst!:string;
  email!:string;//replace and  get from the local storage
  searchRidesCalled:boolean=false;
  constructor(private authService:AuthService,private bookingService:BookingService) { }

  ngOnInit(): void {
    // this.searchDate.header="book";
  }

  source(src:any){
    this.src=src;
    // console.log(this.src);
    this.searchRiders();
  }
  destination(dst:any){
    this.dst=dst;
    // console.log(this.dst);
    this.searchRiders();
  }

  searchRiders(){
    this.searchRidesCalled=true;
    this.email=this.authService.loadCurrentUser().email;
    this.bookingService.bookRide(this.email,this.src,this.dst).subscribe((res)=>{
        console.log(res);
        this.rideUserInfo=res;
    });
  }
  
  
}
