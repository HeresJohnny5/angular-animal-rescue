import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  headersPartners: string = "Pittsburgh Proud";
  headersDonate: string = "Make a Difference - Donate Today!";

  constructor() { }

  ngOnInit() {}
}
