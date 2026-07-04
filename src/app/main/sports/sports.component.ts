import { AfterViewInit, Component } from '@angular/core';
import { appService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements AfterViewInit {

  constructor(public service:appService,private router:ActivatedRoute){}

  searchResult:any;
  totalResult=0;
  TitleName:any;
  fifaGames:any;
ngAfterViewInit(){
    this.router.params.subscribe(params => {
      this.getSearchContentNews("Sports")
  })
    
  }

  getSearchContentNews(searchText: string){
    this.service.getNewsByKeyword(searchText)
    .subscribe((res:any)=>{
      this.totalResult=res.articles.length;
      this.searchResult=res.articles;
      console.log("res",res)
    })
    this.service.fifaGames()
    .subscribe((res:any)=>{
      this.fifaGames=res.response.filter((game:any)=>game.league.name=='World Cup');
      console.log("res",res)
    })
  }
}
