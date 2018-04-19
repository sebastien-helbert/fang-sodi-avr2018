import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../../services/people.service';
import {People} from '../../model/people';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: People[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.findAll().subscribe(result => this.people = result);
  }

  encodeBase64(value: string): string {
    return btoa(value);
  }

}
