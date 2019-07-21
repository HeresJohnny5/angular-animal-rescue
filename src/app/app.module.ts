import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HeroComponent } from "./hero/hero.component";
import { SectionHeaderComponent } from "./section-header/section-header.component";
import { DynamicTypeComponent } from "./dynamic-type/dynamic-type.component";
import { BestFriendComponent } from './best-friend/best-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    SectionHeaderComponent,
    DynamicTypeComponent,
    BestFriendComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
