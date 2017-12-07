import { Component, OnInit } from '@angular/core';

import {RouterModule,Routes,Router,ActivatedRoute} from '@angular/router';
import { DbserviceService } from '../dbservice.service';
import { FormControl, FormGroup ,Validators,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-bookhotel',
  templateUrl: './bookhotel.component.html',
  styleUrls: ['./bookhotel.component.css']
})
export class BookhotelComponent implements OnInit {

 
  id: any;
  hotelDetails:any;
  custname:AbstractControl;
  numb:AbstractControl;
  customerSaved:any
  isCustomerSaved:boolean=false;


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
        
       // console.log("Show id:::"+this.id)
        //console.log("Show details:::"+this.hotelDetails)

       
      })
  }

  customerData(){

    this._dataService.saveCustomerDetails(
      this.id,
      this.customerForm.get('custname').value,
       this.customerForm.get('custAddress').value,
        this.customerForm.get('custCity').value, 
        this.customerForm.get('custZip').value
      ).subscribe(res=>this.customerSaved=res)
        
        ;

        console.log("Hello.......");

        //console.log("Hello...1...."+this.customerSaved);
       
  
  if(this.customerSaved !=null ){

        
    this.isCustomerSaved=true;}
    
  console.log("Report::::"+this.isCustomerSaved);

  }


}
