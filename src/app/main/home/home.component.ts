import { Component, OnInit } from '@angular/core';
import { appService } from '../service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public Service: appService) { }
  selectedNews: any;
  headlines: any;
  showSources: boolean = false;
  sources: any = [];
  weatherReport: any;
  sunriseTime: any;
  sunsetTime: any;
  showLoading: boolean = true;
  ngOnInit() {
    this.Service.getHeadlines()
      .subscribe((res: any) => {
        this.headlines = res
        this.selectedNews = res.articles[0];
        this.showLoading = false;
      })
      
    this.Service.getSources().subscribe((res: any) => {
      res.sources.forEach((e: any) => {
        if (e.country == "in" || e.country == "ca") {
          if (e.name.includes("Google")) {
            if (e.name == "Google News (Canada)") {
              e.name = "Google News (CA)"
            } else if (e.name == "Google News (India)") {
              e.name = "Google News (IN)"
            }
            e.logo = "https://app.thesimstree.com/media/logos/google.svg";
          } else if (e.name == "CBC News") {
            e.logo = "https://cdn.browsercam.com/ca.cbc.mobile.android.cbcnewsandroidwebview-logo.png";
          } else if (e.name == "Financial Post") {
            e.logo = "https://p.kindpng.com/picc/s/70-705101_financial-post-logo-png-transparent-png.png"
          } else if (e.name == "The Globe And Mail") {
            e.logo = "https://strapi-uploads-the-power-plant-live.s3.ca-central-1.amazonaws.com/The_Globe_and_Mail_Logo_white_text_2431397898_e9f7d2d4c6.png"
          } else if (e.name == "The Hindu") {
            e.logo = "https://cpng.pikpng.com/pngl/s/427-4272944_52-pm-89846-the-hindu-9-19-2016.png"
          } else if (e.name == "The Times of India") {
            e.logo = "https://g2risksolutions.com/wp-content/uploads/2024/07/The-times-of-india-logo-768x768.png"
          }
          this.sources.push(e)
        }
      });
      this.showSources = true;
    })

    this.Service.getCurrentWeather()
      .subscribe((res: any) => {
        this.weatherReport = res;
        let sunriseUTC = new Date(this.weatherReport.sys.sunrise * 1000);
        let sunsetUTC = new Date(this.weatherReport.sys.sunset * 1000);

        let sunriseIST = new Date(sunriseUTC.getTime() + (5.5 * 60 * 1000));
        let sunsetIST = new Date(sunsetUTC.getTime() + (5.5 * 60 * 1000));

        this.sunriseTime = sunriseIST.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });

        this.sunsetTime = sunsetIST.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
      })


  }

  newsIndex = 0;
  perviousNews() {
    if (this.newsIndex == 0) {
      this.newsIndex = this.headlines.articles.length - 1;
    } else {
      this.newsIndex = this.newsIndex - 1;
    }
    this.selectedNews = this.headlines.articles[this.newsIndex];
  }

  nextNews() {
    if (this.newsIndex == this.headlines.articles.length - 1) {
      this.newsIndex = 0;
    } else {
      this.newsIndex = this.newsIndex + 1;
    }
    this.selectedNews = this.headlines.articles[this.newsIndex];
  }
}
