import { Component } from '@angular/core';
import { appService } from '../service.service';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  searchText: string = '';
  movieList: any = [];
  showMovieDetails: boolean = false;
  movieDeatail:any;
  showLoading: boolean = false;
  blockStyle:any;
  constructor(private service:appService,private themeService: ThemeService) {
    this.themeService.theme$.subscribe((isDarkTheme: boolean) => {
      this.getThemeSetUp(isDarkTheme);
    });
   }

  getThemeSetUp(isDarkTheme: boolean = this.themeService.getTheme()){
    if (isDarkTheme) {
      this.blockStyle ={
        'color': 'white',
      }
    } else {
      this.blockStyle ={
        'color': 'black',
      }
    }
  }
  Search() {
    this.showLoading = true;
    this.service.getMovieOverallData(this.searchText)
    .subscribe((data: any) => {
      this.movieList= data;
      this.showLoading = false;
      console.log(data);
    }, (error: any) => {
      this.showLoading = false;
      console.error(error);
    });
  }

  getMovieDetails(title: string, year: string,type:any) {
    if(type=='movie'){  
      this.showLoading = true;
    this.service.getMovieData(title, year)
    .subscribe((data: any) => {
      this.showLoading = false;   
      this.showMovieDetails = true;
      this.movieDeatail = data;
      console.log(data);
    }, (error: any) => {
      this.showLoading = false;
      console.error(error);
    });
  }
  }


}
