import {Personne} from './personne';

export class Message {
  constructor(public text: string, public date: Date, public from?: Personne) {

  }
}
