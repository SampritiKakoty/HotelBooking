import { Component, OnInit } from '@angular/core';

import {RouterModule,Routes,Router,ActivatedRoute} from '@angular/router';
import { DbserviceService } from '../dbservice.service';
import { FormControl, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-bookhotel',
  templateUrl: './bookhotel.component.html',
  styleUrls: ['./bookhotel.component.css']
})
export class BookhotelComponent implements OnInit {

 
  id: any;
  hotelDetails:any;


  customerForm = new FormGroup ({
    custname: new FormControl(),
    custAddress:new FormControl(),
    custCity:new FormControl(),
    custZip:new FormControl()


  });

  constructor(private route: ActivatedRoute,private _dataService :DbserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      {

        this.id=params['id'];
        this.hotelDetails= this._dataService.getHotelDetail(this.id).subscribe(res=>this.hotelDetails=res)

        console.log("Show id:::"+this.id)
        console.log("Show details:::"+this.hotelDetails)
      })
  }

  customerData(){

    
   console.log("Sumit data"+this.customerForm.controls['custname'].value);

  }


}
