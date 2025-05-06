import { Component, OnInit, signal, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CountriesService } from '../../services/countries.service';
import { CountryShort } from '../../interface/CountryShort';
import e from 'express';

@Component({
  selector: 'app-country-list',
  imports: [NavbarComponent],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
})
export class CountryListComponent implements OnInit {
  countries = signal<CountryShort[]>([]);
  public countryService = inject(CountriesService);

  ngOnInit(): void {
    this.countryService.getCountries().subscribe({
      next: (data) => {
        this.countries.set(data);
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  goTo(name: string) {}
}
