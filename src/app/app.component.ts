import {Component, OnInit} from '@angular/core';
import {Personne} from './model/personne';
import {Message} from './model/message';

import * as moment from 'moment';

@Component({
  selector: 'hello',
  template: `    
	  <app-menu [user]="currentUser"></app-menu>
	  <div class="container">
      <router-outlet></router-outlet>
    </div>`,
  styles: []
})
export class AppComponent {
  currentUser:Personne = new Personne('Sébastien', 'HELBERT');
}
