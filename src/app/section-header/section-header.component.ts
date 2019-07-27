import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-section-header",
  templateUrl: "./section-header.component.html",
  styleUrls: ["./section-header.component.scss"]
})
export class SectionHeaderComponent implements OnInit {
  @Input() sectionTitle: string;

  constructor() {}

  ngOnInit() {}

  sectionHeaderValue() {
    return {
      "header-about": this.sectionTitle === "About Us",
      "header-content":
        this.sectionTitle === "Adopt" || this.sectionTitle === "Get Involved",
      "header-partners": this.sectionTitle === "Pittsburgh Proud"
    };
  }
}
