import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

import { HttpModule } from '@angular/http';
import { DbserviceService } from './dbservice.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    RouterModule.forRoot([
      {path: 'home', component : HomeComponent},
      {path: 'search',component: SearchComponent}
     // {path: 'quiz/:quesNo',component: SearchComponent},
   //   {path: 'result',component: ResultsComponent},
    ])
  ],
  providers: [DbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
