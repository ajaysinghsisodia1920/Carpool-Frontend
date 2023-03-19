import { Component, OnInit } from '@angular/core';
import { RideUserInfo } from '../Models/RideUserInfo';
import { AuthService } from '../services/auth.service';
import { BookingService } from '../services/booking.service';
import { OfferingService } from '../services/offering.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  offeredRideUserInfo!: Array<RideUserInfo>;
  bookedRideUserInfo!:Array<RideUserInfo>;
  constructor(private authService: AuthService, private offeringService: OfferingService, private sharedService: SharedService, private bookingService: BookingService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.removeToken();
  }

  getRidesHistory() {
    var userInfo = this.authService.loadCurrentUser();
    var email = userInfo.email;
    this.offeringService.getOfferedRidesHistory(email).subscribe((res: any) => {
      this.bookedRideUserInfo = res;
      this.sharedService.injectOfferedUserInfo(this.bookedRideUserInfo);
    });
    this.bookingService.getBookedRidesHistory(email).subscribe((res: any) => {
      this.offeredRideUserInfo=res;
      this.sharedService.injectBookedUserInfo(this.offeredRideUserInfo);
    });

  }
}
