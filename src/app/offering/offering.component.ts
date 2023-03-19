import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { OfferingService } from '../services/offering.service';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.css']
})
export class OfferingComponent implements OnInit {

  title:string="Offer";
  constructor(private authService:AuthService,private sharedService:SharedService,private toastrService:ToastrService,private offeringService:OfferingService) { }
  source!:string;
  destination!:string;
  date!:string;
  email!:string;
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
      if(res=='offering'){
        this.offerRide();
      }
    })
  }


  offerRide(){
    this.email=this.authService.loadCurrentUser().email;
    this.offeringService.offerRide(this.email,this.source,this.destination).subscribe(res=>{
      // console.log(res);
      this.toastrService.info("You are offering a ride","Ride Offered")
    });
  }
}
