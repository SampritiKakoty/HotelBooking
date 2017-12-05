import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule  }   from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

import { HttpModule } from '@angular/http';
import { DbserviceService } from './dbservice.service';
import { SearchResultComponent } from './search-result/search-result.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { BookhotelComponent } from './bookhotel/bookhotel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SearchResultComponent,
    HotelDetailsComponent,
    BookhotelComponent
  ],
  imports: [
    BrowserModule,HttpModule, ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'home', component : HomeComponent},
      {path: 'search',component: SearchComponent},
      {path: 'searchResult/:location/:result',component: SearchResultComponent},
      {path: 'hotelDetail/:id',component: HotelDetailsComponent},
      {path: 'bookHotel/:id',component: BookhotelComponent},
    ])
  ],
  providers: [DbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
