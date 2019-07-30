import { Component, OnInit } from "@angular/core";

import { Pet } from "../../pets/pet-modal";
import { GetInvolved } from "../../get-involved/get-involved-modal";

import { PetsData } from "../../../assets/data/pets-data";
import { GetInvolvedData } from "../../../assets/data/get-involved-data";

@Component({
  selector: "app-cats",
  templateUrl: "./cats.component.html",
  styleUrls: ["./cats.component.scss"]
})
export class CatsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  headersAbout: string = "About Us";
  headersAdopt: string = "Adopt";
  headersGetInvolved: string = "Get Involved";
  headersPartners: string = "Pittsburgh Proud";

  pets: Pet[] = PetsData;
  getInvolvedData: GetInvolved[] = GetInvolvedData;
}
