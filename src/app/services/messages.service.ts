import { Injectable } from '@angular/core';
import {Message} from '../model/message';

@Injectable()
export class MessagesService {

  currentMessages: Message[] = [
    new Message('Salut', new Date()),
    new Message('Coucou', new Date()),
  ]

  constructor() { }

  findAll() : Message[] {
    return this.currentMessages;
  }

  sendMessage(msg: Message) {
    this.currentMessages.push(msg);
  }

}
