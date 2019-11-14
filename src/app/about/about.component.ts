import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  headersAbout: string = "About Us";
  team: string = "Team";
  headersPartners: string = "Pittsburgh Proud";

  constructor() { }

  ngOnInit() {}
}
