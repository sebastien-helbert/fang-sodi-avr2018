import { Injectable } from '@angular/core';
import {Message} from '../model/message';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessagesService {

  currentMessages: Message[];

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Message[]> {
    return this.httpClient.get<Message[]>('http://localhost:3000/messages');
  }

  sendMessage(msg: Message): Observable<Message> {
    return this.httpClient.post<Message>('http://localhost:3000/messages', msg);
  }

}
