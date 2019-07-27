import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HeroComponent } from "./hero/hero.component";
import { SectionHeaderComponent } from "./section-header/section-header.component";
import { DynamicTypeComponent } from "./dynamic-type/dynamic-type.component";
import { BestFriendComponent } from "./best-friend/best-friend.component";
import { PetCardComponent } from "./pet/pet-card/pet-card.component";
import { GetInvolvedCardComponent } from "./get-involved/get-involved-card/get-involved-card.component";
import { PartnersComponent } from "./partners/partners.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { DogsComponent } from "./pet/dogs/dogs.component";
import { ContactComponent } from "./contact/contact.component";
import { CatsComponent } from "./pet/cats/cats.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "dogs", component: DogsComponent },
  { path: "cats", component: CatsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    SectionHeaderComponent,
    DynamicTypeComponent,
    BestFriendComponent,
    PetCardComponent,
    GetInvolvedCardComponent,
    PartnersComponent,
    FooterComponent,
    HomeComponent,
    DogsComponent,
    ContactComponent,
    CatsComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
