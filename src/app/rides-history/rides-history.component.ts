import { Component, OnInit } from '@angular/core';
import { connect } from 'rxjs';
import { RideUserInfo } from '../Models/RideUserInfo';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-rides-history',
  templateUrl: './rides-history.component.html',
  styleUrls: ['./rides-history.component.css']
})
export class RidesHistoryComponent implements OnInit {

  offeredRide!:Array<RideUserInfo>;
  bookedRide!:Array<RideUserInfo>;
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.getOfferedRide.subscribe(res=>{
      console.log(res);
      this.offeredRide=res;
    })
    this.sharedService.getBookedRide.subscribe(res=>{
      console.log(res);
      this.bookedRide=res;
    })
  }

}
