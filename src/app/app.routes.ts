import { Routes } from '@angular/router';
import { CountryListComponent } from './routes/country-list/country-list.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutUsFirstComponent } from './routes/about-us-first/about-us-first.component';
import { AboutUsSecondComponent } from './routes/about-us-second/about-us-second.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'country-list', component: CountryListComponent },
  {
    path: 'about-us',
    component: AboutUsComponent,
    children: [
      {
        path: 'first',
        component: AboutUsFirstComponent,
      },
      {
        path: 'second',
        component: AboutUsSecondComponent,
      },
    ],
  },
];
