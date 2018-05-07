import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { PeopleListComponent } from './people-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {PeopleService} from '../../services/people.service';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {People} from '../../model/people';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class MockPeopleService extends PeopleService {
  constructor() {
    super(null);
  }
}

describe('PeopleListComponent', () => {

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [PeopleListComponent],
      providers: [PeopleListComponent, { provide: PeopleService, useClass: MockPeopleService }]
    });

  });


  it('should display two items', fakeAsync(() => {

    const fixture: ComponentFixture<PeopleListComponent> = TestBed.createComponent(PeopleListComponent);
    const el: DebugElement = fixture.debugElement.query(By.css('.card-columns'));


    const mockService: PeopleService = TestBed.get(PeopleService);

    spyOn(mockService, 'findAll').and.returnValue(Observable.of([{'name': 'Luke'}, {'name': 'Darth Vader'}]));

    // fixture.componentInstance.ngOnInit();
    // Simulates the passage of time until all pending asynchronous activities complete
    // tick();
    fixture.detectChanges();

    expect(el.nativeElement.textContent).toContain('Darth Vader');
    expect(el.nativeElement.textContent).toContain('Luke');

    // https://angular.io/guide/testing
  }));
});
