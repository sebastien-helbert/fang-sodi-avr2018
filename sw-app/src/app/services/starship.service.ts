import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {People} from '../model/people';
import {Starship} from '../model/starship';

@Injectable()
export class StarshipService {

  constructor(private httpClient: HttpClient) { }

  findOne(url: string): Observable<Starship> {
    return this.httpClient.get(url);
  }

}
