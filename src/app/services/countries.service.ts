import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../interface/Country';
import { CountryShort } from '../interface/CountryShort';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  url = 'https://restcountries.com/v3.1/all';
  private httpClient = inject(HttpClient);

  getCountries(): Observable<CountryShort[]> {
    return this.httpClient.get<Country[]>(this.url).pipe(
      map((countries: Country[]) =>
        countries.map((country: Country) => ({
          name: country.name.common,
          flag: country.flags.svg,
        }))
      )
    );
  }
}
