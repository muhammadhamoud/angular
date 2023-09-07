import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from 'projects/eco/src/app/data/models/country';
import { CountryService } from 'projects/eco/src/app/data/services/country.service';

// @UntilDestroy({ checkProperties: true })

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss']
})
export class CountrySelectComponent implements OnInit {
  country: string = 'Country';
  countries: Country[] = [];
  @Output() setCountryEvent = new EventEmitter<string>();

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries()
      .subscribe(
        countries => {
          this.countries = countries;
        }
      );
  }

  setCountry(value: Country) {
    this.country = value.name || '';
    this.setCountryEvent.emit(value.code);
  }}