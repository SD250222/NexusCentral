import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news_report';
  menuCollapsed = false;
  contentWidth="calc(100% - 250px)";
  selectedMenu: string = 'home';
  constructor(private Router:Router){}

  toggleMenu(): void {
    this.menuCollapsed = !this.menuCollapsed;
  }

  navigate(searchText: string){
    this.selectedMenu = searchText;

    if(searchText!='home' && searchText!='Weather'  && searchText!='Crypto' && searchText!='Sports'){
      this.Router.navigateByUrl('/search/'+searchText);
    }else if(searchText=='Weather'){
      this.Router.navigateByUrl('/live_weather');
    }else if(searchText=='Crypto'){
      this.Router.navigateByUrl('/crypto');
    }else if(searchText=='Sports'){
      this.Router.navigateByUrl('/sports');
    }else{
      this.Router.navigateByUrl("homepage");
    }
    
  }
}
