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

 

  // public searchForm = this.fb.group({
   // searchString: ["", Validators.required]
   // password: ["", Validators.required]
  //});

   //searchForm: FormGroup;

  

   searchForm = new FormGroup ({
    searchString1: new FormControl()
  });

  constructor(private router: Router) { 


  //this._dataService.getUsers().subscribe(res=>this.users=res)
    
  }

  ngOnInit() {


  }

  doSearch(value){

    
   //this._dataService.getHotels( value.searchString1,5);
   this.router.navigate(['searchResult',value.searchString1,5]);
    //this._dataService.getHotels(value.searchString1,5).subscribe(res=>this.result=res)

   //this.router.navigate(['./home']);
  }


 

}
