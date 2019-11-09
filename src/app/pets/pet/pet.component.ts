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
  headersPet: string = "John";
  pets: Pet[] = PetsData;
  pet: any;
  otherPets: Pet[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const passedName = this.route.snapshot.params.name;
    this.pet = this.pets.find(pet => pet.name === passedName);

    if (this.pet.species === "Dog") {
      this.headersPet = "Adoptable Dogs";
      
      this.otherPets = this.pets.filter(pet => pet.species === "Dog" && pet.name !== this.pet.name);
    } else {
      this.headersPet = "Adoptable Cats";

      this.otherPets = this.pets.filter(pet => pet.species === "Cat" && pet.name !== this.pet.name);
    }
  }
}
