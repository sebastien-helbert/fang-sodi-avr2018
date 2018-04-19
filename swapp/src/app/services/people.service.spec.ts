import {TestBed, inject, getTestBed} from '@angular/core/testing';

import { PeopleService } from './people.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
      providers: [PeopleService]
    });
  });

  it('findAll should return two people', inject([PeopleService], (service: PeopleService) => {
    // prepare data
    //
    const httpMock = getTestBed().get(HttpTestingController);
    const serviceResponse = {
      'count': 87,
      'next': 'https://swapi.co/api/people/?page=2',
      'results': [
        {'name': 'Luke Skywalker'},
        {'name': 'C-3PO'}
    ]};
    let currentResult;
    // invoke tested function

    service.findAll().subscribe(r => currentResult = r);

    // check results
    const req = httpMock.expectOne('https://swapi.co/api/people/');
    expect(req.request.method).toBe('GET');
    req.flush(serviceResponse);

    expect(currentResult).toBeDefined();
    expect(currentResult.length).toBe(2);
    expect(currentResult[0].name).toBe('Luke Skywalker');
    expect(currentResult[1].name).toBe('C-3PO');

  }));

});
