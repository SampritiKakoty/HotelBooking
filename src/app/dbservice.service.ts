import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams  } from '@angular/http';
import {HttpClient,HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DbserviceService {
  result:any;
  hotels:any;

  params: URLSearchParams = new URLSearchParams();
  requestOptions = new RequestOptions();



  
    constructor(private _http: Http) { }
  
    getUsers() {
      return this._http.get("/api/users")
        .map(result => this.result = result.json().data);
    }

    getHotels(location,numberOfResult){

      this.params.set('location',location);
      this.params.set('count',numberOfResult);
      this.requestOptions.search= this.params;

          return this._http.get('http://localhost:4000/api/hotels',
           this.requestOptions)
           .map(hotels => this.hotels = hotels.json().data);

    }
  

}
