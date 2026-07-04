import { Component } from '@angular/core';
import { appService } from '../service.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent {
  totalResult: any;
  searchResult: any;

  constructor(public service:appService) { 
    // this.searchResult=[{
    //         "source": {
    //             "id": null,
    //             "name": "Rediff.com"
    //         },
    //         "author": "SREEJU SUDHAKARAN",
    //         "title": "The Furious Review: Best Action Film Of The Decade?",
    //         "description": "The Furious's jaw-dropping action scenes are so ferocious and inventive that they leave you gasping for breath, commends Sreeju Sudhakaran.",
    //         "url": "https://www.rediff.com/movies/review/the-furious-review-kenji-tanigakis-action-thriller-sets-new-standards/20260618.htm",
    //         "urlToImage": "https://im.rediff.com/1200-630/movies/2026/jun/16the-furious1.jpg",
    //         "publishedAt": "2026-06-18T03:34:48Z",
    //         "content": "The Furious's jaw-dropping action scenes are so ferocious and inventive that they leave you gasping for breath, commends Sreeju Sudhakaran.\r\nIMAGE: Xie Miao and Yang Enyou in The Furious.\r\nKey Points… [+8185 chars]"
    //     },{
    //         "source": {
    //             "id": null,
    //             "name": "Rediff.com"
    //         },
    //         "author": "SREEJU SUDHAKARAN",
    //         "title": "The Furious Review: Best Action Film Of The Decade?",
    //         "description": "The Furious's jaw-dropping action scenes are so ferocious and inventive that they leave you gasping for breath, commends Sreeju Sudhakaran.",
    //         "url": "https://www.rediff.com/movies/review/the-furious-review-kenji-tanigakis-action-thriller-sets-new-standards/20260618.htm",
    //         "urlToImage": "https://im.rediff.com/1200-630/movies/2026/jun/16the-furious1.jpg",
    //         "publishedAt": "2026-06-18T03:34:48Z",
    //         "content": "The Furious's jaw-dropping action scenes are so ferocious and inventive that they leave you gasping for breath, commends Sreeju Sudhakaran.\r\nIMAGE: Xie Miao and Yang Enyou in The Furious.\r\nKey Points… [+8185 chars]"
    //     }]
    this.service.getNewsByKeyword("natural disaster")
    .subscribe((res:any)=>{
      this.totalResult=res.articles.length;
      this.searchResult=res.articles;
      console.log("res",res)
    })
  }
}
