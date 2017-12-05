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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,HttpModule, ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'home', component : HomeComponent},
      {path: 'search',component: SearchComponent},
      {path: 'searchResult/:location/:result',component: SearchResultComponent}
     // {path: 'quiz/:quesNo',component: SearchComponent},
   //   {path: 'result',component: ResultsComponent},
    ])
  ],
  providers: [DbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
