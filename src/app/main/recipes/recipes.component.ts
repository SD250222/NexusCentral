import { Component } from '@angular/core';
import { appService } from '../service.service';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
searchText: string = '';
  showLoading: boolean = false;
  blockStyle:any;
  constructor(private service: appService,private themeService: ThemeService) {
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

  getIngredients(recipe: any): { name: string; measure: string }[] {
    return Array.from({ length: 20 }, (_, index) => index + 1)
      .map((index) => ({
        name: recipe[`strIngredient${index}`],
        measure: recipe[`strMeasure${index}`]
      }))
      .filter((item) => item.name && item.name.trim().length > 0);
  }

  // food api  https://www.themealdb.com/api/json/v1/1/search.php?s=pancake
  // book API https://www.googleapis.com/books/v1/volumes?q=search+terms
  // https://openlibrary.org/search.json?q=the+lord+of+the+rings

  recipeList: any[] = [
  ];
  Search(){
    this.service.getFoodRecipes(this.searchText).subscribe((data: any) => {
      console.log(data);
      this.recipeList = data.meals || [];
    });
  }
}
