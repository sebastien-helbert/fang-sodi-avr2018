import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../model/personne';

@Component({
  selector: 'app-menu',
  template: `
	  <nav class="navbar navbar-expand-lg navbar-light bg-light">
		  <a class="navbar-brand" href="#">Chat</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			  <ul class="navbar-nav mr-auto">
			  </ul>
		  </div>
		<div *ngIf="user">{{user?.prenom}} {{user?.nom}}</div>
	  </nav>`,
  styles: []
})
export class MenuComponent implements OnInit {
  @Input()
  user: Personne;

  constructor() { }

  ngOnInit() {

  }

}
