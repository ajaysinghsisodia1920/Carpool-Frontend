import { Component, OnInit } from '@angular/core';
import { RideUserInfo } from '../Models/RideUserInfo';
import { SearchRideData } from '../Models/SearchRideData';
import { AuthService } from '../services/auth.service';
import { BookingService } from '../services/booking.service';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  // rideUserInfo:Array<RideUserInfo>=[{ridername:"Ajay Singh",source:"a",destination:"b"}];
  rideUserInfo!:Array<RideUserInfo>;
  rideInfo!:RideUserInfo;
  source!:string;
  destination!:string;
  date!:string;
  email!:string;//replace and  get from the local storage
  searchRidesCalled:boolean=false;
  title:string="Book";
  constructor(private sharedService:SharedService,private toastrService:ToastrService,private authService:AuthService,private bookingService:BookingService) { }

  ngOnInit(): void {
    this.sharedService.source.subscribe(res=>{
      this.source=res;
    })
    this.sharedService.destination.subscribe(res=>{
      this.destination=res;
    })
    this.sharedService.destination.subscribe(res=>{
      this.date=res;
    })
    this.sharedService.path.subscribe(res=>{
      if(res=='booking'){
        this.searchRiders();
      }
    })
  }


  searchRiders(){
    this.searchRidesCalled=true;
    this.email=this.authService.loadCurrentUser().email;
    this.bookingService.searchRide(this.email,this.source,this.destination).subscribe((res)=>{
        this.rideUserInfo=res;
        if(this.rideUserInfo.length==0){
          this.toastrService.info("No one is offering a ride");
        }
    });
  }
  
  
}
