import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from './theme.service';
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
  isDarkTheme = false;
  menuStyle:any;
  tileStyle:any;
  footerStyle:any;
  constructor(private Router:Router, private themeService: ThemeService){
    this.isDarkTheme = this.themeService.getTheme();
    this.applyThemeStyles(this.isDarkTheme);
  }

  toggleMenu(): void {
    this.menuCollapsed = !this.menuCollapsed;
  }

  toggleTheme(): void { 
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setTheme(this.isDarkTheme);
    this.applyThemeStyles(this.isDarkTheme);
  }

  private applyThemeStyles(isDarkTheme: boolean): void {
    if(isDarkTheme){
      this.menuStyle = {
        'background-color': 'rgb(45, 45, 45)',
        'color': 'white'
      };
      this.tileStyle = {
        'color': 'rgb(226, 226, 226)',
      };
      this.footerStyle = {
        'background-color': 'rgb(45, 45, 45)',
        'color': 'white'
      };
    }else{
      this.menuStyle = {
        'background-color': 'rgb(225, 225, 225)',
        'color': 'black'
      };
      this.tileStyle = {
        'background-color': 'rgb(225, 225, 225)',
      };
      this.footerStyle = {
        'background-color': 'rgb(225, 225, 225)',
        'color': 'black'
      };
    }
  }

  navigate(searchText: string){
    this.selectedMenu = searchText;

    if(searchText!='home' && searchText!='Weather'  && searchText!='Crypto' && searchText!='Sports' && searchText!='Movies' && searchText!='books' && searchText!='recipes'){
      this.Router.navigateByUrl('/search/'+searchText);
    }else if(searchText=='Weather'){
      this.Router.navigateByUrl('/live_weather');
    }else if(searchText=='Crypto'){
      this.Router.navigateByUrl('/crypto');
    }else if(searchText=='Sports'){
      this.Router.navigateByUrl('/sports');
    }else if(searchText=='Movies'){
      this.Router.navigateByUrl('/movies');
    }else if(searchText=='books'){
      this.Router.navigateByUrl('/books');
    }else if(searchText=='recipes'){
      this.Router.navigateByUrl('/recipes');
    }else{
      this.Router.navigateByUrl("homepage");
    }
    
  }
}
