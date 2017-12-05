import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RouterModule,Routes,Router} from '@angular/router';
import { DbserviceService } from '../dbservice.service';
import { FormControl, FormGroup ,Validators} from '@angular/forms';



@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchTerm:string;
  noOfRecord:number;
  result:any;
  constructor(private route: ActivatedRoute,private _dataService :DbserviceService) { }

  ngOnInit() {

    this.route.params.subscribe(params =>
      {
        this.searchTerm=params['location'];

        console.log(this.searchTerm);
       // this.quizQuesDetail=this.quizDetail.getQuestionByNo(this.pageNo);

      // this.totalQuestion=this.quizDetail.getTotalNoOfQuestion();

      this.result= this._dataService.getHotels(this.searchTerm,5).subscribe(res=>this.result=res)
      
       }
    
    
    )


  }

}
