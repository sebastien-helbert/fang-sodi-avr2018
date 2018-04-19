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
import {RouterModule} from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatComponent } from './components/chat/chat.component';


const routes: any = [
  {
    path: '',
    redirectTo: '/chat',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    component : ChatComponent
  },
  {
    path: 'profile',
    component : ProfileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormComponent,
    MessagesComponent,
    ProfileComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule, MomentModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
