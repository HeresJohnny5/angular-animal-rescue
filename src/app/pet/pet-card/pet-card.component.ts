import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import * as cloneDeep from "lodash/cloneDeep";

import { Pet } from "../../pet/pet-modal";

@Component({
  selector: "app-pet-card",
  templateUrl: "./pet-card.component.html",
  styleUrls: ["./pet-card.component.scss"]
})
export class PetCardComponent implements OnInit {
  @Input() pets;
  clonePets: Pet[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.clonePets = cloneDeep(this.pets);

    if (this.router.url === "/dogs") {
      this.clonePets = this.clonePets.filter(pet => pet.species === "Dog");
    } else if (this.router.url === "/cats") {
      this.clonePets = this.clonePets.filter(pet => pet.species === "Cat");
    }
  }
}
