import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PetsData } from "../../../assets/data/pets-data";

import { Pet } from "../../pets/pet-modal";

@Component({
  selector: "app-pet",
  templateUrl: "./pet.component.html",
  styleUrls: ["./pet.component.scss"]
})
export class PetComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const passedName = this.route.snapshot.params.name;
    console.log('passedName: ', passedName);

    this.pet = this.pets.find(pet => pet.name === passedName);
    console.log('this.pet: ', this.pet);
  }

  pets: Pet[] = PetsData;
  pet: any;
}
