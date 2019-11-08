import { Component, OnInit } from '@angular/core';

import { TeamData } from "../../assets/data/team-data";

import { Team } from "../team/team-modal";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  headersAbout: string = "About Us";
  team: string = "Team"
}
