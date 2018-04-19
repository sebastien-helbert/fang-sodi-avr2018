import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  url: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.url = atob(this.route.snapshot.paramMap.get('base64Id'));
  }

}
