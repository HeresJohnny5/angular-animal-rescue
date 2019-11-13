import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-form',
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.scss']
})
export class DonateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  submitForm(f) {
    console.log(f);
  }

}
