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
    const passedId = this.route.snapshot.params.id;
    this.pet = this.pets.find(pet => pet.id === parseInt(passedId));

    console.log(this.pets);
    console.log(this.pet);
  }

  pets: Pet[] = PetsData;
  pet: any;
}
