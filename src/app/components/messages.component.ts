import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../model/message';
import {MessagesService} from '../services/messages.service';

@Component({
  selector: 'app-messages',
  template: `
    <div *ngFor="let message of messages" class="message">
        <div class="text">{{message.text}}</div>
        <div class="timestamp">{{message.date | amTimeAgo}}</div>
    </div>
  `,
  styles: [`
      .message .text {
          background-color: deepskyblue;
          border-radius: 5px;
          padding: 10px;
      }
      .message .timestamp {
          color: darkgrey;
          font-size: 12px;
      }
  `]
})
export class MessagesComponent implements OnInit {

  messages:Message[];

  constructor(private messagesService:MessagesService) { }

  ngOnInit() {
    this.messages = this.messagesService.findAll();
  }

}
