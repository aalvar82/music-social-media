import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { InfoImageComponent } from './info-image/info-image.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FeedItemComponent } from './feed-item/feed-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    InfoImageComponent,
    NavBarComponent,
    FriendsListComponent,
    MainFeedComponent,
    MainPageComponent,
    FeedItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
