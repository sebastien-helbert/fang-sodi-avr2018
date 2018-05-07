import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {Message} from '../model/message';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IMqttMessage, MqttService} from 'ngx-mqtt';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {Subject} from 'rxjs/Subject';
import { isDevMode } from '@angular/core';

const API_URL: string = 'http://localhost:3000/messages';

@Injectable()
export class MessagesService {
  public messages: Subject<Message> = new Subject();

  constructor(private httpClient: HttpClient, private mqttService: MqttService) {
    // A chaque nouveau message reçu depsuis le broker MQTT on le transfome dispatch aux subscribers.
    this.mqttService.observe('fang-sodi-avr2018-chat').subscribe(mqttMessage => {
      const message: Message = JSON.parse(mqttMessage.payload.toString());
      this.messages.next(message);
    });
  }

  loadMessages(): void {
    this.httpClient.get<Message[]>(API_URL)
      .catch(this.handleError)
      .subscribe(res => res.forEach(v => this.messages.next(v)));
  }

  sendMessage(msg: Message): Observable<Message> {
    return this.httpClient
      // Enregistrement du message par le backend REST
      .post<Message>(API_URL, msg)
      .catch(this.handleError)
      // Une fois enregistré, envoi du message au broker MQTT
      .do(result => this.mqttService.unsafePublish('fang-sodi-avr2018-chat', JSON.stringify(result)));
  }

  // Peut être remplacé par un intercepteur global
  public handleError = (error: Response) => {
    if(isDevMode() && error && error.status === 0) {
      alert('Le backend HTTP "' + API_URL + '" est injoignable. Avez vous lancé la commande "npm run json-server" ?');
    }

    return Observable.throw(error)
  }
}
