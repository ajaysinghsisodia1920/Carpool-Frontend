import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SearchRideData } from '../Models/SearchRideData';
import { BookingService } from '../services/booking.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-search-ride',
  templateUrl: './search-ride.component.html',
  styleUrls: ['./search-ride.component.css']
})
export class SearchRideComponent implements OnInit {

  @Output() source=new EventEmitter<string>();
  @Output() destination=new EventEmitter<string>();
  @Input() title!:string;
  // submitClicked=new EventEmitter<SearchRideData>();
  constructor(private bookingService:BookingService,private sharedService:SharedService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  searchRideForm=new FormGroup({
    source:new FormControl(""),
    destination:new FormControl(""),
    date:new FormControl("")
  });
  
  searchRide(){
    // console.log(this.searchRideForm.value.source);
    // this.source.emit(this.searchRideForm.value.source!);
    // this.destination.emit(this.searchRideForm.value.destination!);
    // this.submitClicked(new SearchRideData)
    var source=this.searchRideForm.value.source!;
    var destination=this.searchRideForm.value.destination!;
    var date=this.searchRideForm.value.destination!;
    this.route.url.subscribe(res=>{
      this.sharedService.loggedSearchRideForm(res[0].path,source,destination,date);
    })
  }
}
