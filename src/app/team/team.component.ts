import { Component, OnInit } from '@angular/core';

import { Team } from "../team/team-modal";

import { TeamData } from "../../assets/data/team-data";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  teamMembers: Team[] = TeamData;
}
