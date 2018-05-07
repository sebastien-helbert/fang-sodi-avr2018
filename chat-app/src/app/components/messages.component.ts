import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Message} from '../model/message';
import {MessagesService} from '../services/messages.service';
import {MqttService} from 'ngx-mqtt';
import {Subscription} from 'rxjs/Subscription';

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
export class MessagesComponent implements OnInit, OnDestroy {
  private messagesSubscription: Subscription;
  messages: Message[] = [];

  constructor(private messagesService: MessagesService, private mqttService: MqttService) { }

  ngOnInit() {
    this.messagesSubscription = this.messagesService.messages.subscribe(val => this.messages.push(val));
    this.messagesService.loadMessages();
  }

  public ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
  }
}
