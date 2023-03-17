import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RideUserInfo } from '../Models/RideUserInfo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() rideInfo!:RideUserInfo;
  @Output() e=new EventEmitter<string>();
  constructor() { }
  
  ngOnInit(): void {
  }

  

}
