import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {Message} from '../model/message';
import {Personne} from '../model/personne';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessagesService} from '../services/messages.service';

@Component({
  selector: 'app-form',
  template: `
        <form [formGroup]="chatForm">
            <input #myInput class="form-control" placeholder="message"
                   formControlName="text"
                   [ngClass]="{'error': chatForm.controls.text.invalid && chatForm.controls.text.dirty}">
		</form>
        <button class="btn btn-primary" (click)="sendMessage(myInput.value);myInput.value=''" [disabled]="chatForm.invalid">Ok</button>
	`,
  styles: [`
    .error {
        border-color: red;
    }
  `]
})
export class FormComponent implements OnInit {


  chatForm = new FormGroup({
    text: new FormControl(null, Validators.required)
  });

  @Input()
  user: Personne;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
  }

  sendMessage(text: string) {
    const msg: Message = new Message(null, text, new Date(), this.user);
    console.log(msg);
    this.messagesService.sendMessage(msg).subscribe(message => console.log(message));
  }

}
