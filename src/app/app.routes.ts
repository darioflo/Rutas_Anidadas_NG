import { Routes } from '@angular/router';
import { CountryListComponent } from './routes/country-list/country-list.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';
import { HomeComponent } from './routes/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'country-list', component: CountryListComponent },
  { path: 'about-us', component: AboutUsComponent },
];
