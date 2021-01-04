import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { Country } from 'src/model/Country';
import { Atm } from 'src/model/Atm';

@Injectable({ providedIn: 'root' })
export class AtmService {

    private atmUrl = 'https://gmtatmw.azurewebsites.net/api/v1/atm';
    // private atmUrl = 'http://localhost:8080/api/v1/atm';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 'mode': 'no-cors'
      };

    constructor(private http: HttpClient){}

    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(this.atmUrl+"/countries", this.httpOptions)
        .pipe(tap(_ => console.log('fetched countries')));
    }
 
    getAtms(): Observable<Atm[]> {
        return this.http.get<Atm[]>(this.atmUrl+"/list", this.httpOptions)
        .pipe(tap(_ => console.log('fetched atms'))); 
    }

    convert(source: string, target: string): Observable<number> {
        return this.http.get<number>(this.atmUrl+"/convert?source="+source+"&target="+target, this.httpOptions)
        .pipe(tap(_ => console.log('fetched convert'))); 
    }

}
