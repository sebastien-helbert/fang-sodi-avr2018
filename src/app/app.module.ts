import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu.component';
import { FormComponent } from './components/form.component';
import { MessagesComponent } from './components/messages.component';
import { MomentModule } from 'ngx-moment';
import { ReactiveFormsModule } from '@angular/forms';
import {MessagesService} from './services/messages.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule, MomentModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
