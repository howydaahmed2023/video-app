import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { VideoDetailsComponent } from './pages/video-details/video-details.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"videoData/:id",component:VideoDetailsComponent},
  {path:"search/:text",component:SearchPageComponent}
];
