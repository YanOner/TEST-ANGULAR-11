import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { Country } from 'src/model/Country';

@Injectable({ providedIn: 'root' })
export class AtmService {

    // private atmUrl = 'http://gmtatmw.azurewebsites.net/api/v1/atm';
    private atmUrl = 'http://localhost:8080/api/v1/atm';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 'mode': 'no-cors'
      };

    constructor(private http: HttpClient){}

    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(this.atmUrl+"/countries", this.httpOptions)
        .pipe(tap(_ => console.log('fetched countries')));
    }
    
}