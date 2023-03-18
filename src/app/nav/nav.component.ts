import { Component, OnInit } from '@angular/core';
import { RideUserInfo } from '../Models/RideUserInfo';
import { AuthService } from '../services/auth.service';
import { OfferingService } from '../services/offering.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  rideUserInfo!:Array<RideUserInfo>;
  constructor(private authService:AuthService,private offeringService:OfferingService,private sharedService:SharedService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.removeToken();
  }

  getRidesHistory(){
    var userInfo=this.authService.loadCurrentUser();
    var email=userInfo.email;
    this.offeringService.getOfferedRidesHistory(email).subscribe((res:any)=>{
      console.log(res);
      this.rideUserInfo=res;
      this.sharedService.inject(this.rideUserInfo);
    });
    this.offeringService.getOfferedRidesHistory(email).subscribe((res:any)=>{
      console.log(res);
    });
    
  }
}
