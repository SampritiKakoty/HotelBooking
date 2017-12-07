import { Component, OnInit } from '@angular/core';
import { DbserviceService } from '../dbservice.service';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
  // providers: [ROUTER_PROVIDERS]
})
export class SearchComponent implements OnInit {

  dropDownVal=[1,5,10];
//

   searchForm = new FormGroup ({
    searchString1: new FormControl(),
    valueSelected:new FormControl()



  });

  constructor(private router: Router) { 


  //this._dataService.getUsers().subscribe(res=>this.users=res)
    
  }

  ngOnInit() {


  }

  doSearch(value){

    
  
   this.router.navigate(['searchResult',value.searchString1,5]);
    //this._dataService.getHotels(value.searchString1,5).subscribe(res=>this.result=res)
    console.log("hdjhkjfhklf"+JSON.stringify(value));
   //this.router.navigate(['./home']);
  }


 

}
