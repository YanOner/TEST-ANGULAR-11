import { Component, OnInit } from '@angular/core';
import { Atm } from 'src/model/Atm';
import { Country } from 'src/model/Country';
import { AtmService } from 'src/service/atm.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.scss']
})
export class AtmComponent implements OnInit {

  title = 'WEB ANGULAR ATM';

  countries: Country[] = [];
  atm: Atm[] = [];

  selectAtm: Atm;

  selectFrom: string = '';
  selectTo: string = '';

  convert: number = 0.00;

  txtConvert: any = '1';

  result: number = 0;

  postalcode = '-';
  housenumber = '-';
  latitud = '-';
  longitud = '-';

  constructor(private atmService: AtmService) { }

  ngOnInit() {
    this.getCountries();
    this.getAtms();
  }

  getCountries() {
    this.atmService.getCountries().subscribe(
      result => {
        this.countries = result;
        console.log('countries: ' + this.countries.length);
      }
    );
  }

  getAtms() {
    this.atmService.getAtms().subscribe(
      result => {
        this.atm = result;
        console.log('atms: ' + this.atm.length);
        this.selectFrom = 'USD';
      }
    );
  }

  convertAtm() {
    this.convert = 0.00;
    if (this.selectFrom != '' && this.selectTo != '') {
      this.atmService.convert(this.selectFrom, this.selectTo).subscribe(
        result => {
          console.log(result);
          this.convert = result;
        }
      )
    }
  }

  onSelectedFrom(value: string) {
    console.log(value);
    this.selectFrom = value;
    this.convertAtm();
  }

  onSelectedTo(value: string) {
    console.log(value);
    this.selectTo = value;
    this.convertAtm();
  }

  convertEvent() {
    this.result = 0;
    console.log(this.txtConvert);
    if (!Number.isNaN(this.txtConvert)) {
      this.result = this.convert * this.txtConvert;
    }
  }

  onSelectedAtm(value: string) {
    console.log(value);
    this.postalcode = '-';
    this.housenumber = '-';
    this.latitud = '-';
    this.longitud = '-';
    this.selectAtm = this.atm.find(i => i.address.geoLocation['lat'] == value);
    console.log(this.selectAtm);
    if (this.selectAtm) {
      this.postalcode = this.selectAtm.address.postalcode;
      this.housenumber = this.selectAtm.address.housenumber;
      this.latitud = this.selectAtm.address.geoLocation['lat'];
      this.longitud = this.selectAtm.address.geoLocation['lng'];
    }

  }

}
