import { AfterViewInit, Component, OnInit } from '@angular/core';
import { appService } from '../service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search-content', 
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent implements AfterViewInit {

  constructor(public service:appService,private router:ActivatedRoute){}

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
      this.totalResult=res.articles.length;
      this.searchResult=res.articles;
      console.log("res",res)
    })
  }
}
