import { Component } from '@angular/core';
import { appService } from '../service.service';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent {
  totalResult: any;
  searchResult: any;
  blockStyle:any;
  constructor(public service:appService, private themeService: ThemeService) { 
    this.themeService.theme$.subscribe((isDarkTheme: boolean) => {
      this.getThemeSetUp(isDarkTheme);
    });
    this.service.getNewsByKeyword("natural disaster")
    .subscribe((res:any)=>{
      this.totalResult=res.news.length;
      this.searchResult=res.news;
      console.log("res",res)
    })
  }

  getThemeSetUp(isDarkTheme: boolean = this.themeService.getTheme()){
    if (isDarkTheme) {
      this.blockStyle ={
        'background-color': 'rgb(45, 45, 45)',
        'color': 'white',
        'border': '1px solid rgb(41, 41, 41)'
      }
    } else {
      this.blockStyle ={
        'color': 'black',
      }
    }
  }
}
