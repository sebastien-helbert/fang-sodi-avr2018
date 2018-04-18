import {Component, OnInit} from '@angular/core';
import {Personne} from './model/personne';
import {Message} from './model/message';

import * as moment from 'moment';

@Component({
  selector: 'hello',
  template: `
    <div class="container">
      <chat-menu [user]="currentUser"></chat-menu>
      <chat-messages ></chat-messages>
      <chat-form [user]="currentUser"></chat-form>
	 </div>`,
  styles: []
})
export class AppComponent {
  currentUser:Personne = new Personne('Sébastien', 'HELBERT');

  myNumber:number = 0.2345678;
  myMoment:any = moment();


}
