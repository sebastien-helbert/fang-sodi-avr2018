import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {People} from '../../model/people';
import {PeopleService} from '../../services/people.service';
import {StarshipService} from '../../services/starship.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  people: any;
  peopleStarships: any[] = [];

  constructor(private peopleService: PeopleService, private starshipService: StarshipService, private route: ActivatedRoute) { }

  ngOnInit() {
    const url = atob(this.route.snapshot.paramMap.get('base64Id'));
    this.peopleService.findOne(url).subscribe(p => {
      this.people = p;
      this.loadPeopleStarships();
    });
  }

  loadPeopleStarships() {
    this.people.starships.forEach(starshipUrl => {
      this.starshipService.findOne(starshipUrl).subscribe(starship => this.peopleStarships.push(starship));
    });
  }


}
