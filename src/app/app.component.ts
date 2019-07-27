import { Component } from "@angular/core";

import { Pet } from "./pet/pet-modal";
import { GetInvolved } from "./get-involved/get-involved-modal";

import { PetsData } from "../assets/data/pets-data";
import { GetInvolvedData } from "../assets/data/get-involved-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  headersAbout: string = "About Us";
  headersAdopt: string = "Adopt";
  headersGetInvolved: string = "Get Involved";
  headersPartners: string = "Pittsburgh Proud";

  pets: Pet[] = PetsData;
  getInvolvedData: GetInvolved[] = GetInvolvedData;
}
