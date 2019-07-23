import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-get-involved-card",
  templateUrl: "./get-involved-card.component.html",
  styleUrls: ["./get-involved-card.component.scss"]
})
export class GetInvolvedCardComponent implements OnInit {
  @Input() getInvolvedData;

  constructor() {}

  ngOnInit() {}
}
