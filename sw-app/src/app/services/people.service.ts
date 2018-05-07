import { Injectable } from '@angular/core';
import {People} from '../model/people';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {

  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<People[]> {
    return this.httpClient
      .get('https://swapi.co/api/people/')
      .map(response => response['results']);
  }

  findOne(url: string): Observable<People> {
    return this.httpClient.get(url);
  }
}
