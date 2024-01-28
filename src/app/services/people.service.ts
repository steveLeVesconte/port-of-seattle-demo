import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TRIPPIN_BASE_URL } from '../app.config';
import { Observable } from 'rxjs';
import { Person } from '../models/personModel';

export interface ODataResponse<T> {
  value: T[];
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private httpClient: HttpClient,
    @Inject(TRIPPIN_BASE_URL) private baseUrl: string
  ) { }

  public getPeople(nameFilter?: string): Observable<ODataResponse<Person>> {
    let params = new HttpParams();
    if (nameFilter) {
      params = params.set(
        '$filter',
        `contains(FirstName, '${nameFilter}') or contains(LastName, '${nameFilter}') or (MiddleName ne null and contains(MiddleName, '${nameFilter}'))`
      );
    }
    // params = params.set('$select', 'UserName,FirstName,MiddleName,LastName, Age, FavoriteFeature, Gender, HomeAddress');
    params = params.set('$orderby', 'LastName,FirstName');

    return this.httpClient
      .get<{ value: Person[] }>(`${this.baseUrl}/People`, { params });
  }
}
