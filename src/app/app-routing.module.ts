import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { SearchContentComponent } from './main/search-content/search-content.component';
import { WeatherReportComponent } from './main/weather-report/weather-report.component';
import { CryptoComponent } from './main/crypto/crypto.component';
import { SportsComponent } from './main/sports/sports.component';
import { MovieComponent } from './main/movie/movie.component';
import { BookComponent } from './main/book/book.component';
import { RecipesComponent } from './main/recipes/recipes.component';
const routes: Routes = [
  { path: "homepage", component: HomeComponent },
  { path: "live_weather", component: WeatherReportComponent},
  { path: "crypto", component: CryptoComponent},
  { path: "sports", component: SportsComponent},
  { path: "movies", component: MovieComponent},
  { path: "books", component: BookComponent},
  { path: "recipes", component: RecipesComponent},
  
  
  { path: "search/:searchText", component: SearchContentComponent },
  { path: "", redirectTo: "homepage", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}