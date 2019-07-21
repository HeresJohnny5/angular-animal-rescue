import { Component, OnInit } from "@angular/core";

import { Pet } from "./pet/pet-modal";

import { Pets } from "../assets/data/db-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  headersAbout: string = "About Us";
  headersAdopt: string = "Adopt";
  pets: Pet[] = Pets;

  ngOnInit(): void {
    console.log("TESTING: ", this.pets);
  }
}
