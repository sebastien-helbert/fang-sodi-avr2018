import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import {RouterModule} from '@angular/router';
import {PeopleService} from './services/people.service';
import {HttpClientModule} from '@angular/common/http';


const routes: any = [
  {
    path: '',
    redirectTo : '/people',
    pathMatch : 'full'
  },
  {
    path: 'people',
    component : PeopleListComponent
  },
  {
    path: 'people/:id',
    component : PeopleDetailComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleDetailComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
