import { AfterViewInit, Component, OnInit } from '@angular/core';
import { appService } from '../service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/theme.service';
@Component({
  selector: 'app-search-content', 
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent implements AfterViewInit {


  blockStyle:any;
  constructor(public service:appService,private router:ActivatedRoute,private themeService: ThemeService) { 
        this.themeService.theme$.subscribe((isDarkTheme: boolean) => {
          this.getThemeSetUp(isDarkTheme);
        });
  }

  searchResult:any;
  totalResult=0;
  TitleName:any;
  ngAfterViewInit(){
    this.router.params.subscribe(params => {
      this.TitleName = params['searchText'];
      this.getSearchContentNews(this.TitleName)
  })
    
  }

  getSearchContentNews(searchText: string){
    this.service.getNewsByKeyword(searchText)
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
