import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HeroComponent } from "./hero/hero.component";
import { SectionHeaderComponent } from "./section-header/section-header.component";
import { DynamicTypeComponent } from "./dynamic-type/dynamic-type.component";
import { BestFriendComponent } from "./best-friend/best-friend.component";
import { PetCardComponent } from "./pet/pet-card/pet-card.component";
import { GetInvolvedCardComponent } from './get-involved/get-involved-card/get-involved-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    SectionHeaderComponent,
    DynamicTypeComponent,
    BestFriendComponent,
    PetCardComponent,
    GetInvolvedCardComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
