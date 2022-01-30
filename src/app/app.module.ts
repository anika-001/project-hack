import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import firebase from 'firebase/app';
import 'firebase/auth';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { WindowService } from './services/window.service';

import { NonogramComponent } from './nonogram/nonogram.component';
import { HomeComponent } from './home/home.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ForumComponent } from './forum/forum.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalmComponent } from './calm/calm.component';
import { StudyComponent } from './study/study.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component';
import { CardsComponent } from './cards/cards.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { ProfileComponent } from './profile/profile.component';
import { Profile1Component } from './profile1/profile1.component';
import { ManagementComponent } from './management/management.component';
import { UploadschedComponent } from './uploadsched/uploadsched.component';
import { from } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './events/events.component';
import { AddeventComponent } from './addevent/addevent.component';
import { ViewsceduleComponent } from './viewscedule/viewscedule.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { SigntComponent } from './signt/signt.component';
import { TexttransComponent } from './texttrans/texttrans.component';
import { ChatsComponent } from './chats/chats.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    NonogramComponent,
    DashboardComponent,
    ForumComponent,
    NavbarComponent,
    CalmComponent,
    StudyComponent,
    SearchComponent,
    NewsComponent,
    CardsComponent,
    Dashboard1Component,
    ProfileComponent,
    Profile1Component,
    ManagementComponent,
    UploadschedComponent,
    EventsComponent,
    AddeventComponent,
    ViewsceduleComponent,
    HashtagComponent,
    SigntComponent,
    TexttransComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    NoopAnimationsModule,
    MatSidenavModule ,
    MatSelectModule
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
