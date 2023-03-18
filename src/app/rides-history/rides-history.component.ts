import { Component, OnInit } from '@angular/core';
import { RideUserInfo } from '../Models/RideUserInfo';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-rides-history',
  templateUrl: './rides-history.component.html',
  styleUrls: ['./rides-history.component.css']
})
export class RidesHistoryComponent implements OnInit {

  offeredRide!:Array<RideUserInfo>;
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.getOfferedRide.subscribe(res=>{
      this.offeredRide=res;
    })
  }

}
