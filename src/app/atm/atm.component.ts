import { Component, OnInit } from '@angular/core';
import { Country } from 'src/model/Country';
import { AtmService } from 'src/service/atm.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.scss']
})
export class AtmComponent implements OnInit {

  title = 'FRONT WEB ATM';

  countries: Country[] = [];

  constructor(private atmService: AtmService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.atmService.getCountries().subscribe(
      result => {
        this.countries = result;
        console.log('countries: ' + this.countries);
      }
    );
  }

}
