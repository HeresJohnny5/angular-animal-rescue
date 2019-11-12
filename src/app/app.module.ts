import { NgModule, Component } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HeroComponent } from "./hero/hero.component";
import { SectionHeaderComponent } from "./section-header/section-header.component";
import { DynamicTypeComponent } from "./dynamic-type/dynamic-type.component";
import { BestFriendComponent } from "./best-friend/best-friend.component";
import { PetCardComponent } from "./pets/pet-card/pet-card.component";
import { GetInvolvedCardComponent } from "./get-involved/get-involved-card/get-involved-card.component";
import { PartnersComponent } from "./partners/partners.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { DogsComponent } from "./pets/dogs/dogs.component";
import { ContactComponent } from "./contact/contact.component";
import { CatsComponent } from "./pets/cats/cats.component";
import { PetComponent } from "./pets/pet/pet.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { AboutComponent } from './about/about.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { TeamComponent } from './team/team.component';
import { DonateComponent } from './get-involved/donate/donate.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "dogs", component: DogsComponent },
  { path: "cats", component: CatsComponent },
  { path: "about", component: AboutComponent },
  { path: "pet/:name", component: PetComponent },
  { path: "donate", component: DonateComponent },
  { path: "**", redirectTo: "/heroes", pathMatch: "full" }
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
    CatsComponent,
    PetComponent,
    PaginationComponent,
    AboutComponent,
    WhoWeAreComponent,
    TeamComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }