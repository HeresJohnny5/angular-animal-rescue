import { Component, OnInit } from "@angular/core";

import { Pet } from "../pets/pet-modal";
import { GetInvolved } from "../get-involved/get-involved-modal";

import { PetsData } from "../../assets/data/pets-data";
import { GetInvolvedData } from "../../assets/data/get-involved-data";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  headersAbout: string = "About Us";
  headersAdopt: string = "Adopt";
  headersGetInvolved: string = "Get Involved";
  headersPartners: string = "Pittsburgh Proud";

  pets: Pet[] = PetsData;
  getInvolvedData: GetInvolved[] = GetInvolvedData;

  constructor() {}

  ngOnInit() {}
}
