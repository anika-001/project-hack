import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NonogramComponent } from './nonogram/nonogram.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForumComponent } from './forum/forum.component';
import { CalmComponent } from './calm/calm.component';
import { StudyComponent } from './study/study.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { ProfileComponent } from './profile/profile.component';
import { Profile1Component } from './profile1/profile1.component';
import { ManagementComponent } from './management/management.component';
import { UploadschedComponent } from './uploadsched/uploadsched.component';
import { EventsComponent } from './events/events.component';
import { AddeventComponent } from './addevent/addevent.component';
import { ViewsceduleComponent } from './viewscedule/viewscedule.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { SigntComponent } from './signt/signt.component';
import { TexttransComponent } from './texttrans/texttrans.component';
import { ChatsComponent } from './chats/chats.component';
const routes: Routes = [
  {
    path: "signin",
    component: SigninComponent
  }
  ,
  {
    path: "nonogram",
    component: NonogramComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },

  {
    path: "forum",
    component: ForumComponent
  }, {
    path: "calm",
    component: CalmComponent
  },
  {
    path: "study",
    component: StudyComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "news",
    component: NewsComponent
  },
  {
    path: "d1",
    component: Dashboard1Component
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "profile1",
    component: Profile1Component
  }
  ,
  {
    path: "management",
    component: ManagementComponent
  },
  {
    path: "management/uploadsched",
    component: UploadschedComponent
  },
  {
    path: "events",
    component: EventsComponent
  },
  {
    path: "addevent",
    component: AddeventComponent
  },
  {
    path: "management/viewscedule",
    component: ViewsceduleComponent
  },
  {
    path: "events/hashtag",
    component: HashtagComponent
  }
  ,
  {
    path: "signt",
    component: SigntComponent
  },
  {
    path: "texttrans",
    component: TexttransComponent
  }, {
    path: "chats",
    component: ChatsComponent
  },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
