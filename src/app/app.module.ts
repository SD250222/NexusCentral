import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { SearchContentComponent } from './main/search-content/search-content.component';
import { appService } from './main/service.service';
import { WeatherReportComponent } from './main/weather-report/weather-report.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CryptoComponent } from './main/crypto/crypto.component';
import { ChartModule } from 'angular-highcharts';
import { SportsComponent } from './main/sports/sports.component';
import { MovieComponent } from './main/movie/movie.component';
import { BookComponent } from './main/book/book.component';
import { RecipesComponent } from './main/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchContentComponent,
    WeatherReportComponent,
    CryptoComponent,
    SportsComponent,
    MovieComponent,
    BookComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ChartModule 
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
