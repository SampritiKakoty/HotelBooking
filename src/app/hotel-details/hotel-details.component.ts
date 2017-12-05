import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RouterModule,Routes,Router} from '@angular/router';
import { DbserviceService } from '../dbservice.service';
import { FormControl, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  id: any;
  hotelDetails:any;

  constructor(private route: ActivatedRoute,private _dataService :DbserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      {

        this.id=params['id'];
        this.hotelDetails= this._dataService.getHotelDetail(this.id).subscribe(res=>this.hotelDetails=res)

        console.log("Show id:::"+this.id)
      })
  }

}
