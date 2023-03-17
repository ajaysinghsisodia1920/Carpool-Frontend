import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchRideData } from '../Models/SearchRideData';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-search-ride',
  templateUrl: './search-ride.component.html',
  styleUrls: ['./search-ride.component.css']
})
export class SearchRideComponent implements OnInit {

  @Output() source=new EventEmitter<string>();
  @Output() destination=new EventEmitter<string>();
  // submitClicked=new EventEmitter<SearchRideData>();
  constructor(private bookingService:BookingService) { }

  ngOnInit(): void {
    
  }

  searchRideForm=new FormGroup({
    source:new FormControl(""),
    destination:new FormControl(""),
    date:new FormControl("")
  });
  
  searchRide(){
    console.log("submit call");
    console.log(this.searchRideForm.value.source);
    this.source.emit(this.searchRideForm.value.source!);
    this.destination.emit(this.searchRideForm.value.destination!);
    // this.submitClicked(new SearchRideData)
  }
}
