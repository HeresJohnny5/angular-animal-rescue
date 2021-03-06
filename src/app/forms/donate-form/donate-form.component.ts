import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-form',
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.scss']
})
export class DonateFormComponent implements OnInit {
  states = [
    { id: 1, state: "Alabama" },
    { id: 2, state: "Alaska" },
    { id: 3, state: "Arizona" },
    { id: 4, state: "Arkansas" },
    { id: 5, state: "California" },
    { id: 6, state: "Colorado" },
    { id: 7, state: "Connecticut" },
    { id: 8, state: "Delaware" },
    { id: 9, state: "Florida" },
    { id: 10, state: "Georgia" },
    { id: 11, state: "Hawaii" },
    { id: 12, state: "Idaho" },
    { id: 13, state: "Illinois" },
    { id: 14, state: "Indiana" },
    { id: 15, state: "Iowa" },
    { id: 16, state: "Kansas" },
    { id: 17, state: "Kentucky" },
    { id: 18, state: "Louisiana" },
    { id: 19, state: "Maine" },
    { id: 20, state: "Maryland" },
    { id: 21, state: "Massachusetts" },
    { id: 22, state: "Michigan" },
    { id: 23, state: "Minnesota" },
    { id: 24, state: "Mississippi" },
    { id: 25, state: "Missouri" },
    { id: 26, state: "Montana" },
    { id: 27, state: "Nebraska" },
    { id: 28, state: "Nevada" },
    { id: 29, state: "New Hampshire" },
    { id: 30, state: "New Jersey" },
    { id: 31, state: "New Mexico" },
    { id: 32, state: "New York" },
    { id: 33, state: "North Carolina" },
    { id: 34, state: "North Dakota" },
    { id: 35, state: "Ohio" },
    { id: 36, state: "Oklahoma" },
    { id: 37, state: "Oregon" },
    { id: 38, state: "Pennsylvania" },
    { id: 39, state: "Rhode Island" },
    { id: 40, state: "South Carolina" },
    { id: 41, state: "South Dakota" },
    { id: 42, state: "Tennessee" },
    { id: 43, state: "Texas" },
    { id: 44, state: "Utah" },
    { id: 45, state: "Vermont" },
    { id: 46, state: "Virginia" },
    { id: 47, state: "Washington" },
    { id: 48, state: "West Virginia" },
    { id: 49, state: "Wisconsin" },
    { id: 50, state: "Wyoming" }
  ];

  constructor() { }

  ngOnInit() {}

  submitForm(form) {

  }
}